import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  };

  @Get("/name")
  getName(
    @Query() name: Object
  ): string {
    return `This is correct name => ${name["name"]}`;
  };
}
