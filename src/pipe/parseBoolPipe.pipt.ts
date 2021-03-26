import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseBooleanPipe implements PipeTransform {
  transform(value: boolean, metadata: ArgumentMetadata): boolean {
    return value;
  }
}