import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigGlobalVariables } from 'src/app/interface/i.jmeterConfig';
import { JMETER_FILE_SAMPLER_HTTP_HEADERS, JMETER_FILE_VARIABLES } from 'src/app/models/m.jmeter';

@Component({
  selector: 'app-global-variables',
  templateUrl: './global-variables.component.html',
  styleUrls: ['./global-variables.component.css']
})
export class GlobalVariablesComponent implements OnInit {

  @Input() typeTable?: number = 0;
  @Input() defaulJson?: any;
  @Output() sendData = new EventEmitter<string>();

  public globalVariablesConfig: IConfigGlobalVariables[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.defaulJson != undefined) {
      for (let key in this.defaulJson) {
        let a = {
          key: key,
          value: this.defaulJson[key]
        }
        this.globalVariablesConfig.push(a)
      }
    }
  }

  public addNewKey() {
    this.globalVariablesConfig.push({ 'key': '', 'value': '' });
  }

  public saveConfig() {
    if(this.globalVariablesConfig.length == 0)
      this.addNewKey();

    let xml = ''
    if (this.typeTable == 1) {
      xml = JMETER_FILE_VARIABLES(this.globalVariablesConfig);
    }

    if (this.typeTable == 2) {
      xml = JMETER_FILE_SAMPLER_HTTP_HEADERS(this.globalVariablesConfig)
    }
    this.sendData.emit(xml)
  }

  public deleteItem(index: number) {
    this.globalVariablesConfig.splice(index, 1);
  }

}
