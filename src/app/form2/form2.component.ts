import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  standalone: false,
  
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  regForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(8)]),
    password:new FormControl('',[Validators.required,Validators.minLength(15)])
  });

  show(){ 
    console.log(this.regForm);
    console.log(this.regForm.controls.username);
    console.log(this.regForm.controls.password);
    console.log(this.regForm.value);
  }

}
