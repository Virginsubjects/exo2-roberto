import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VariablesGlobales } from '../globals';
import { FormService } from './form/services/form.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private globales : VariablesGlobales) { 
  }

  ngOnInit(): void {
  }

  hideFooter(){
    this.globales.showFooter = false;
  }

  hide(){
    return this.globales.showFooter;
  }

}
