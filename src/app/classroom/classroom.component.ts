import {Component, Input} from "@angular/core";
import {IStudent} from "../interfaces/student.interface";
import {IClassroom} from "../interfaces/classroom.interface";

@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent{
  @Input()
  data!: IClassroom;

  studentArray: IStudent[] = [
    {studentName:'Markus Müller',studentAge:19,phoneNumber:'09123456789'},
    {studentName:'Mihoyo Hatsune',studentAge:18,phoneNumber:'01238799409'},
  ];
  teacherNames=[
    'Mark Müller',
    'Alice Fachman',
    'Long Nguyen'
  ];
  subjectNames=[
    'LBEP',
    'HCJS',
    'ACJ',
    'DMS'
  ];
  changeNameClass(){
    this.data.className='T2204M';
  }
  changeStatus(){
    this.data.classStatus = !this.data.classStatus;
  }
}
