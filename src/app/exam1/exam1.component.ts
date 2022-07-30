import {Component,} from "@angular/core";

import {IExam} from "../interfaces/exam1.interface";

@Component({
  selector: 'app-exam1',
  templateUrl: 'exam1.component.html'
})

export class Exam1Component{

  examArray: IExam[] = [
    {name:'Gemma Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Anna Itna',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Markus Muller',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Emilyt Linc',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
    {name:'Sirra Roberson',cc:'Apology for late response email',mail:'Hello Collette Wooten'},
  ];
}
