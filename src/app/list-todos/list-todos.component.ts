import { Component, OnInit } from '@angular/core';

export class todo{
  constructor(
    public id: number,
    public description: string,
    public status: boolean,
    public targetDate: Date
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  
  todos= [
    new todo(1,'Learn Angular', false, new Date()),
    new todo(2, 'Learn Flask', false,new Date()),
    new todo(3, 'Learn Django', false, new Date()),
    new todo(4, 'Learn Selenium',false,new Date())
  ]
  constructor() { }

  ngOnInit() {
  }

}
