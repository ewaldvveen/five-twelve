import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'quiz/:id', component: QuizDetailComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
