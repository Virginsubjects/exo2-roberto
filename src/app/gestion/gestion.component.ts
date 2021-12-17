import { Component, OnInit } from '@angular/core';
import { FormService } from '../footer/form/services/form.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  public userInfos=
  {
    prenom: '',
    nom : '',
    age:'',
    email:'',
    commentaire:''
  };
  constructor(private formService : FormService) { 
    this.userInfos = this.formService.user;
  }

  ngOnInit(): void {
    
  }

}
