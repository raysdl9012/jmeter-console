import { Component, OnInit } from '@angular/core';
import { JmeterService } from 'src/app/services/jmeter.service';

@Component({
  selector: 'app-name-project',
  templateUrl: './name-project.component.html',
  styleUrls: ['./name-project.component.css']
})
export class NameProjectComponent implements OnInit {

  public nameProject = '';


  constructor(private jmx_service:JmeterService) { }

  ngOnInit(): void {
  }
  public saveConfig() {
    this.jmx_service.setNamePorjectJMX(this.nameProject);
  }
}
