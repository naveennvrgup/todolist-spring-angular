import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number=null,
    public description: string='',
    public done: boolean=false,
    public targetDate: Date=new Date()
  ){}

}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos = [] 
  successMsg=''


  constructor(
    private service: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos(){
    this.service.retrieveAllTodos('naveensundar').subscribe(
      response=>{
        this.todos=response
      }
    )
    this.successMsg=''
  }

  deleteTodoHandler(id){
    this.service.deleteTodo('naveensundar',id).subscribe(
      response=>{
        this.successMsg=`todo ${id} deleted successfully`
        this.refreshTodos()
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

  updateTodoHandler(id){
    this.router.navigate(['todos',id])
  }

}
