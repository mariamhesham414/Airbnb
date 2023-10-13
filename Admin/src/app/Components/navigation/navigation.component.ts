import { AuthService } from "src/app/Services/auth.service";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit, OnChanges {
  isloggedIn: boolean = true;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.isloggedIn = this.authService.isLoggedIn();
  }
  ngOnInit(): void {
    this.activateLink("/reports");
    this.isloggedIn = this.authService.isLoggedIn();
  }

  activateLink(link: string) {
    this.router.navigateByUrl(link);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/signin"]);
    this.isloggedIn = true;
  }
}
