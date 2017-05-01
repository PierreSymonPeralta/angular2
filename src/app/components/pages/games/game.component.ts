import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

import { GameService } from './game.service'

@Component({
  selector: 'app-games',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  
  private selectedId:number;
  private sub:any;
  private listOfGames;
  private sampleUrl:string;

  constructor(
      private route:ActivatedRoute,
      private router:Router, 
      private gameService:GameService) { }

  ngOnInit() {
  	this.getGames();

    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.selectedId =  id ? id : null;
    });
  }

  onSelect(game):void	{
  	this.router.navigate(['/games', game.Id]);
  }

  getGames(): void {
    this.gameService.getGames()
    .then(res => {
        this.listOfGames = res;
    },
    error=>{
    	console.log(error);
    });
  }

}
