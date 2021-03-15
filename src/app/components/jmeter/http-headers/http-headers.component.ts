import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { M_HEADER } from 'src/app/models/m.json';
import { JmeterService } from 'src/app/services/jmeter.service';

@Component({
  selector: 'app-http-headers',
  templateUrl: './http-headers.component.html',
  styleUrls: ['./http-headers.component.css']
})
export class HttpHeadersComponent implements OnInit {

  // Señal de salida del componente
  @Output() finishSendData = new EventEmitter<void>();

  // Cargar los headers por defecto
  public defaultHeaders = M_HEADER();

  constructor(
    private jmx_service:JmeterService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Funcion que se encarga de enviar el valor obtenido en los headers
   * @param event Valor de los headers
   */
  public saveConfigHeader(event: string){
    this.finishSendData.emit();
    this.jmx_service.setHttpHeadersJMX(event);
  }

}
