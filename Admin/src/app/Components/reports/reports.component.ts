import { StatsService } from "./../../Services/stats.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})
export class ReportsComponent implements OnInit {
  stats: any;
  dataSource: any = {
    data: [], // Initialize the data array here
    chart: {
      xAxisName: "Country",
      yAxisName: "Number Of Houses",
      // numberSuffix: "K",
      theme: "fusion",
    },
  };

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe((stats) => {
      this.stats = stats;

      this.stats.housesByRegion.forEach(
        (element: { _id: any; count: number }) => {
          this.dataSource.data.push({
            label: element._id,
            value: element.count,
          });
        }
      );

      console.log(this.stats);
      console.log(this.dataSource);
    });
  }
}
