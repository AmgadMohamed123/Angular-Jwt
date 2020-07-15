import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-class',
  templateUrl: './search-class.component.html',
  styleUrls: ['./search-class.component.css']
})
export class SearchClassComponent implements OnInit {
  searchKey:string;
  searchType:string;
  totalRecords:number;
  page:number=1;
  search(searchKey,searchType){
  this.searchKey=searchKey;
  this.searchType=searchType;
}
  constructor() { }

  ngOnInit(): void {
  }

}
