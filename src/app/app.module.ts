import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuotesDashboardComponent } from "./quotes-dashboard/quotes-dashboard.component";
import { QuotesFormComponent } from "./quotes-form/quotes-form.component";

//registering routes
const appRoutes: Routes = [
  { path: "post-quotes", component: QuotesFormComponent },
  { path: "dashboard", component: QuotesDashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, QuotesDashboardComponent, QuotesFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
