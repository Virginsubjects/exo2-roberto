import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { VariablesGlobales } from 'src/app/globals';
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
              private router: Router, private globales: VariablesGlobales) { }

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
    this.globales.showFooter = true;
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
