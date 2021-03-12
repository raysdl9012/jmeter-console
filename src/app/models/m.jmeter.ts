import { IConfigConcurrency, IConfigGlobalVariables, IConfigThreadGroup, IJmeterConfig } from "../interface/i.jmeterConfig"

export function JMETER_HEADER(key: string, value: string): string {
  return `<elementProp name="a" elementType="Argument">
      <stringProp name="Argument.name">${key}</stringProp>
      <stringProp name="Argument.value">${value}</stringProp>
      <stringProp name="Argument.metadata">=</stringProp>
    </elementProp>`
}

export function JMETER_FILE(config: IJmeterConfig) {
  return `<?xml version="1.0" encoding="UTF-8"?>
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
}

export function JMETER_FILE_CREATE_THREAD_GROUP(config: IConfigThreadGroup) {
  return `<hashTree>
  <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">
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
  <hashTree/>`;
}

export function JMETER_FILE_CREATE_CONCURRENCE(config: IConfigConcurrency) {
  return `<hashTree>
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
    <hashTree/>
  </hashTree>`;
}

export function JMETER_FILE_VARIABLES(list: IConfigGlobalVariables[]) {

  let listTempleates = '';
  list.forEach(item => {
    let template = JMETER_FILE_VARIABLES_TEMPLATE(item);
    listTempleates += template;
  });
  return `<elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
    <collectionProp name="Arguments.arguments">
      ${listTempleates}
    </collectionProp>
  </elementProp>`;
}

export function JMETER_FILE_VARIABLES_TEMPLATE(configVariables: IConfigGlobalVariables) {
  return `<elementProp name="VARIABLE" elementType="Argument">
      <stringProp name="Argument.name">${configVariables.key}</stringProp>
      <stringProp name="Argument.value">${configVariables.value}</stringProp>
      <stringProp name="Argument.metadata">=</stringProp>
    </elementProp>`
}


export function JMETER_FILE_SAMPLER_HTTP() {
  return `<hashTree>
    <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">
      <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
      <stringProp name="HTTPSampler.domain"></stringProp>
      <stringProp name="HTTPSampler.port"></stringProp>
      <stringProp name="HTTPSampler.protocol"></stringProp>
      <stringProp name="HTTPSampler.contentEncoding"></stringProp>
      <stringProp name="HTTPSampler.path"></stringProp>
      <stringProp name="HTTPSampler.method">GET</stringProp>
      <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
      <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
      <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
      <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
      <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
      <stringProp name="HTTPSampler.connect_timeout"></stringProp>
      <stringProp name="HTTPSampler.response_timeout"></stringProp>
    </HTTPSamplerProxy>
    <hashTree/>`;
}