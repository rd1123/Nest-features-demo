import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseIntNPipe implements PipeTransform<string, number>{
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException("Transform validation failed");
    }
    return val;
  }
}