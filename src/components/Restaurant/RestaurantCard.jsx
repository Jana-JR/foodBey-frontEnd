import React from "react";
import { Card, Chip, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RestaurantCard = () => {
  return (
    <Card className="m-5 w-[18rem]">
      {/* if restaurant opened arrow will shown ... if not dont show */}
      <div
        className={`${true ? "cursor-pointer" : "cursor-not-allowed"} relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          srcset=""
        />

        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">Srilankan fast food</p>
          <p className="text-gray-500 text-sm">
            craving it all? Divee into a taste of east at Carrera and Kecilson,
            where Asian cuisines from Thailand, Indonesia, Malaysia and Vietnam
            are fresh and rich in flavour. Or why not eat Indonesian street food
            at Nasi Goreng by Burnt Nasi Goreng
          </p>
        </div>
        <div>
          <IconButton className="my-auto ml-3">
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
