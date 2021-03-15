import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigThreadGroup } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-threadgroup',
  templateUrl: './threadgroup.component.html',
  styleUrls: ['./threadgroup.component.css']
})
export class ThreadgroupComponent implements OnInit {

// Varaible de entrada del coponente
  @Input() concurrencyConfigInput?: IConfigThreadGroup;
  // Señal de salida del componente
  @Output() sendData = new EventEmitter<IConfigThreadGroup>();

  // Configuracion de un ThreadGroup
  public threadGroupConfig?: IConfigThreadGroup;

  constructor() { }

  ngOnInit(): void {
    this.loadInitialConfig();
  }

  /**
   * Funcion que se encarga de cargar la configuracion inical para un threadgroup
   */
  private loadInitialConfig(){
    if (this.concurrencyConfigInput != undefined) {
      this.threadGroupConfig = this.concurrencyConfigInput
    } else {
      this.threadGroupConfig = {
        rampUp: 600,
        loop: 12,
        numberThreads: 10,
        name: 'Thread Group',
        type: 2
      }
    }
  }

  // Guardar la configuracion de un threadGroup
  public saveConfig() {
    this.sendData.emit(this.threadGroupConfig);
  }
}
