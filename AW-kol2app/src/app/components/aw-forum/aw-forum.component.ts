import { Component, OnInit } from '@angular/core';
import {AWDataService} from "../../service/aw-data.service";

@Component({
  selector: 'aw-forum',
  templateUrl: './aw-forum.component.html',
  styleUrls: ['./aw-forum.component.css']
})
export class AWForumComponent implements OnInit {

  public items$: any;

  constructor(private service: AWDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response=>{
      this.items$ = response;
    })
  }

}
