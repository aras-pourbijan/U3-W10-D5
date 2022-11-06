import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePage } from './pages/complete/complete.page';
import { TodoPage } from './pages/todo/todo.page';

const routes: Routes = [
  {
    path:'todo',
    component:TodoPage
  },
  {
    path:'complete',
    component:CompletePage
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
