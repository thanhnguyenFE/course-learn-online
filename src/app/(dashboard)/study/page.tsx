import Heading from "@/components/typography/Heading";
import CourseItem from "@/components/course/CourseItem";
import {CourseGrid} from "@/components/common";

const Page = () => {

    return (
        <div>
            <Heading>Khu vực học tập</Heading>
            <CourseGrid>
                <CourseItem/>
                <CourseItem/>
                <CourseItem/>
            </CourseGrid>

        </div>
    )
}

export default Page