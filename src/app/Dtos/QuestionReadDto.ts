import { OptionReadDto } from "./OptionReadDto";



export class QuestionReadDto {
  constructor(
      public questionId: number,
      public text: string,
      public options: OptionReadDto[]
  ) {}
}
