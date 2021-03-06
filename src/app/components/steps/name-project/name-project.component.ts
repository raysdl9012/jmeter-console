import { Component, OnInit } from '@angular/core';
import { JmeterService } from 'src/app/services/jmeter.service';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-name-project',
  templateUrl: './name-project.component.html',
  styleUrls: ['./name-project.component.css']
})
export class NameProjectComponent implements OnInit {

  // Nombre del proyecto
  public nameProject = '';

  constructor(
    private jmx_service:JmeterService,
    private observer: ObserversService
    ) { }

  ngOnInit(): void {
  }
  /**
   * Funcion que se encarga de guardar el jmx del nombre del proyecto
   */
  public saveConfig() {
    this.jmx_service.setNamePorjectJMX(this.nameProject);
    this.observer.setSignalChangeStatusSteps(1);
  }
}
