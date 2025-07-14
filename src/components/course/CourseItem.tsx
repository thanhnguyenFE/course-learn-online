import Link from "next/link";
import Image from "next/image";
import {IconView, IconStar} from "@/components/icons";

const CourseItem = () => {
    return (
        <div className="bg-white border-gray-200 rounded-2xl p-4">
            <Link href="#" className="block h-[200px] relative">
                <Image
                    fill
                    src="https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image" className="w-full h-full object-cover rounded-lg"/>
                <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10
                    text-white font-medium bg-green-500 text-xs
                ">New</span>
            </Link>
            <div className="py-4">
                <h3 className="font-bold text-lg mb-10">
                    Khóa học ReactJS Master - Nắm vững kiến thức React chuyên sâu
                </h3>
                <div className="flex justify-between">
                    <div className='flex gap-4'>
                        <p className="flex gap-2 items-center"><IconView/>6</p>
                        <p className="flex gap-2 items-center"><IconStar/>15365</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="font-bold text-blue-700">499.000đ</span>
                        <span className="text-gray-400 line-through">899.000đ</span>
                    </div>
                </div>
                <div className="py-4 rounded-xl bg-blue-400 text-white text-center mt-4">Xem chi tiết</div>
            </div>
        </div>
    );
}

export default CourseItem