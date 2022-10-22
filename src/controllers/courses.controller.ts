import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from 'src/services/courses.service';

@Controller('courses')
export class CoursesController {
    
    constructor(private readonly courseService: CoursesService){}

    @Get("/:id")
    listAllCourses(@Param("id") id){
        return this.courseService.findById(id)
    }
}
