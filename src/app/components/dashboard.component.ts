import { Component, OnInit } from '@angular/core';

import { GameService } from './pages/games/game.service';

@Component({
	selector:'my-dashboard',
	templateUrl:'./dashboard.component.html'
})

export class DashboardComponent {

	private currentUser:string;
	private childValue:string;

  	constructor(private gameService: GameService) {
  		this.currentUser = '';
  	}

	//on load function
	ngOnInit(): void {
	   	this.getGames();
	}

	childUpdate(value):void{
		this.childValue = value;
	}

	getGames(): void {
	    this.gameService.getGames()
	    .then(res => {
	        //console.log(res);
	    },
	    error=>{
	    	//console.log(error);
	    });
  	}
}
