import { Component, OnInit } from '@angular/core';
import { JmeterService } from 'src/app/services/jmeter.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  constructor(private jmx_service:JmeterService) { }

  ngOnInit(): void {
  }

  public globalVariableData(event: any){
    const data = event as string;
    this.jmx_service.setGlobalVariblesJMX(data);
  }
}
