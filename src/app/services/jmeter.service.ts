import { Injectable } from '@angular/core';
import { IJmeterConfig } from '../interface/i.jmeterConfig';

@Injectable({
  providedIn: 'root'
})
export class JmeterService {

  private jmeterConfig: IJmeterConfig = {};

  constructor() { 
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

  public setHttpJMX(xml: string){
    this.jmeterConfig.xmlHTTP = xml;
  }

  public setHttpHeadersJMX(xml: string){
    this.jmeterConfig.xmlHTTP_Heades = xml;
  }

  public getJmeterConfig(): IJmeterConfig{
    return this.jmeterConfig
  }
}
