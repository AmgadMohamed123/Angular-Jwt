import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/_services/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
c=new  Class();
  constructor(private _http:ClassService) { }

  ngOnInit(): void {
  }
  addClass(){

    this._http.addClass(this.c).subscribe(
      data=>console.log(data),
      err=>console.log(err)
    )
    
  }
  

}
