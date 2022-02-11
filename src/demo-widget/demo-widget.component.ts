import { Component, Input } from '@angular/core';
import { MeasurementService } from '@c8y/ngx-components/api';
import { IMeasurement, IMeasurementCreate } from '@c8y/client';
import { initTimestamp } from 'ngx-bootstrap/chronos/units/timestamp';
@Component({
    templateUrl: './demo-widget.component.html',
    styles: [ `margin-left: 5em;` ]
})
export class WidgetDemo {
    @Input() config;
    constructor(
      
        private measurementService: MeasurementService
  

        ) {}
   
        sendAlarm()
        {   
            let temp_measurement: Partial<IMeasurementCreate> = {

                sourceId: "13428664",
                c8y_TemperatureMeasurement: { T: { unit: 'C', value: 0 } },
              };
    
                
            this.measurementService.create(temp_measurement)

            setTimeout( () => {let temp_measurement: Partial<IMeasurementCreate> = {

                sourceId: "13428664",
                c8y_TemperatureMeasurement: { T: { unit: 'C', value: 1 } },
              };
    
                
            this.measurementService.create(temp_measurement)}, 1000 );

            setTimeout( () => {let temp_measurement: Partial<IMeasurementCreate> = {

                sourceId: "13428664",
                c8y_TemperatureMeasurement: { T: { unit: 'C', value: 0 } },
              };
    
                
            this.measurementService.create(temp_measurement)}, 3000 );
                        

        }


}
