import React from "react";
import { IconButton, Avatar, Badge, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import { teal } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navBar.css"
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-teal-500 lg:px-20 flex justify-between">
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
{false?<Avatar sx={{ bgcolor: "white", color: teal[500] }}>ja</Avatar>
:
<IconButton onClick={() => navigate("/account/login")}>
  <PersonIcon/>
</IconButton>
}        </div>

        <div className="">
          <IconButton>
            <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize:"1.5rem" }}/>
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};
