import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress for the spinner
import CarouselCard from "./CarouselCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchHouses } from "../../Store/slices/houses";
import { fetchWishlist } from "../../Store/slices/wishlist";

export default function LocationCards() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.houses.houses);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [visibleCards, setVisibleCards] = useState(8);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !loading) {
      setLoading(true);

      setTimeout(() => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 8);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    dispatch(fetchHouses());
    dispatch(fetchWishlist());
  }, []);

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3} key={cards}>
        {cards.slice(0, visibleCards).map((location) => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} key={location._id}>
              <CarouselCard location={location} wishlist={wishlist} />
            </Grid>
          );
        })}
      </Grid>
      <div ref={containerRef}></div>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 2,
            color: "red",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}
