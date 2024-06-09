export class VoteAddDto{
  constructor(
    public voterId:number|null = null,
    public optionId:number,
    public VoteDate:Date,
    public token : string
  ){}
}
