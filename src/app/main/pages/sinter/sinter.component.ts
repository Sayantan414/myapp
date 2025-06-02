import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility-service.service';

@Component({
  selector: 'app-sinter',
  standalone: true,
  imports: [],
  templateUrl: './sinter.component.html',
  styleUrl: './sinter.component.css'
})
export class SinterComponent {

  private timeoutRef: any;
  private destroyed = false;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.cogasData();
  }

  cogasData() {
    if (this.destroyed) return; // prevent any further execution if destroyed
    this.utilityService.co_consumption_sp().subscribe(
      (response) => {
        console.log("Response from co_consumption_sp: ", response);
        let data = JSON.parse(JSON.stringify(response));
        // this.coConsumption.sp1_co_detector_18mtr = parseFloat(parseFloat(data.sp1_co_detector_18mtr).toFixed(2)) > 0 ? parseFloat(parseFloat(data.sp1_co_detector_18mtr).toFixed(2)) : 0;
        // this.coConsumption.sp1_co_detector_27mtr = parseFloat(parseFloat(data.sp1_co_detector_27mtr).toFixed(2)) > 0 ? parseFloat(parseFloat(data.sp1_co_detector_27mtr).toFixed(2)) : 0;
        // this.coConsumption.sp2_CO_detector_18m = parseFloat(parseFloat(data.sp2_CO_detector_18m).toFixed(2)) > 0 ? parseFloat(parseFloat(data.sp2_CO_detector_18m).toFixed(2)) : 0;
        // this.coConsumption.sp2_CO_detector_27m = parseFloat(parseFloat(data.sp2_CO_detector_27m).toFixed(2)) > 0 ? parseFloat(parseFloat(data.sp2_CO_detector_27m).toFixed(2)) : 0;

        this.timeoutRef = setTimeout(() => {
          this.cogasData();
        }, 1000);
      },
      (respError) => {
        //this.loading = false;
        // this.commonService.showSnakBarMessage(respError, 'error', 2000);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }

}
