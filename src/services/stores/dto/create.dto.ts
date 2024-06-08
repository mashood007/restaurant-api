import { ApiProperty } from "@nestjs/swagger";

export class CreateStoreDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ required: false })
  description: string;
}
