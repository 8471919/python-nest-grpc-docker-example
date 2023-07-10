import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    console.log('hello');
    const res = await axios.get('http://python_server:8000/hi');

    console.log(res);

    console.log(res.data);

    return res.data;
  }
}
