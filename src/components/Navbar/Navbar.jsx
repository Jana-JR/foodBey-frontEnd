import React from "react";
import { IconButton, Avatar, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { teal } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navBar.css"

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-teal-500 lg:px-20 flex justify-between">
      <div className="lg:mr-10 curser-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-grey-300 text-2xl">FoodBey</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-2 red">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div className="">
          <Avatar sx={{ bgcolor: "white", color: teal[500] }}>ja</Avatar>
        </div>

        <div className="">
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize:"1.5rem" }}/>
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
