'use client';
import { BlogProps } from "@/components/blog/Blog";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import React from "react";





const uniqueBlog = async () => {
    const router = useRouter();
    const id = usePathname().split('/')[2];
    let data:BlogProps = {id: '', title: '', content: '', subTitle: ''};
    const blog = await axios.get(`http://localhost:3000/blog/${id}`).then((res) => {
        data = res.data;
    }
    ).catch((err) => {
        console.log(err);
    });
    
    const deleteBlog = () => {
        axios.delete(`http://localhost:3000/deleteBlog/${id}`).then((res) => {
            console.log(res);
            router.push('/blog');
            router.refresh();
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className='flex flex-col items-center justify-start w-[50%] h-[95%] bg-slate-100 rounded-md shadow-md gap-5 overflow-y-scroll p-2'>
                <div className="flex items-end justify-around w-full bg">
                    <div><Link href={'/blog'}>
                        <button className="flex items-center justify-end bg-sky-900 hover:bg-sky-500 text-slate-200 px-4 py-2 rounded" 
                        type="submit">Go Back to All Blogs</button>
                    </Link></div>
                    <div><button className="flex items-center justify-end bg-red-700 hover:bg-red-500 text-slate-200 px-4 py-2 rounded" onClick={deleteBlog}>
                        Delete Blog
                    </button></div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="items-center justify-center flex">
                        <h1 className='text-5xl font-bold text-slate-800 bg-slate-200 rounded px-10 py-4'>{data.title}</h1>
                    </div>
                    <div className="p-10 rounded bg-slate-300 shadow-sm">
                        <p className='text-base text-slate-800 text-clip'>{data.content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default uniqueBlog;