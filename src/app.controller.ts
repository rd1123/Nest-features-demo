import { Body, Controller, DefaultValuePipe, Get, HttpException, HttpStatus, ParseIntPipe, Param, Post, Query, Res, UseFilters, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateDto } from './dto/create-joi-validatioin.dto';
import { HttpExceptionFilter } from './exception/filter/http-exception.filter';
import { ParseBooleanPipe } from './pipe/parseBoolPipe.pipt';
import { ParseIntNPipe } from "./pipe/parseIntPipe.pipe";
import { ValidationPipe } from './pipe/validation.pipe';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/exception")
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

  @Get(":id")
  parseIntFunction(
    @Param("id", ParseIntNPipe) id: number
  ): string {
    return `parse number is ${id}`;
  };

  @Get("/pipeInstance/:id")
  setStatusCodeParseIntInstanceFunction(
    @Param("id", new ParseIntPipe({
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
    })) id: number
  ): string {
    return `instance pipe number is ${id}`;
  }

  // => use decorator use pipes
  @Post()
  @UsePipes(ValidationPipe)
  async createJoiValidationPipe(
    @Body() createDto: CreateDto
  ): Promise<object> {
    return {
      name: createDto.name,
      age: createDto.age,
      breed: createDto.breed
    }
  }

  // => use transform pipe
  @Post(":id")
  async parseInt(
    @Param("id", ParseIntNPipe) id: string
  ): Promise<string> {
    return `parse string to int id is ${id}`;
  }

  // => default value pipe demo
  @Get()
  async findAll(
    @Query("id", new DefaultValuePipe(1), ParseIntNPipe) id: number,
    @Query("isHuman", new DefaultValuePipe(true), ParseBooleanPipe) isHuman: boolean
  ) {
    return {
      id: id,
      isHuman: isHuman
    }
  }
}
