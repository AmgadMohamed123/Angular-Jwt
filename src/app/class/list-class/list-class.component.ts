import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassService } from 'src/app/_services/class.service';
import { Class } from 'src/app/models/class';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  totalRecords:number;
  page:number=1;
//   classes=[{'id':1,'className':'Gamal','classFloor':'Hassan','maxSize':20,'currentSize':15,'freeSize':5},
//   {'id':2,'className':'Gamal','classFloor':'Hassan','maxSize':20,'currentSize':15,'freeSize':5}
//   ,   {'id':3,'className':'Gamal','classFloor':'Hassan','maxSize':20,'currentSize':15,'freeSize':5}


// ];


classes:Class[];
  constructor(private _class:ClassService) { }

  ngOnInit(): void {
  this.getClasses();
  }

  getClasses(){
    this._class.getClasses().subscribe(
      data=>console.log(data),
      err=>console.log(err)
    )
  }

}
