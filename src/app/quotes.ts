export class Quotes {
  //creating a constructor with required properties
  showQuote: boolean;

  constructor(
    public upVote: number = 0,
    public downVote: number = 0,
    public userName: string,
    public quoteTitle: string,
    public quoteAuthor: string,
    public quote: string,
    public date: Date
  ) {
    this.showQuote = false;
  }
}
