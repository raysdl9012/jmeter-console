import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IConfigConcurrency } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-concurrency',
  templateUrl: './concurrency.component.html',
  styleUrls: ['./concurrency.component.css']
})
export class ConcurrencyComponent implements OnInit {


  @Input() concurrencyConfigInput?: IConfigConcurrency;
  @Output() sendData = new EventEmitter<IConfigConcurrency>();

  public concurrencyConfig?: IConfigConcurrency;

  constructor() { }

  ngOnInit(): void {
    if (this.concurrencyConfigInput != undefined) {
      this.concurrencyConfig = this.concurrencyConfigInput
    } else {
      this.concurrencyConfig = {
        targetLevel: 100,
        rampUp: 600,
        hold: 400,
        steps: 10,
        name: 'Concurrencia',
        type: 1

      }
    }
  }

  public saveConfig() {
    this.sendData.emit(this.concurrencyConfig);
  }

}
