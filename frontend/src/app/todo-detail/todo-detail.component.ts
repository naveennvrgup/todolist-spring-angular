import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo/todo.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    if(this.id!=-1){
      this.todoService.retrieveTodo('naveensundar',this.id).subscribe(
        (response)=>{
          this.todo=response
          console.log(response)
        }
      )
    }
  }

  saveTodo(){
    if(this.id==-1){
      this.todoService.addTodo('naveensundar',this.todo).subscribe(
        (response)=>{
          console.log('created',response,this.todo)
          this.router.navigate(['todos'])
        }
      )
    }else{
      this.todoService.updateTodo('naveensundar',this.id,this.todo).subscribe(
        (response)=>{
          console.log('updated',response,this.todo)
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
