import { Component, OnInit } from '@angular/core';
import {AWDataService} from "../../service/aw-data.service";

@Component({
  selector: 'aw-forum-details',
  templateUrl: './aw-forum-details.component.html',
  styleUrls: ['./aw-forum-details.component.css']
})
export class AWForumDetailsComponent implements OnInit {

  public item:any

  constructor(private service: AWDataService) { }

  ngOnInit(): void {
  }

  getItem(){
    this.service.getOrder("2").subscribe(response=>{
      this.item = response;
    })
  }

}
