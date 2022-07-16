import {Component, Input} from "@angular/core";
import {IStudent} from "../interfaces/student.interface";

@Component({
  selector:'app-student',
  templateUrl:'./student.component.html'
})

export class StudentComponent{
  @Input()
  data!: IStudent;

  give1unit(){
    this.data.studentAge+=1;
  }
  take1unit(){
    this.data.studentAge-=1;
  }
  inputAge(){
    
  }
}

