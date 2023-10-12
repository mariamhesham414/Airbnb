import React, { useEffect } from "react";
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../../Store/slices/houses";
import { fetchWishlist } from "../../Store/slices/wishlist";
import CarouselCard from '../Home/CarouselCard';
import "./MapHomPage.css";
import ShowList from "./ShowList";
export default function MapHomPage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.houses.houses);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchWishlist());
  }, []);

    return (
      <>
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {Object.keys(cards).length>0 && cards.map((location) => {
          return (
  <Marker position={[location.lat,location.lng]}>
    {console.log(location.lat)}
    <Popup >
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3} key={cards}>
        
            <Grid style={{width:"15rem"}} xs={12} sm={12} md={12} lg={12}>
              <CarouselCard
                key={location._id}
                location={location}
                wishlist={wishlist}
              />
            </Grid>
      </Grid>
    </Box>
    </Popup>
  </Marker>
            );
          })}

</MapContainer>
<ShowList/>
</>
    )
  }
  
