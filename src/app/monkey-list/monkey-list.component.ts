 import { Component, OnInit } from '@angular/core';

import { TruthService } from '../truth.service';


@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {
  monkeys = [];
  callitrichidae = [];
  cebidae = [];
  atelidae = [];
  aotidae = [];
  pitheciidae = [];
  whichWorld = "";
  whichWorldPreview = "";
  errorMessage = "";

  constructor(private truthService: TruthService) { }

  makeNewWorld(){
    console.log("make new world works!?");
    this.truthService.makeNewWorld();
  }

  makeOldWorld(){
    console.log("make old world works?!");
    this.truthService.makeOldWorld();
  }

  previewNewWorld(){
    console.log("make new world works!?");
    this.truthService.previewNewWorld();
  }

  previewOldWorld(){
    console.log("make old world works?!");
    this.truthService.previewOldWorld();
  }

  previewNoWorld(){
    console.log("make old world works?!");
    this.truthService.previewNoWorld();
  }

  ngOnInit() {

  this.truthService.getMonkeys()
    .then((list) => {
    this.monkeys = list;
    this.callitrichidae = list.filter((monkey)=>{ return monkey.family === "Callitrichidae"});
    this.cebidae = list.filter((monkey)=>{ return monkey.family === "Cebidae"});
    this.atelidae = list.filter((monkey)=>{ return monkey.family === "Atelidae"});
    this.aotidae = list.filter((monkey)=>{ return monkey.family === "Aotidae"});
    this.pitheciidae = list.filter((monkey)=>{ return monkey.family === "Pitheciidae"});
  })
  .catch((err) => {
    this.errorMessage = 'There was an error. Try again later.';
  });

  // figure out which world to show
  this.truthService.whichWorld
    .subscribe((result)=>{this.whichWorld = result});
    //
  this.truthService.whichWorldPreview
    .subscribe((result)=>{this.whichWorldPreview = result});
  } // ngOnInit

}
