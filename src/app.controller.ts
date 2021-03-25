import { Controller, Get, HttpException, HttpStatus, Query, Res, UseFilters } from '@nestjs/common';
import { query, Response } from 'express';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception/filter/http-exception.filter';
import { ForbiddenException } from './exception/forbidden.exception';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UseFilters(HttpExceptionFilter)
  async getException(
    @Res() response: Response,
    @Query() query
  ): Promise<string> {
    throw new HttpException({
      statusCode: 403,
      error: "Forbindden error",
    }, HttpStatus.FORBIDDEN);
  };

  @Get("/name")
  getName(
    @Query() name: Object
  ): string {
    return `This is correct name => ${name["name"]}`;
  };
}
