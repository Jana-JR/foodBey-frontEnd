import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia, Typography } from "@mui/material";

export const EventCard = () => {
  return (
    <div>
      <Card sx={{width: 345}}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <CardContent>
          <Typography variant="h5">SriLankan Special Food</Typography>
          <Typography variant="body2">50% off on your first purchase</Typography>

          <div className="py-2 space-y-2">
            <p>{'Trinco'}</p>
            <p className="text-sm text-blue-500">February 25, 2025 8.00 AM</p>
            <p className="text-sm text-red-500">February 25, 2025 8.00 AM</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
