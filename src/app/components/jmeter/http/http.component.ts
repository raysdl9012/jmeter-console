import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IConfigGlobalVariables, IConfigSamplerHTTP } from 'src/app/interface/i.jmeterConfig';
import { IJsonContainerEmit } from 'src/app/interface/i.jsonContainer.emit';
import { JMETER_FILE_SAMPLER_HTTP } from 'src/app/models/m.jmeter';
import { M_HEADER } from 'src/app/models/m.json';
import { JmeterService } from 'src/app/services/jmeter.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  // Señal de salida del componente
  @Output() sendData = new EventEmitter<string>();

  // Configuracion inicial HTTP
  public httpConfig: IConfigSamplerHTTP = {
    port: 443,
    typeRequest: 'GET',
    url: '',
    endpoint: '',
    body: ''
  }

  constructor(private jmx_service: JmeterService) { }

  ngOnInit(): void { }

  /**
   * Funcion que se encarga de guardar la configuracion inicial HTTP
   * genera el XML respectivo
   */
  public saveConfig() {
    this.httpConfig.xmlHeader = this.jmx_service.getJmeterConfig().xmlHTTP_Heades;
    let xml = JMETER_FILE_SAMPLER_HTTP(this.httpConfig);
    this.sendData.emit(xml);
  }

  /**
   * Funcion que se encarga de obtener el valor del HEADER 
   * @param event objeto que contiene la informacion del header
   */
  public sendJsonConfig(event: IJsonContainerEmit) {
    this.httpConfig.body = event.data;
  }

}
