import PageNotFound from "@/app/not-found";
import { getUserInfo } from "@/lib/actions/user.actions";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import { EUserRole } from "@/types/enums";

const AdminLayout = async ({children}: { children: React.ReactNode }) => {
    const {userId} = await auth()
    if (!userId) return redirect('/sign-in')
    const user = await getUserInfo({userId});
    console.log("user",user);
    if(user && user.role !== EUserRole.ADMIN) return <PageNotFound/>
    return (
        <>
            {children}
        </>
    )
}

export default AdminLayout