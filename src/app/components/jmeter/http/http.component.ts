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


  @Output() sendData = new EventEmitter<string>();

  public httpConfig: IConfigSamplerHTTP = {
    port: 442,
    typeRequest: 'GET',
    url: '',
    endpoint: '',
    body: ''
  }

  constructor(private jmx_service: JmeterService) { }

  ngOnInit(): void { }

  public saveConfig() {
    this.httpConfig.xmlHeader = this.jmx_service.getJmeterConfig().xmlHTTP_Heades;
    let xml = JMETER_FILE_SAMPLER_HTTP(this.httpConfig);
    this.sendData.emit(xml);
  }

  public sendJsonConfig(event: IJsonContainerEmit) {
    this.httpConfig.body = event.data;
  }

}
