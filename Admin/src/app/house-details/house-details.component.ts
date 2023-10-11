import { Component, OnInit } from "@angular/core";
import { IHouse } from "../Models/IHouse";
import { HousesService } from "../Services/houses.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-house-details",
  templateUrl: "./house-details.component.html",
  styleUrls: ["./house-details.component.css"],
})
export class HouseDetailsComponent implements OnInit {
  currentHouse: IHouse = {
    _id: "",
    name: "",
    address: "",
    region: "",
    price: 0,
    currencySymbol: "",
    numberOfRooms: 0,
    numberOfBedrooms: 0,
    guestNumber: 0,
    rate: 0,
    description: "",
    reviews: "",
    images: [],
    category: "",
    userId: "",
    lat: 0,
    lng: 0,
    updatedAt: new Date(),
  };

  constructor(
    private houseService: HousesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get("id");
    if (!houseId) {
      this.router.navigate(["home"]);
    } else {
      this.houseService.getHouseById(houseId).subscribe((house: IHouse) => {
        this.currentHouse = house;
      });
      console.log(this.currentHouse);
    }
  }
}
