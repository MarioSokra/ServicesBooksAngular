import { FormsModule } from '@angular/forms';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {
  book:any =  { id: 0, title:'', author:'', price:0, img:'', url:'' };
  constructor(public books: BooksService) { 
  }

  ngOnInit() {
  }
  enviar(){
    console.log(this.book);
    this.books.add(this.book);
  }

}
