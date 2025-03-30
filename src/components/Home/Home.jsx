import React, { useEffect, useState } from "react";
import "./home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurants } from "../../state/Restaurant/Action";
import { Auth } from "../Auth/Auth";

const restaurants = [1, 1, 1, 1, 1, 1, 1, 1];

const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);

  console.log("restaaurant", restaurant);

  useEffect(() => {
    dispatch(getAllRestaurants(jwt));
  }, []);

  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw]  z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">FoodBey</p>
          <p className="z-10 text-grey-300 text-x1 lg:text-4xl">
            Taste this Shit Food
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadeout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-400 pb-5">
          From Our Handpicked Favorites•
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.restaurants.map((item) => (
            <RestaurantCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
