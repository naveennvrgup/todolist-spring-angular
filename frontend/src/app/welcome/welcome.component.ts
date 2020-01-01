import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username=''
  customMsg=''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['username']
  }

  getWelcomeMsgHandler(){
    this.service.executeHelloWorldBeanService().subscribe((response)=>{
      this.customMsg=response.message
    },(error)=>{
      this.customMsg=error.error.message
    })
  }

}
