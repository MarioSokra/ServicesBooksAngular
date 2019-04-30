import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  search:string="";
  list:any;
  constructor(private bookList:BooksService) { }
 
  ngOnInit() {
    this.list  = this.bookList.list;
 
  }
 
 }
