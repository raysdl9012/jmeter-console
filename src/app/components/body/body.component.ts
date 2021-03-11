import { Component, OnInit } from '@angular/core';
import { IJsonContainer } from 'src/app/interface/i.jsonContainer';
import { IJsonContainerEmit } from 'src/app/interface/i.jsonContainer.emit';
import { JMETER_FILE_JMX, JMETER_GLOBAL_VARIABLES, JMETER_HEADER } from 'src/app/models/m.jmeter';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public allConfigurationJMeter: any = {}

  public config1: IJsonContainer = {
    title: 'Configuracion variables locales',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et error debitis dolor corporis natus eligendi ipsa enim odio obcaecati perspiciatis placeat sint, alias sunt eius saepe. Itaque quis enim reiciendis.',
    type: 1
  }

  public config2: IJsonContainer = {
    title: 'Configuracion Header',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et error debitis dolor corporis natus eligendi ipsa enim odio obcaecati perspiciatis placeat sint, alias sunt eius saepe. Itaque quis enim reiciendis.',
    type: 2
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  private managerXML(type: number, obj: string, fileJMX: string): string {
    let jmeterString = '';
    const jsonObj = JSON.parse(obj);
    switch (type) {
      case 1: {
        for (const key in jsonObj) {
          jmeterString += JMETER_GLOBAL_VARIABLES(key, jsonObj[key])
        }
        jmeterString = jmeterString.substring(1);
        fileJMX = fileJMX.replace('<application-global-variables>', jmeterString);
        break
      }
      case 2: {
        for (const key in jsonObj) {
          jmeterString += JMETER_HEADER(key, jsonObj[key])
        }
        jmeterString = jmeterString.substring(1);
        fileJMX = fileJMX.replace('<application-header>', jmeterString);
        break
      }
    }
    
    return fileJMX;
  }

  public sendJsonConfig(data: IJsonContainerEmit) {
    this.allConfigurationJMeter[data.type] = data.data
  }

  public generateXML() {
    let fileJMX = JMETER_FILE_JMX();
    for (const property in this.allConfigurationJMeter) {
      fileJMX = this.managerXML(parseInt(property), this.allConfigurationJMeter[property], fileJMX)
    }
    console.log(fileJMX);
  }
}
