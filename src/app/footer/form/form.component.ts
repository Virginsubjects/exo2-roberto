import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  check: boolean = true;
  constructor(private formBuilder: FormBuilder, 
              private userService: FormService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      prenom:['', Validators.required],
      nom : ['', Validators.required],
      age : '',
      email : ['', [Validators.required, Validators.email]],
      commentaire:['', Validators.required],
    })
  }
  onSubmitForm(){
    const formValue = this.userForm.value;
    this.userService.user = this.userForm.value;
    console.log(this.userService.user.commentaire);
    this.router.navigate(['/accueil']);
  }
  hide(){
    this.check = false;
    this.userForm = this.formBuilder.group({
      prenom:['', Validators.required],
      nom : ['', Validators.required],
      age : '',
      email : '',
      commentaire:['', Validators.required],
    })

  }
}
