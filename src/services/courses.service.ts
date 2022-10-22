import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {

    @HttpCode(HttpStatus.OK)
    findById(id: string){
        return `Você buscou o curso ${id}`;
    }
}
