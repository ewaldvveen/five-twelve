import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Quiz } from '../quizzes/models/quiz';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const quizzes = [
      { id: 12, title: 'Quiz 1' },
      { id: 13, title: 'Quiz 2' },
      { id: 14, title: 'Quiz 3' },
      { id: 15, title: 'Voetbal quiz' },
      { id: 16, title: 'Quiz 4' },
      { id: 17, title: 'Quiz 5' },
      { id: 18, title: 'Quiz 6' },
      { id: 19, title: 'Film quiz' },
      { id: 20, title: 'Quiz 7' }
    ];

    return {quizzes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(quizzes: Quiz[]): number {
    return quizzes.length > 0 ? Math.max(...quizzes.map(quiz => quiz.id)) + 1 : 11;
  }
}
