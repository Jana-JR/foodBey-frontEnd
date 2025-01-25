import Grid from "@mui/material/Grid2";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MenuCard from "./MenuCard";



const categories = ["pizza", "rice", "chick", "punda"];

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegan", value: "vegan" },
  { label: "Non-Vegan", value: "non-vegan" },
  { label: "Seasonal", value: "seasonal" },
];

const menu = [1,1,1,1,1,1,1]

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");

  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/lanka/Srilankan fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h2 className="text-4xl font-semibold ">Srilankan</h2>
          <p className="text-gray-500 mt-1">
            <LocationOnIcon />
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              facilis expedita aut labore sunt officia fugit voluptatibus,
              nesciunt deserunt quod odio praesentium repellendus! Quaerat
              architecto perferendis cupiditate ullam repellendus incidunt.
            </span>
          </p>

          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonthIcon />
              <span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType || "all"}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType || "all"}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
            {menu.map((item) => <MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
