import { Component } from '@angular/core';
//import { Question } from './Questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `.correct {
      color: white;
    }`,
    `.wrong {
      color: white;
    }`
  ]
})



export class AppComponent {
  name = '';
  color = '';
  no1 : number;
  no2 : number;
  totalquestions : number;
  totalcorrectquestions : number = 0;
  qno: number = 1;
  isuserNameEmpty = false;
  result : any;  
  showResult : boolean = false;  
  questions : {qno: number, no1:number, no2:number, iscorrect: boolean, answer: number, correctanswers:number}[] = [];
  

  constructor(){
    this.no1 = Math.floor(Math.random()*100);
    this.no2 = Math.floor(Math.random()*100);    
    this.color = 'white';    
  }

  resetShowResult(){
    this.showResult=false;
    this.questions = [];
  }

  onClickNextNumbers(){
    this.no1 = Math.floor(Math.random()*100);
    this.no2 = Math.floor(Math.random()*100);  
    this.color = 'white';
    this.result = '';
    this.qno++;   
  }

          // this.qno,this.no1, this.no2,Number.parseInt(this.result.toString()), 
        //  (Number.parseInt(this.no1.toString()) + Number.parseInt(this.no2.toString())));   

  onClickShowResult(){ 
    if(this.qno <= this.totalquestions){
       (Number.parseInt(this.result.toString()) === (Number.parseInt(this.no1.toString()) + Number.parseInt(this.no2.toString())) ? this.color = 'green' : this.color = 'red' );                  
       if(Number.parseInt(this.result.toString()) === (Number.parseInt(this.no1.toString()) + Number.parseInt(this.no2.toString()))){
         this.totalcorrectquestions++;
         this.color = 'green'; 
         this.questions.push({
            qno : this.qno, no1 : this.no1, no2 : this.no2, iscorrect : true,
            answer : Number.parseInt(this.result.toString()),
            correctanswers : (Number.parseInt(this.no1.toString()) + Number.parseInt(this.no2.toString()))
         });    
       }else{
         this.color = 'red';         
         this.questions.push({
            qno : this.qno, no1 : this.no1, no2 : this.no2, iscorrect : false,
            answer : Number.parseInt(this.result.toString()),          
            correctanswers : (Number.parseInt(this.no1.toString()) + Number.parseInt(this.no2.toString()))
          });
       }      
    }
  }

  onClickShowFinalResult(){    
    this.color = 'white';
    this.result = '';
    this.qno = 1;    
    this.totalquestions = 0;
    this.no1 = Math.floor(Math.random()*100);
    this.no2 = Math.floor(Math.random()*100);  
    this.showResult = true;    
  }

  getColor(){
    return this.color;
  }

  onUpdateShowMsg(event : Event){
    if((<HTMLInputElement>event.target).value.length > 0){
      this.isuserNameEmpty = true;
    }else{
      this.isuserNameEmpty = false;
    }
  }

  onClickShowResetMsg = function(){
    this.name = '';
    this.isuserNameEmpty = false;
  }

}
