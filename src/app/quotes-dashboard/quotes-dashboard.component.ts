import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes-dashboard",
  templateUrl: "./quotes-dashboard.component.html",
  styleUrls: ["./quotes-dashboard.component.css"]
})
export class QuotesDashboardComponent implements OnInit {
  //creating an object and initializing it
  quotes: Quotes[] = [
    new Quotes(
      0,
      0,
      "loisa",
      "e=mc2",
      "einstein",
      "he said some things about physics",
      new Date()
    ),
    new Quotes(
      0,
      0,
      "ship ship",
      "sivir",
      "riri",
      "she said something about fashion",
      new Date()
    ),
    new Quotes(
      0,
      0,
      "sim 1",
      "tot",
      "jay-y",
      "he said somethiljsdflkjsdng about music",
      new Date()
    ),
    new Quotes(
      0,
      0,
      "sim 2",
      "vee",
      "jay-x",
      "he said something ablsjdfpsdfkout music",
      new Date()
    )
  ];

  //showing and hiding quotes
  toggleQuote(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  //deleting the quotes
  deleteQuote(index) {
    let deleteThis = confirm("Are you sure you want to delete quote: ");

    if (deleteThis) {
      this.quotes.splice(index, 1);
    }
  }

  //voting for the quotes
  public likeQuote: boolean = true;

  like(index) {
    if (this.likeQuote) {
      this.quotes[index].upVote += 1;
    }
  }

  public dislikeQuote: boolean = true;

  dislike(index) {
    if (this.dislikeQuote) {
      this.quotes[index].downVote += 1;
    }
  }

  //add new quote from form
  addNewGoal(quote) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  //find quote with the largest quote
  biggestNoInArray(arr, index) {
    var i = 0,
      n = arr.length;

    let count = (this.quotes[index].upVote += 1);
    let previous = this.quotes[index].upVote;

    for (; i != n; ++i) {
      let newCount = Math.max.apply(Math, count);

      if (previous == newCount) {
        return newCount;
      }
    }
  }

  ngOnInit() {}
}
