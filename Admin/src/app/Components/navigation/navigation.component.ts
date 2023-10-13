import { AuthService } from "src/app/Services/auth.service";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit, OnChanges {
  isloggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.activateLink("/houses");
    this.isloggedIn = this.authService.isAdmin();
  }

  activateLink(link: string) {
    this.router.navigateByUrl(link);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/signin"]);
  }
}
