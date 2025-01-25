import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ingredients = [
  {
    category: "plask",
    ingredients: [
      "Salt",
      "Sugar",
      "Chilli",
      "Onion",
      
    ],
  },
  {
    category: "meat",
    ingredients: ["Chicken", "Beef", "Lamb", "Pork", "Fish"],
  },
  {
    category: "vegan",
    ingredients: [
      "Tomato",
      "Pepper",
      "Onion",
     
    ],
  },
  {
    category: "dairy",
    ingredients: ["Milk", "Cheese", "Yogurt", "Butter"],
  },
  {
    category: "seafood",
    ingredients: ["Shrimp", "Clam", "Fish", "Crab", "Oyster"],
  },
];


const MenuCard = () => {

    const handleCheckboxChange=(value) =>{
        console.log("value")
        
    }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] object-cover h-[7rem]"
                src="https://images.pexels.com/photos/16020703/pexels-photo-16020703/free-photo-of-roasted-fish-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />

              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-x1">Salmon dish</p>
                <p>499 LKR</p>
                <p>
                  This dish features a perfectly grilled salmon fillet, seasoned
                  with a blend of fresh herbs and spices, bringing out its
                  natural flavors. A zesty lemon herb glaze is brushed over the
                  fillet, infusing each bite with a balance of citrusy
                  brightness and savory richness. Served alongside roasted
                  seasonal vegetables and a bed of fluffy wild rice, this dish
                  is as visually stunning as it is delicious. A garnish of fresh
                  dill and a slice of lemon complete the presentation, offering
                  a refreshing finish to this flavorful meal.
                </p>
              </div>
            </div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <form>
            <div className="flex gap-5 flex-wrap">
              {ingredients.map((items) => (
                <div>
                    <p>{items.category}</p>
                   <FormGroup> 
                    {items.ingredients.map((items) =>
                   <FormControlLabel
                    control={<Checkbox onChange={() => handleCheckboxChange(items)} />}
                    label={items}
                  /> )
                  }
                  
                </FormGroup>
                </div>
                
              ))}
            </div>
            <div className="pt-5">
                <Button variant="contained" type="submit" disabled={false}>
                    {true?"Add To cart":"Out of stock"}
                </Button>
            </div>
          </form>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
