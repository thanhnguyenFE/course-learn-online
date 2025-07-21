import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import {CourseGrid} from "@/components/common";
import createUser from "@/lib/actions/user.actions";

const Page = async () => {
    const user = await createUser({
        clerkId: "clerk_123",
        email: "abc@gmail.com",
        username: 'abc'
    })
    return (
        <div>
            <Heading>Dashboard</Heading>
            <CourseGrid>
                <CourseItem/>
                <CourseItem/>
                <CourseItem/>
            </CourseGrid>

        </div>
    )
}

export default Page