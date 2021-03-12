import { Injectable } from '@angular/core';
import { IJmeterConfig } from '../interface/i.jmeterConfig';

@Injectable({
  providedIn: 'root'
})
export class JmeterService {

  private jmeterConfig: IJmeterConfig;

  constructor() { 
    this.jmeterConfig = {}
  }

  public setNamePorjectJMX(title: string){
    this.jmeterConfig.title = title;
  }

  public setActivityJMX(xml: string){
    this.jmeterConfig.xmlActivity = xml;
  }

  public setGlobalVariblesJMX(xml: string){
    this.jmeterConfig.xmlGlobalVariables = xml;
  }

  public getJmeterConfig(): IJmeterConfig{
    return this.jmeterConfig
  }
}
