import { QuestionReadDto } from "./QuestionReadDto";

export class PollReadDto {
  constructor(
      public pollId: number,
      public title: string,
      public startDate: Date,
      public endDate: Date,
      public questions: QuestionReadDto[]
  ) {}
}
