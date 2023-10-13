import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../Services/auth.service";
import { map } from "rxjs";

export const AdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.getAuthToken();
  console.log("guard is working ");

  if (token) {
    return authService.fetchUserData().pipe(
      map((data) => {
        console.log(data);

        if (data) {
          console.log("User is admin");
          return true;
        } else {
          console.log("User is not admin");
          router.navigate(["/signin"]);
          return false;
        }
      })
    );
  } else {
    console.log("token is not working");
    router.navigate(["/signin"]);
    return false;
  }
};
