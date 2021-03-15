import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { IJsonContainer } from 'src/app/interface/i.jsonContainer';
import { IJsonContainerEmit } from 'src/app/interface/i.jsonContainer.emit';
import { M_GLOBAL, M_HEADER } from 'src/app/models/m.json';

@Component({
  selector: 'app-json-container',
  templateUrl: './json-container.component.html',
  styleUrls: ['./json-container.component.css']
})
export class JsonContainerComponent implements OnInit {

  // Señal de salida del componente
  @Output() sendJsonConfig = new EventEmitter<IJsonContainerEmit>();
  // Obtener como hijo el componente de la libreria
  @ViewChild(JsonEditorComponent, { static: false }) editor?: JsonEditorComponent;

  // variable que contiene las opciones de configuracion de la libreria
  public editorOptions: JsonEditorOptions;

  // objeto json que se modifica al editar el view
  public jsonData = {}

  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code';
  }

  ngOnInit(): void {

  }

  /**
   * Funcion que se encarga de emitir el json generado
   * @param event 
   */
  public getData(event: any) {
    const data: IJsonContainerEmit = {
      data: JSON.stringify(event),
    };
    this.emitSignal(data);
  }

  /**
   * Funcion que se encarga de validar que si es un json
   * @param data informacin generada por la libreria
   * @returns Si es un archivo JSON returna verdadero, de lo contrario falso
   */
  private validateIsTrusted(data: string): boolean{
    const obj = JSON.parse(data);
    if(obj.isTrusted) return true;
    else return false;
  }

  /**
   * Funcion que se encarga de enviar la data generarda
   * @param data informacion de la libreria
   */
  private emitSignal(data: IJsonContainerEmit) {
    if(!this.validateIsTrusted(data.data))
      this.sendJsonConfig.emit(data);
  }
}
