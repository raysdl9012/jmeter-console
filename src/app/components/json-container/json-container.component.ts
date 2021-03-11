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

  @Input() jsonComponent?: IJsonContainer;
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
    if (this.jsonComponent)
      this.validateType();
  }

  private validateType() {
    if (this.jsonComponent?.type == 1)
      this.jsonData = M_GLOBAL();
    if (this.jsonComponent?.type == 2)
      this.jsonData = M_HEADER();

    const data: IJsonContainerEmit = {
      data: JSON.stringify(this.jsonData),
      type: this.jsonComponent!.type
    }
    this.emitSignal(data);
  }

  public getData(event: any) {
    const data: IJsonContainerEmit = {
      data: JSON.stringify(event),
      type: this.jsonComponent!.type
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
