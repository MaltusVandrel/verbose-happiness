import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Inject,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { ArtefatoService } from './artefato.service';
import { Artefato } from './artefato.entity';

@Controller('artefato')
export class ArtefatoController {
  constructor(@Inject() private service: ArtefatoService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.service.findOneBy(id);
  }
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
  /*
  fetch("http://localhost:3000/artefato", {
    "headers": {
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoicGFibG8iLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3NTIyMzk4NDksImV4cCI6MTc1MjI4MzA0OX0.BM9UYsT_0Hqt_2DXlAqoBhW0A1zIsGh2tlcD1iCQY9U",
        "Content-Type":"application/json"
    },
    "method": "POST",
    "body": '[{"descricao":"A","ativo":true}]',  
    "mode": "cors",
    "credentials": "omit"
    });
  */
  @Post()
  @Header('Content-Type', 'application/json')
  salvar(@Body() beans: Artefato[]) {
    return this.service.save(beans);
  }
}
