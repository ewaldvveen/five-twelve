import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QUIZZES } from '../mock-quizzes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  getQuizzes(): Observable<Quiz[]> {
    return of(QUIZZES);
  }
}
