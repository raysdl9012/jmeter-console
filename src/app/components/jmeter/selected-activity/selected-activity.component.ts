import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IConfigConcurrency, IConfigThreadGroup } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-selected-activity',
  templateUrl: './selected-activity.component.html',
  styleUrls: ['./selected-activity.component.css']
})
export class SelectedActivityComponent implements OnInit {

  // Señal de salida del componente
  @Output() sendData = new EventEmitter<IConfigConcurrency | IConfigThreadGroup>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Funion que se encarga de enviar el objeto de configuracion para concurrencia
   * @param event valor del xml
   */
  public concurrencyData(event: any) {
    let data = event as IConfigConcurrency;
    this.sendData.emit(data);
  }
  
  /**
   * Funion que se encarga de enviar el objeto de configuracion para threadgroup
   * @param event valor del xml
   */
  public threadGroupData(event: any) {
    let data = event as IConfigThreadGroup;
    this.sendData.emit(data);
  }

}
