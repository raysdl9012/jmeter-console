import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { M_HEADER } from 'src/app/models/m.json';
import { JmeterService } from 'src/app/services/jmeter.service';

@Component({
  selector: 'app-http-headers',
  templateUrl: './http-headers.component.html',
  styleUrls: ['./http-headers.component.css']
})
export class HttpHeadersComponent implements OnInit {


  @Output() finishSendData = new EventEmitter<void>();

  public defaultHeaders = M_HEADER();

  constructor(
    private jmx_service:JmeterService
  ) { }

  ngOnInit(): void {
  }

  public saveConfigHeader(event: string){
    this.finishSendData.emit();
    this.jmx_service.setHttpHeadersJMX(event);
  }

}
