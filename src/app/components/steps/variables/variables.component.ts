import { Component, OnInit } from '@angular/core';
import { M_GLOBAL } from 'src/app/models/m.json';
import { JmeterService } from 'src/app/services/jmeter.service';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  
  public defaultHeaders = M_GLOBAL();

  constructor(
    private jmx_service:JmeterService,
    private observer: ObserversService
    ) { }

  ngOnInit(): void {
  }

  public globalVariableData(event: any){
    const data = event as string;
    this.observer.setSignalChangeStatusSteps(2);
    this.jmx_service.setGlobalVariblesJMX(data);
  }
}
