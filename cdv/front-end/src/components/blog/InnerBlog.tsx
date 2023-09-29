import Link from "next/link";
import { BlogProps } from "./Blog";


interface InnerBlogProps {
    blogs: BlogProps[];
}

const InnerBlog = ({ blogs }: InnerBlogProps): JSX.Element => {
    blogs.reverse();
    return(
        <>
            {blogs.length === 0 ? (<div>none</div>) : blogs.map((blog) => {
                return (
                    <Link href={`/blog/${blog.id}`} className='flex flex-col items-center justify-around w-[80%] min-h-[100px] h-[150px] bg-slate-100 rounded-md shadow-md'>
                        <h1 className='text-2xl font-bold text-slate-800'>{blog.title}</h1>
                        <p className='text-lg text-slate-800'>{blog.subTitle}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default InnerBlog;