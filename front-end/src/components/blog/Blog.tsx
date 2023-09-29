import Link from "next/link";
import InnerBlog from "./InnerBlog";
import axios from "axios";

export interface BlogProps {
    id: string;
    title: string;
    content: string;  
    subTitle: string;  
};

const Blog = async () => {
    let data:BlogProps[] = [];

    const blogs = await axios.get('http://localhost:3000/blog').then((res) => {
        data = res.data;
    }
    ).catch((err) => {
        console.log(err);
    });
    
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className='flex items-center justify-start flex-col w-[50%] h-[95%] bg-slate-300 rounded-md pt-4 pb-4 gap-4 overflow-y-scroll p-4'>
                <div className="w-full justify-end flex">
                    <Link href={'/createBlog'} >
                        <button className="flex items-center justify-end bg-green-600 hover:bg-green-500 text-slate-200 px-4 py-2 rounded">
                            Create New Blog
                        </button>
                    </Link>
                </div>
                <p className="text-5xl font-bold text-slate-800">All Blogs</p>
                <InnerBlog blogs={data} />
            </div>

        </div>
    )
}

export default Blog;