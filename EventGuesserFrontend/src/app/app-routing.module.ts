import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { GamePageComponent } from './components/game-page/game-page.component';

const routes: Routes = [
  { path: 'edit', component: EditPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FrontPageComponent },
  { path: 'game', component: GamePageComponent },
];

@NgModule({
imports: [
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule]
})
export class AppRoutingModule { }
