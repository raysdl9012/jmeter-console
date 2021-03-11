export function JMETER_GLOBAL_VARIABLES(key: string, value: string): string {
  return `
    <elementProp name="${key}" elementType="Argument">
    <stringProp name="Argument.name">${key}</stringProp>
    <stringProp name="Argument.value">${value}</stringProp>
    <stringProp name="Argument.metadata">=</stringProp>
    </elementProp>`
}

export function JMETER_HEADER(key: string, value: string): string {
  return `
  <elementProp name="" elementType="Header">
  <stringProp name="Header.name">${key}</stringProp>
  <stringProp name="Header.value">${value}</stringProp>
  </elementProp>`
}



export function JMETER_FILE_JMX(){
  const a = `<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.4">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="CP006" enabled="true">
      <stringProp name="TestPlan.comments"></stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">true</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
      <collectionProp name="Arguments.arguments">
        <application-global-variables>
        </collectionProp>
      </elementProp>
      <stringProp name="TestPlan.user_define_classpath"></stringProp>
    </TestPlan>
    <hashTree>
      <com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup guiclass="com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroupGui" testclass="com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup" testname="SOLICITADO" enabled="true">
        <elementProp name="ThreadGroup.main_controller" elementType="com.blazemeter.jmeter.control.VirtualUserController"/>
        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
        <stringProp name="TargetLevel">300</stringProp>
        <stringProp name="RampUp">600</stringProp>
        <stringProp name="Steps">10</stringProp>
        <stringProp name="Hold">0</stringProp>
        <stringProp name="LogFilename"></stringProp>
        <stringProp name="Iterations"></stringProp>
        <stringProp name="Unit">S</stringProp>
      </com.blazemeter.jmeter.threads.concurrency.ConcurrencyThreadGroup>
      <hashTree>
        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="Token Request" enabled="true">
          <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
          <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
            <collectionProp name="Arguments.arguments">
              <elementProp name="" elementType="HTTPArgument">
                <boolProp name="HTTPArgument.always_encode">false</boolProp>
                <stringProp name="Argument.value">{&#xd;
  &quot;password&quot;: &quot;123123123&quot;,&#xd;
  &quot;user&quot;: &quot;SapTest&quot;&#xd;
}</stringProp>
                <stringProp name="Argument.metadata">=</stringProp>
              </elementProp>
            </collectionProp>
          </elementProp>
          <stringProp name="HTTPSampler.domain">api.fuelpic.com</stringProp>
          <stringProp name="HTTPSampler.port"></stringProp>
          <stringProp name="HTTPSampler.protocol">https</stringProp>
          <stringProp name="HTTPSampler.contentEncoding"></stringProp>
          <stringProp name="HTTPSampler.path">/terpel/auth/login</stringProp>
          <stringProp name="HTTPSampler.method">POST</stringProp>
          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
          <stringProp name="HTTPSampler.connect_timeout"></stringProp>
          <stringProp name="HTTPSampler.response_timeout"></stringProp>
        </HTTPSamplerProxy>
        <hashTree>
          <JSONPostProcessor guiclass="JSONPostProcessorGui" testclass="JSONPostProcessor" testname="JSON Extractor" enabled="true">
            <stringProp name="JSONPostProcessor.referenceNames">auth_token</stringProp>
            <stringProp name="JSONPostProcessor.jsonPathExprs">$..token </stringProp>
            <stringProp name="JSONPostProcessor.match_numbers">1</stringProp>
            <boolProp name="JSONPostProcessor.compute_concat">true</boolProp>
          </JSONPostProcessor>
          <hashTree/>
        </hashTree>
        <CSVDataSet guiclass="TestBeanGUI" testclass="CSVDataSet" testname="Cargue de archivo CSV con Data" enabled="true">
          <stringProp name="delimiter">,</stringProp>
          <stringProp name="fileEncoding">ISO-8859-15</stringProp>
          <stringProp name="filename">../SP-Credito-Put.csv</stringProp>
          <boolProp name="ignoreFirstLine">false</boolProp>
          <boolProp name="quotedData">true</boolProp>
          <boolProp name="recycle">true</boolProp>
          <stringProp name="shareMode">shareMode.group</stringProp>
          <boolProp name="stopThread">false</boolProp>
          <stringProp name="variableNames">codigoCliente,areaCredito</stringProp>
        </CSVDataSet>
        <hashTree/>
        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="SP-Credito-Put" enabled="true">
          <boolProp name="HTTPSampler.postBodyRaw">true</boolProp>
          <elementProp name="HTTPsampler.Arguments" elementType="Arguments">
            <collectionProp name="Arguments.arguments">
              <elementProp name="" elementType="HTTPArgument">
                <boolProp name="HTTPArgument.always_encode">false</boolProp>
                <stringProp name="Argument.value">{&#xd;
    &quot;cliente&quot;: {&#xd;
    &quot;codigoCliente&quot;: &quot;codigoCliente&quot;,&#xd;
    &quot;sociedad&quot;: {&#xd;
        &quot;codigoSociedad&quot;: &quot;1000&quot;&#xd;
        }&#xd;
	},&#xd;
    &quot;areaCredito&quot;: &quot;1003&quot;,&#xd;
    &quot;cupoLimiteCredito&quot;: 1000000,&#xd;
    &quot;cupoDisponibleCredito&quot;: 1000000,&#xd;
    &quot;monedaCupo&quot;: &quot;COP&quot;,&#xd;
    &quot;modalidadCredito&quot;: &quot;C&quot;,&#xd;
    &quot;estado&quot;: &quot;Bloqueado&quot;,&#xd;
    &quot;fechaCreacion&quot;: &quot;2020-11-04&quot;,&#xd;
    &quot;fechaModification&quot;: &quot;2020-11-04&quot;,&#xd;
    &quot;horaModification&quot;: &quot;11:40:02&quot;		&#xd;
}</stringProp>
                <stringProp name="Argument.metadata">=</stringProp>
              </elementProp>
            </collectionProp>
          </elementProp>
          <stringProp name="HTTPSampler.domain">BASE_URL</stringProp>
          <stringProp name="HTTPSampler.port"></stringProp>
          <stringProp name="HTTPSampler.protocol">https</stringProp>
          <stringProp name="HTTPSampler.contentEncoding">UTF-8</stringProp>
          <stringProp name="HTTPSampler.path">END_POINT/1000/codigoCliente}/areaCredito</stringProp>
          <stringProp name="HTTPSampler.method">PUT</stringProp>
          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
          <boolProp name="HTTPSampler.BROWSER_COMPATIBLE_MULTIPART">true</boolProp>
          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>
          <stringProp name="HTTPSampler.connect_timeout"></stringProp>
          <stringProp name="HTTPSampler.response_timeout"></stringProp>
        </HTTPSamplerProxy>
        <hashTree>
          <HeaderManager guiclass="HeaderPanel" testclass="HeaderManager" testname="Gestor de Cabeceras HTTP" enabled="true">
            <collectionProp name="HeaderManager.headers">
            <application-header>
            </collectionProp>
          </HeaderManager>
          <hashTree/>
        </hashTree>
        <ResultCollector guiclass="TableVisualizer" testclass="ResultCollector" testname="View Results in Table" enabled="true">
          <boolProp name="ResultCollector.error_logging">false</boolProp>
          <objProp>
            <name>saveConfig</name>
            <value class="SampleSaveConfiguration">
              <time>true</time>
              <latency>true</latency>
              <timestamp>true</timestamp>
              <success>true</success>
              <label>true</label>
              <code>true</code>
              <message>true</message>
              <threadName>true</threadName>
              <dataType>true</dataType>
              <encoding>false</encoding>
              <assertions>true</assertions>
              <subresults>true</subresults>
              <responseData>false</responseData>
              <samplerData>false</samplerData>
              <xml>false</xml>
              <fieldNames>true</fieldNames>
              <responseHeaders>false</responseHeaders>
              <requestHeaders>false</requestHeaders>
              <responseDataOnError>false</responseDataOnError>
              <saveAssertionResultsFailureMessage>true</saveAssertionResultsFailureMessage>
              <assertionsResultsToSave>0</assertionsResultsToSave>
              <bytes>true</bytes>
              <sentBytes>true</sentBytes>
              <url>true</url>
              <threadCounts>true</threadCounts>
              <idleTime>true</idleTime>
              <connectTime>true</connectTime>
            </value>
          </objProp>
          <stringProp name="filename">./SP-Credito-Put/cp006/solicitado.csv</stringProp>
        </ResultCollector>
        <hashTree/>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
  `
  return a
}