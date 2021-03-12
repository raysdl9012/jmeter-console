import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IConfigGlobalVariables } from 'src/app/interface/i.jmeterConfig';
import { JMETER_FILE_VARIABLES } from 'src/app/models/m.jmeter';

@Component({
  selector: 'app-global-variables',
  templateUrl: './global-variables.component.html',
  styleUrls: ['./global-variables.component.css']
})
export class GlobalVariablesComponent implements OnInit {


  @Output() sendData = new EventEmitter<string>();
  
  public globalVariablesConfig: IConfigGlobalVariables[]  = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addNewKey() {
    this.globalVariablesConfig.push({ 'key': '', 'value': '' });
  }

  public saveConfig(){
    let c = JMETER_FILE_VARIABLES(this.globalVariablesConfig);
    this.sendData.emit(c)
  }

  public deleteItem(index: number){
    this.globalVariablesConfig.splice(index, 1);
  }
}
