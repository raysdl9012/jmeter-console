import { Component, OnInit } from '@angular/core';
import { IConfigConcurrency, IConfigThreadGroup } from 'src/app/interface/i.jmeterConfig';
import { JMETER_FILE_CREATE_CONCURRENCE, JMETER_FILE_CREATE_THREAD_GROUP } from 'src/app/models/m.jmeter';
import { JmeterService } from 'src/app/services/jmeter.service';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
    private jmx_service:JmeterService,
    private observer: ObserversService
    ) { }

  ngOnInit(): void {
  }

  /**
   * Funcion que se encarga de generar el JMX del tipo de prueba seleccionado
   * @param event tipo de prueba seleccionada
   */
  public managerActivity(event: IConfigThreadGroup | IConfigConcurrency) {
    // Concurrency
    if(event.type == 1){
      let data = event as IConfigConcurrency
      let jmx = JMETER_FILE_CREATE_CONCURRENCE(data);
      this.jmx_service.setActivityJMX(jmx)
    }
    // ThreadGroup
    if(event.type == 2){
      let data = event as IConfigThreadGroup
      let jmx = JMETER_FILE_CREATE_THREAD_GROUP(data);
      this.jmx_service.setActivityJMX(jmx)
    }
    this.observer.setSignalChangeStatusSteps(3);
  }

}
