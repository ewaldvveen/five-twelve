import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { QUIZZES } from '../mock-quizzes';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private url = 'api/quizzes';

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.url).pipe(
      catchError(this.handleError<Quiz[]>('getQuizzes', []))
    );
  }

  getQuiz(id: number): Observable<Quiz> {
    const url = `${this.url}/${id}}`;

    return this.http.get<Quiz>(url).pipe(
      catchError(this.handleError<Quiz>(`getQuiz id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(`Error in ${operation} occurred: ${error}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
