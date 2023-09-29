'use client';

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const createBlog = () => {
    const router = useRouter();
    
    const submitForm = async (event: any) => {

        const title = event.target.title.value;
        const subTitle = event.target.subTitle.value;
        const content = event.target.content.value;
        const blogs = await axios.post('http://localhost:3000/createBlog', {title,subTitle,content}).then((res) => {
            console.log(res);
    }
    ).catch((err) => {
        console.log(err);
    });
        router.push('/blog');
        router.refresh();
    };
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className='flex items-center justify-start flex-col w-[50%] h-[95%] bg-slate-300 rounded-md pt-4 pb-4 gap-4 overflow-y-scroll p-4'>
                <h1 className='text-2xl font-bold text-slate-800'>Create New Blog</h1> 
                <form method="POST" onSubmit={submitForm} className="flex items-center justify-start flex-col pt-4 pb-4 gap-10 w-full">
                    <div className="flex justify-center flex-col items-center w-[50%] gap-2">
                        <label className="flex items-center justify-center text-xl" htmlFor="title">Blog Title</label>
                        <input className="w-full h-[50px] bg-slate-200 rounded p-4" type="text" name="title" id="title" />
                    </div>

                    <div className="flex justify-center flex-col items-center w-[50%] gap-2">
                        <label className="flex items-center justify-center text-xl" htmlFor="subTitle">Blog subTitle</label>
                        <input className="w-full h-[50px] bg-slate-200 rounded p-4" type="text" name="subTitle" id="subTitle" />
                    </div>

                    <div className="flex justify-center flex-col items-center w-[50%] gap-2">
                        <label className="flex items-center justify-center text-xl" htmlFor="content">Blog Content</label>
                        <textarea className="w-full bg-slate-200 rounded p-4" name="content" id="content" rows={30} ></textarea>
                    </div>

                    <button className="flex items-center justify-end bg-green-800 hover:bg-green-500 text-slate-200 px-4 py-2 rounded" 
                    type="submit">Create New Blog</button>
                    <Link href={'/blog'}>
                        <button className="flex items-center justify-end bg-sky-900 hover:bg-sky-500 text-slate-200 px-4 py-2 rounded" 
                        type="submit">Go Back to All Blogs</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default createBlog;