import { Button, Card } from "@mui/material";
import React from "react";

export const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
          alt=""
        />
        <div>
          <p>Biriyani</p>
          <p>Rs. 990</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">completed</Button>
      </div>
    </Card>
  );
};
