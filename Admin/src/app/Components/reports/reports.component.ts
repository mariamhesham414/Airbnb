import { StatsService } from "./../../Services/stats.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.css"],
})
export class ReportsComponent implements OnInit {
  stats: any;
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe((stats) => {
      this.stats = stats;
      console.log(this.stats);
    });
  }
}
