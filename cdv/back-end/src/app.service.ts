import { Injectable } from '@nestjs/common';
import { DtoModule } from './dto/dto.module';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getBlogs(): Promise<any> {
    const allBlogs = await prisma.blog.findMany();
    if (allBlogs)
      return allBlogs;
    else
      return 'NO BLOGS FOUND';
    
  }

  async getBlog(id: string): Promise<any> {
      const blog = await prisma.blog.findUnique({
        where: {
          id: +id,
        },
      }).then((blog) => {
        console.log('BLOG FOUND');
        return blog;
      }
      ).catch((error) => {
        console.log('CAN NOT GET BLOG');
        return error.message;
      });
      return blog;
    }
    

  async createBlog(body: DtoModule): Promise<any> {
    return await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        subTitle: body.subTitle,
      },
      }
    ).then((blog) => {
      console.log('BLOG CREATED');
      return blog;
    }
    ).catch((error) => {
      console.log('CAN NOT CREATE BLOG');
      return error.message;
    });
  }

  async deleteBlog(id: string): Promise<any> {
    return await prisma.blog.delete({
      where: {
        id: +id,
      },
      }
    ).then((blog) => {
      console.log('BLOG DELETED');
      return blog;
    }
    ).catch((error) => {
      console.log('CAN NOT DELETE BLOG');
      return error.message;
    });
  }

}
