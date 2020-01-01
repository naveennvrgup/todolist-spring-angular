import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo/todo.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  id:number
  todo:Todo=new Todo()

  constructor(
    private todoService: TodoDataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.todoService.retrieveTodo('naveensundar',this.id).subscribe(
      (response)=>{
        this.todo=response
        console.log(response)
      }
    )
  }

}
