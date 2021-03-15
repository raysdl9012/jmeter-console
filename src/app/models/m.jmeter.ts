/**
 * Archivo que contiene todas las porciones separadas del JMX para unirlas de acuerdo a la necesidad
 */
import { IConfigConcurrency, IConfigGlobalVariables, IConfigSamplerHTTP, IConfigThreadGroup, IJmeterConfig } from "../interface/i.jmeterConfig"

export function JMETER_FILE(config: IJmeterConfig): string {
  let a = `<?xml version="1.0" encoding="UTF-8"?>
  <jmeterTestPlan version="1.2" properties="5.0" jmeter="5.4">
    <hashTree>
      <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="${config.title}" enabled="true">
        <stringProp name="TestPlan.comments"></stringProp>
        <boolProp name="TestPlan.functional_mode">false</boolProp>
        <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>
        <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
        ${config.xmlGlobalVariables}
        <stringProp name="TestPlan.user_define_classpath"></stringProp>
      </TestPlan>
      ${config.xmlActivity}
      </hashTree>
    </hashTree>
  </jmeterTestPlan>
  `;
  return a;
}

export function JMETER_FILE_CREATE_THREAD_GROUP(config: IConfigThreadGroup): string {
  let a = `<hashTree>
  <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="${config.name}" enabled="true">
    <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
    <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="${config.name}" enabled="true">
      <boolProp name="LoopController.continue_forever">false</boolProp>
      <stringProp name="LoopController.loops">${config.loop}</stringProp>
    </elementProp>
    <stringProp name="ThreadGroup.num_threads">${config.numberThreads}</stringProp>
    <stringProp name="ThreadGroup.ramp_time">${config.rampUp}</stringProp>
    <boolProp name="ThreadGroup.scheduler">false</boolProp>
    <stringProp name="ThreadGroup.duration"></stringProp>
    <stringProp name="ThreadGroup.delay"></stringProp>
    <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>
  </ThreadGroup>
  <http-config>
  </hashTree>
  </hashTree>`;
  return a;
}

export function JMETER_FILE_CREATE_CONCURRENCE(config: IConfigConcurrency): string {
  let a = `<hashTree>
    <com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup guiclass="com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroupGui" testclass="com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup" testname="${config.name}" enabled="true">
      <elementProp name="ThreadGroup.main_controller" elementType="com.blazemeter.jmeter.control.VirtualUserController"/>
      <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
      <stringProp name="TargetLevel">${config.targetLevel}</stringProp>
      <stringProp name="RampUp">${config.rampUp}</stringProp>
      <stringProp name="Steps">${config.steps}</stringProp>
      <stringProp name="Hold">${config.hold}</stringProp>
      <stringProp name="LogFilename"></stringProp>
      <stringProp name="Iterations"></stringProp>
      <stringProp name="Unit">M</stringProp>
    </com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup>
    <http-config>
    </hashTree>
  </hashTree>`;
  return a;
}

export function JMETER_FILE_VARIABLES(list: IConfigGlobalVariables[]): string {

  let listTempleates = '';
  list.forEach(item => {
    let template = JMETER_FILE_VARIABLES_TEMPLATE(item);
    listTempleates += template;
  });
  let a = `<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
    <collectionProp name="Arguments.arguments">
      ${listTempleates}
    </collectionProp>
  </elementProp>`;
  return a;
}

export function JMETER_FILE_VARIABLES_TEMPLATE(configVariables: IConfigGlobalVariables) {
  let a = `<elementProp name="VARIABLE" elementType="Argument">
      <stringProp name="Argument.name">${configVariables.key}</stringProp>
      <stringProp name="Argument.value">${configVariables.value}</stringProp>
      <stringProp name="Argument.metadata">=</stringProp>
    </elementProp>`
  return a;
}

export function JMETER_FILE_SAMPLER_HTTP(configHTTP: IConfigSamplerHTTP): string {
  let headers = configHTTP.xmlHeader == undefined ? '' : configHTTP.xmlHeader
  let body = JMETER_FILE_SAMPLER_HTTP_BODY(configHTTP);
  let a = `<hashTree>
  <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">
    ${body}
    <stringProp name="HTTPSampler.domain">${configHTTP.url}</stringProp>
    <stringProp name="HTTPSampler.port">${configHTTP.port}</stringProp>
    <stringProp name="HTTPSampler.protocol">https</stringProp>
    <stringProp name="HTTPSampler.contentEncoding"></stringProp>
    <stringProp name="HTTPSampler.path">${configHTTP.endpoint}</stringProp>
    <stringProp name="HTTPSampler.method">${configHTTP.typeRequest}</stringProp>
    <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
    <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
    <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
    <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
    <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
    <stringProp name="HTTPSampler.connect_timeout"></stringProp>
    <stringProp name="HTTPSampler.response_timeout"></stringProp>
  </HTTPSamplerProxy>
  ${headers}
  <hashTree/>`;
  return a;
}

export function JMETER_FILE_SAMPLER_HTTP_BODY(configHTTP: IConfigSamplerHTTP): string {

  let a = `<boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
  <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
    <collectionProp name="Arguments.arguments">
      <elementProp name="" elementType="HTTPArgument">
        <boolProp name="HTTPArgument.always_encode">false</boolProp>
        <stringProp name="Argument.value">${configHTTP.body}</stringProp>
        <stringProp name="Argument.metadata">=</stringProp>
      </elementProp>
    </collectionProp>
  </elementProp>`;

  let b = `<elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
  <collectionProp name="Arguments.arguments"/>
</elementProp>`;

  return configHTTP.body ? a : b;
}

export function JMETER_FILE_SAMPLER_HTTP_HEADERS(list: IConfigGlobalVariables[]): string {
  let listTempleates = '';
  list.forEach(item => {
    let template = JMETER_FILE_SAMPLER_HTTP_HEADERS_TEMPLATE(item);
    listTempleates += template;
  });
  let a = `<hashTree>
  <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="HTTP Header Manager" enabled="true">
    <collectionProp name="HeaderManager.headers">
      ${listTempleates}
    </collectionProp>
  </HeaderManager>`;
  return a;
}

export function JMETER_FILE_SAMPLER_HTTP_HEADERS_TEMPLATE(configVariables: IConfigGlobalVariables): string {
  let a = `<elementProp name="" elementType="Header">
      <stringProp name="Header.name">${configVariables.key}</stringProp>
      <stringProp name="Header.value">${configVariables.value}</stringProp>
    </elementProp>`;
  return a;
}