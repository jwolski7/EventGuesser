import { Component, OnInit } from '@angular/core';
import { HistoricalEvent } from 'src/app/models/historical-event';
import { HistoricalEventsService } from 'src/app/services/historical-events.service';
import { Queue } from 'src/app/DataStructures/queue';
import { delay, flatMap } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit{

  public queue: Queue<HistoricalEvent>;
  public arr: Array<HistoricalEvent>;

  constructor(private historicalEventsService: HistoricalEventsService) { 
    this.queue = new Queue<HistoricalEvent>(2);
    this.arr = new Array<HistoricalEvent>(2);
  }

  
  events: HistoricalEvent[] = [];
  clicked = false;

  bool1 = false; bool2 = false;
  rand1 = 0; rand2 = 0;
  score = 0; highScore = 0;
  name1 = ""; name2 = "";
  timer1 = 0; timer2 = 0;
  year1 = 0; year2 = 0
  
   image1 = {
      img: 'assets/pictures/',   
    }

    image2 = {
      img: 'assets/pictures/',   
    }

  ngOnInit(): void {
    this.getEvents(); 
  }

  getEvents(): void {
  
    this.historicalEventsService.getHistoricalEvent().subscribe(events => this.events = events);
  }


  handlePlay(): void {
    var random1 = Math.floor(Math.random() * this.events.length);
    do {
      var random2 = Math.floor(Math.random() * this.events.length);
    } while(random1 == random2);
    
    this.arr[0] = this.events[random1];
    
    this.arr[1] = this.events[random2];
    this.rand1 = random1;
    this.rand2 = random2;
    this.image1.img += this.arr[0].pictureName;
    this.image2.img += this.arr[1].pictureName;
    this.year1 = this.arr[0].year;
    this.year2 = this.arr[1].year;
    this.clicked = true;
    this.name1 = this.arr[0].name;
    this.name2 = this.arr[1].name;

    console.log(this.arr);

    this.bool1 = true;
  }

  handleClick1() { 
    this.timer2 = 0;
    this.compare(1);
    if (this.timer1 != 1) {
      this.setPicture1();
      this.bool1 = false;
      this.bool2 = true;
      
      this.timer1 ++;
      
    }

    else { 
      this.setPicture2();
      this.bool1 = true;
      this.bool2 = false;
      this.timer1 = 0;
      
    }
    console.log("test1 " + this.timer1);
  }

  handleClick2() {
    this.timer1 = 0;
    this.compare(2);
    if (this.timer2 != 1) {
      this.setPicture2();
      this.bool1 = true;
      this.bool2 = false;
      this.timer2 ++;
      
    }

    else{
      this.setPicture1();
      this.bool1 = false;
      this.bool2 = true;
      this.timer2 = 0;
      
    }
    console.log("test2 " + this.timer2);
  }


  setPicture1(): void {
    do {
      var random = Math.floor(Math.random() * this.events.length);
    } while(random == this.rand2 || random == this.rand1);
    
    this.rand1 = random;
    this.arr[0] = this.events[random];

    this.image1.img = 'assets/pictures/' + this.arr[0].pictureName;
    this.year1 = this.arr[0].year;
    this.name1 = this.arr[0].name; 
  }

  setPicture2(): void {
    do {
      var random = Math.floor(Math.random() * this.events.length);
    } while(random == this.rand1 || random == this.rand2);
    this.rand2 = random;

    this.arr[1] = this.events[random];

    this.image2.img = 'assets/pictures/' + this.arr[1].pictureName;
    this.year2 = this.arr[1].year;
    this.name2 = this.arr[1].name;
  }

  compare(click: number): boolean {
    

    if (click == 1) {
      if(this.arr[0].year < this.arr[1].year) {
        this.score ++;
        return true;
      }
      else {
        this.lost();
      }
    }
    else {
      if(this.arr[1].year < this.arr[0].year) {
        this.score ++;
        return true;
      }
      else {
        this.lost();
      }
    }
    return true;
  }

  lost(): void {
    console.log(this.score);
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.score = 0;
    this.timer1 = 0;
    this.timer2 = 0;
    
  }
}


