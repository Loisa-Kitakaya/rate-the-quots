export class Quotes {
  //creating a constructor with required properties
  showQuote: boolean;
  constructor(
    public userName: string,
    public quoteTitle: string,
    public quoteAuthor: string,
    public quote: string
  ) {
    this.showQuote = false;
  }
}
