import {Webhook} from "svix";
import {WebhookEvent} from "@clerk/backend";
import createUser from "@/lib/actions/user.actions";
import {NextResponse} from "next/server";
import {headers} from "next/headers";


export async function POST(req: Request) {
    const svix_id = req.headers.get("svix-id") ?? "";
    const svix_timestamp = headers().get("svix-timestamp") ?? "";
    const svix_signature = headers().get("svix-signature") ?? "";

    if (!process.env.WEBHOOK_SECRET) throw new Error("WEBHOOK_SECRET is not defined");

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const sivx = new Webhook(process.env.WEBHOOK_SECRET);

    let msg: WebhookEvent;

    try {
        msg = sivx.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return new Response("Bad Request", {status: 400});
    }
    const eventType = msg?.type;

    if (eventType === "user.created") {
        const {
            id,
            username,
            email_addresses,
        } = msg?.data;

        const user = createUser({
            clerkId: id,
            email: email_addresses[0].email_address,
            username: username!
        })


        return NextResponse.json({
            message: "OK",
            user
        })
    }

    // Rest

    return new Response("OK", {status: 200});
}