import { Component, OnInit } from '@angular/core';
import { IConfigConcurrency, IConfigSamplerHTTP, IConfigThreadGroup, IJmeterConfig } from 'src/app/interface/i.jmeterConfig';
import { IJsonContainer } from 'src/app/interface/i.jsonContainer';
import { IJsonContainerEmit } from 'src/app/interface/i.jsonContainer.emit';
import { JMETER_FILE_CREATE_CONCURRENCE, JMETER_FILE_CREATE_THREAD_GROUP, JMETER_FILE, JMETER_FILE_VARIABLES, JMETER_HEADER } from 'src/app/models/m.jmeter';
import { JmeterService } from 'src/app/services/jmeter.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public selectedActivity = false

  constructor(private jmx_service:JmeterService) {

  }

  ngOnInit(): void {

  }

  public createXML(){
    const config = this.jmx_service.getJmeterConfig();
    const xml = JMETER_FILE(config);
    console.log(xml);
    
  }
}
