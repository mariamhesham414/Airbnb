import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class StatsService {
  constructor(private httpClient: HttpClient) {}

  getStats(): Observable<any> {
    return this.httpClient
      .get(`${environment.BaseApiURL}/stats`)
      .pipe(map((response) => response));
  }
}
