import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Quiz } from '../quizzes/models/quiz';
import { QuizService } from '../quizzes/services/quiz.service';

@Component({
  selector: 'ft-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  latestQuizzes: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.getLatestQuizzes();
  }

  private getLatestQuizzes(): void {
    this.quizService.getQuizzes()
      .pipe(take(4))
      .subscribe(response => this.latestQuizzes = response);
  }
}
