import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigGlobalVariables } from 'src/app/interface/i.jmeterConfig';
import { JMETER_FILE_SAMPLER_HTTP_HEADERS, JMETER_FILE_VARIABLES } from 'src/app/models/m.jmeter';

@Component({
  selector: 'app-global-variables',
  templateUrl: './global-variables.component.html',
  styleUrls: ['./global-variables.component.css']
})
export class GlobalVariablesComponent implements OnInit {

  // Varaible de entrada del coponente
  @Input() typeTable?: number = 0;
  // Varaible de entrada del coponente
  @Input() defaulJson?: any;
  // Señal de salida del componente
  @Output() sendData = new EventEmitter<string>();

  // Lista de variables para crear el objeto
  public globalVariablesConfig: IConfigGlobalVariables[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDefaultJson();
  }

  /**
   * Funcion que se encarga de cargar la configuracion inicial de un formato JSON
   */
  private loadDefaultJson(){
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

  // Agregar un nuevo elemento a la lista de cariables
  public addNewKey() {
    this.globalVariablesConfig.push({ 'key': '', 'value': '' });
  }

  /**
   * Funcion que se encarga de guardar la configuración de variables creadas en formato
   * tipo JSON
   */
  public saveConfig() {
    if(this.globalVariablesConfig.length == 0)
      this.addNewKey();

    let xml = ''
    // Formato variables globales
    if (this.typeTable == 1) {
      xml = JMETER_FILE_VARIABLES(this.globalVariablesConfig);
    }
    // Formato para variables json headers
    if (this.typeTable == 2) {
      xml = JMETER_FILE_SAMPLER_HTTP_HEADERS(this.globalVariablesConfig)
    }
    this.sendData.emit(xml)
  }

  /**
   * Funcion que se encarga de eliminar un item de la lista
   * @param index index del elemento de la lista
   */
  public deleteItem(index: number) {
    this.globalVariablesConfig.splice(index, 1);
  }

}
