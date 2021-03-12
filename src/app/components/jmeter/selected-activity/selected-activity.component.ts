import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IConfigConcurrency, IConfigThreadGroup } from 'src/app/interface/i.jmeterConfig';

@Component({
  selector: 'app-selected-activity',
  templateUrl: './selected-activity.component.html',
  styleUrls: ['./selected-activity.component.css']
})
export class SelectedActivityComponent implements OnInit {

  @Output() sendData = new EventEmitter<IConfigConcurrency | IConfigThreadGroup>();

  constructor() { }

  ngOnInit(): void {
  }

  public concurrencyData(event: any) {
    const data = event as IConfigConcurrency;
    this.sendData.emit(data);
  }

  public threadGroupData(event: any) {
    const data = event as IConfigThreadGroup;
    this.sendData.emit(data);
  }

}
