import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent }    from './game.component';
import { GamedetailsComponent }  from './gamedetails.component';

const gameRoutes: Routes = [
  { path: 'games',  component: GameComponent },
  { path: 'games/:id', component: GamedetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }

export const gameComponents = [GameComponent, GamedetailsComponent];
