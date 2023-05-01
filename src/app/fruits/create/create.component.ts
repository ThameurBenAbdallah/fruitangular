import { Component, OnInit } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  fruitForm: Fruits = {
    id: 0,
    Name: '',
    Price: 0,
    Quantity: 0,
  };
 
  constructor(private fruitService:FruitsService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
