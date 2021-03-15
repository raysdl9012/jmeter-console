export interface IJmeterConfig {
  title?: string;
  xmlActivity?: string;
  xmlGlobalVariables?: string;
  xmlHTTP?: string;
  xmlHTTP_Heades?: string;
}

export interface IConfigConcurrency {
  targetLevel?: number;
  rampUp?: number;
  steps?: number;
  hold?: number;
  name?:  string;
  type: number;
}

export interface IConfigThreadGroup {
  numberThreads?: number;
  rampUp?: number;
  loop?: number;
  name?:  string;
  type: number;
}

export  interface IConfigGlobalVariables {
  key: string;
  value: string | number ;
}

export interface IConfigSamplerHTTP {
  name?:  string;
  port?: number;
  url?: string;
  endpoint?: string;
  xmlHeader?: string;
  typeRequest?: string;
  body?: string
}