import { Component, OnInit } from '@angular/core';
import { JMETER_FILE } from 'src/app/models/m.jmeter';
import { JmeterService } from 'src/app/services/jmeter.service';
import { FileSaverService } from 'ngx-filesaver';
import { ObserversService } from 'src/app/services/observers.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public stepJMeter = 0;

  constructor(
    private jmx_service: JmeterService,
    private observer: ObserversService,
    private _FileSaverService: FileSaverService) {

  }

  ngOnInit(): void {

    this.observer.getSignalChangeStatusSteps().subscribe((step)=>{
      this.stepJMeter =  step;
    })

  }

  public createXML() {
    let config = this.jmx_service.getJmeterConfig();
    

    if (config.xmlHTTP == undefined) {
      config.xmlActivity = config.xmlActivity!.replace('<http-config>', '');
    } else {
      config.xmlActivity = config.xmlActivity!.replace('<http-config>', config.xmlHTTP!);
    }
    let xml = JMETER_FILE(config);
    console.log(xml);
    
    let file = new Blob([xml])
    let name = 'jmx-' + this.makeid(4) + '.jmx';
    this._FileSaverService.save(file, name)

  }

  makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
