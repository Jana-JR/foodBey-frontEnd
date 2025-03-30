import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite } from "../../state/Authentication/Action";
import { isPresentInFavourites } from "../config/logic";
import { Auth } from "../Auth/Auth";

const RestaurantCard = ({item}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store => store)

  const handleAddFavourite = () =>{
    dispatch(addToFavourite({restaurantId:item.id,jwt}))
  } 
  return (
    <Card className="m-5 w-[18rem]">
      {/* if restaurant opened arrow will shown ... if not dont show */}
      <div
        className={`${item.open ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.images[0]}
          alt=""
        
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <div>
          <IconButton onClick={handleAddFavourite}
           className="my-auto ml-3">
            {isPresentInFavourites(auth.favourites, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
