import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DtoModule } from './dto/dto.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/blog')
  getBlogs(): any {
    return this.appService.getBlogs();
  }

  @Get('/blog/:id')
  async getBlog(@Param('id') id:string): Promise<any> {
    console.log(id);
    return await this.appService.getBlog(id);
  }

  @Post('/createBlog')
  createBlog(@Body() body:DtoModule): Promise<any> {
    return this.appService.createBlog(body);
  }

  @Delete('/deleteBlog/:id')
  deleteBlog(@Param('id') id:string): Promise<any> {
    return this.appService.deleteBlog(id);
  }
}
