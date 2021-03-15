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

  
  @Output() sendJsonConfig = new EventEmitter<IJsonContainerEmit>();
  @ViewChild(JsonEditorComponent, { static: false }) editor?: JsonEditorComponent;

  public editorOptions: JsonEditorOptions;

  public jsonData = {}

  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code';
  }

  ngOnInit(): void {

  }

  public getData(event: any) {
    const data: IJsonContainerEmit = {
      data: JSON.stringify(event),
    };
    this.emitSignal(data);
  }

  private validateIsTrusted(data: string): boolean{
    const obj = JSON.parse(data);
    if(obj.isTrusted) return true;
    else return false;
  }

  private emitSignal(data: IJsonContainerEmit) {
    if(!this.validateIsTrusted(data.data))
      this.sendJsonConfig.emit(data);
  }
}
