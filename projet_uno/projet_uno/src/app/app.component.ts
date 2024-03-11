// app.component.ts

import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = []; 
  newItemName: string = ''; 
  newItemDescription: string = ''; 

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      (response: any) => {
        this.items = response.items;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addItem() {
    if (this.newItemName && this.newItemDescription) {
      this.itemService.addItem(this.newItemName, this.newItemDescription).subscribe(
        (response: any) => {
          console.log(response.message);
          this.getItems();
          this.newItemName = '';
          this.newItemDescription = '';
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Name and description are required fields');
    }
  }
}
