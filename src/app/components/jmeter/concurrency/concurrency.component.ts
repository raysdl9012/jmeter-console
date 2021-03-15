import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigConcurrency } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-concurrency',
  templateUrl: './concurrency.component.html',
  styleUrls: ['./concurrency.component.css']
})
export class ConcurrencyComponent implements OnInit {


  // Varaible de entrada del coponente
  @Input() concurrencyConfigInput?: IConfigConcurrency;
  // Señal de salida del componente
  @Output() sendData = new EventEmitter<IConfigConcurrency>();

  public concurrencyConfig?: IConfigConcurrency;

  constructor() { }

  ngOnInit(): void {
    this.managerInitConfig();
  }

  /**
   * Funcion que se encarga de evalular si hay parametros iniciales en la configuración, si no hay parametros iniciales 
   * crea unos por defecto
   */
  private managerInitConfig(){
    if (this.concurrencyConfigInput != undefined) {
      this.concurrencyConfig = this.concurrencyConfigInput
    } else {
      this.concurrencyConfig = {
        targetLevel: 100,
        rampUp: 600,
        hold: 400,
        steps: 10,
        name: 'Concurrencia',
        type: 1
      }
    }
  }

  /**
   * Funcion que se encarga de salvar la configuracion
   */
  public saveConfig() {
    this.sendData.emit(this.concurrencyConfig);
  }

}
