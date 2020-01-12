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
    new Quotes("loisa", "einstein", "he said some things about physics"),
    new Quotes("ship ship", "riri", "she said something about fashion"),
    new Quotes("sim sim", "jay-z", "he said something about music"),
    new Quotes("sim sim", "jay-z", "he said something about music"),
    new Quotes("sim sim", "jay-z", "he said something about music")
  ];

  ngOnInit() {}
}
