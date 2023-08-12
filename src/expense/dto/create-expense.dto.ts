export class CreateExpenseDto {
  public title: string;
  public description?: string;
  public date: Date;
  public category: string;
  public amount: number;
}
