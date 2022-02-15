import { Component, Input } from '@angular/core';
import { MeasurementService, AlarmService } from '@c8y/ngx-components/api';
import { IMeasurement, IMeasurementCreate, IAlarm } from '@c8y/client';
import { initTimestamp } from 'ngx-bootstrap/chronos/units/timestamp';
import { Severity } from '@c8y/client';
@Component({
    templateUrl: './demo-widget.component.html',
    styles: [ `margin-left: 5em;` ]
})
export class WidgetDemo {
    @Input() config;
    constructor(
      
        private measurementService: MeasurementService,
        private alarmService:  AlarmService
  

        ) {}
      
    public villas: string[] = ['14489852','17004166', '17004163', '17008950', '17005143', '17006049'];

    public alarms_sent: number = 0;

        sendAlarm()
        {   let device_id = this.villas[this.alarms_sent]
            console.log("Creating alarm for Device with ID " + String(device_id))
            if (this.alarms_sent >= 6)
            {
              return
            }
            
            let residetial_alarm: IAlarm ={

              severity: Severity.MAJOR,
              source: {
  
                  "id": device_id
              },
  
              time:  new Date().toISOString(),
  
              type: "residential_alarm",
  
              text: "Fire Alarm Registered"
  
  
          }
           
          this.alarmService.create(residetial_alarm)       
          this.alarms_sent++;
        }


}
