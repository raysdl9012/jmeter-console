import { Component, OnInit } from '@angular/core';
import { JmeterService } from 'src/app/services/jmeter.service';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-http-jmeter',
  templateUrl: './http-jmeter.component.html',
  styleUrls: ['./http-jmeter.component.css']
})
export class HttpJmeterComponent implements OnInit {

  public stepHTTP = 0;

  constructor(
    private jmx_service: JmeterService,
    private observer: ObserversService
    ) { }

  ngOnInit(): void {
    this.stepHTTP = 0;
  }

  public managerHTTP(event: string) {
    this.jmx_service.setHttpJMX(event);
    this.observer.setSignalChangeStatusSteps(4);
  }

  public managerHTTPHeaders() {
    this.stepHTTP = 1;
  }
}
