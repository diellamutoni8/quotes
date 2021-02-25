import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Myquotes} from '../myquotes'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();
  
  myquotesComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  myquotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  

  myquotes: Myquotes[] = [
    new Myquotes(1,'If it does not challenge it will not change you ','Diella',0,0,new Date(2021,2,20)),
    new Myquotes(2,'Trust is earned when actions meet words','chris',0,0,new Date(2021,2,21)),
    
    
  ];
  
 // vote quote
 votequote = 0;
 voteshow = true;
 

 voteShow(){
   
      this.voteshow = true;
      return this.votequote= this.votequote+ 1;
 }
 // download vote
 downloadquote = 0;
 downloadshow = true;

 downloadShow(){
      this.downloadshow = true;
      return this.downloadquote= this.downloadquote+ 1;
 
       // return this.votequote= this.votequote- 1;
 
  // 
      
 }
 
  

  toggleDetails(index: any){
    this. myquotes[index].showDescription = !this. myquotes[index].showDescription;
  }

  addNewMyquotes(myquotes: Myquotes){
    let myquotesLength = this.myquotes.length;
    myquotes.id =myquotesLength+1;
    myquotes.completeDate = new Date(myquotes.completeDate)
    this.myquotes.push(myquotes)

  }


  
  // completeMyquotes(isComplete, index){
  //   if (isComplete) {
  //     this.myquotes.splice(index,1);
  //   }
  // }
    // deleteMyquotes(isComplete, index){
    //   if(isComplete){

    //     let toDelete=confirm('are you sure to delete  ${this.myquotes[index].quote}?')
    //     if (toDelete){
    //       this.myquotes.splice(index,1)
    //     }

    //   }}
  
  deleteMyquotes(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myquotes[index].quote}?`)

      if (toDelete){
        this.myquotes.splice(index,1)
      }
    }
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
