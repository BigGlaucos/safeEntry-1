import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeralServiceService } from 'src/geral-service.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
  
  form = new FormGroup({
    id : new FormControl('', [Validators.required])
  });
  
  user : any;
  constructor(public service : GeralServiceService){}
  ngOnInit(): void {
   
  }
  teste(){
   console.log("PLPLPLPL");
    
  }
}
