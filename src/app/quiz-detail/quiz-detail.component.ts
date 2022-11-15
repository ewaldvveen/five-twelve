import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../quizzes/models/quiz';
import { QuizService } from '../quizzes/services/quiz.service';

@Component({
  selector: 'ft-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {
  selectedQuiz: Quiz | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private quizService: QuizService
    ) { }

  ngOnInit(): void {
    this.getQuiz();
  }

  goBack(): void {
    this.location.back();

  }

  private getQuiz(): void {
    const quizId = Number(this.route.snapshot.paramMap.get('id'));

    this.quizService.getQuiz(quizId)
      .subscribe(response => this.selectedQuiz = response);
  }
}
