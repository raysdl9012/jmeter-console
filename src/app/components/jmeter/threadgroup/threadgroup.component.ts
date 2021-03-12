import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigThreadGroup } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-threadgroup',
  templateUrl: './threadgroup.component.html',
  styleUrls: ['./threadgroup.component.css']
})
export class ThreadgroupComponent implements OnInit {


  @Input() concurrencyConfigInput?: IConfigThreadGroup;
  @Output() sendData = new EventEmitter<IConfigThreadGroup>();

  public threadGroupConfig?: IConfigThreadGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.concurrencyConfigInput != undefined) {
      this.threadGroupConfig = this.concurrencyConfigInput
    } else {
      this.threadGroupConfig = {
        rampUp: 600,
        loop: 12,
        numberThreads: 10,
        name: 'Thread Group',
        type: 2
      }
    }
  }

  public saveConfig() {
    this.sendData.emit(this.threadGroupConfig);
  }


}
