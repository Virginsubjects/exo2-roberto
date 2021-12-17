import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  user = 
    {
      prenom: '',
      nom : '',
      age:'',
      email:'',
      commentaire:''
    }

  constructor() { }

  getUser(){
    return this.user;
  }
}
