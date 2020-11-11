import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<any>();

  aTitle : string;
  aUrl: string;

  addArticle() {
    this.newItemEvent.emit({
      title: this.aTitle,
      url:this.aUrl
    })
    }
    
  }


