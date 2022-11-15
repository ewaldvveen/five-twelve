import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';

// For testing purposes only
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './test/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    QuizzesComponent,
    QuizDetailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
