import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LogoutIcon from "@mui/icons-material/Logout";
import BusinessIcon from "@mui/icons-material/Business";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favourites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <BusinessIcon /> },
  { title: "Payments", icon: <CurrencyExchangeIcon /> },
  { title: "Notifications", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventAvailableIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

export const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreeen = useMediaQuery('(max-width:900px)');
    const navigate = useNavigate();

    const handleNavigate=(item) =>{
      navigate(`/my-profile/${item.title.toLowerCase()}`)
    }



  return (
  <div>
<Drawer 
variant={isSmallScreeen?"temporary":"permanent"} 
onClose={handleClose} 
open={isSmallScreeen ? open : true} 
anchor="left" 
sx={{zIndex:-1, position:"sticky"}}>

    <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8">
        {menu.map((item, i) =>(
          <>                        
        <div onClick={() => handleNavigate (item)} className="px-5 flex items-center space-x-5 cursor-pointer">
            {item.icon}
            <span>{item.title}</span>
        </div>
        {i!== menu.length-1 && <Divider/>}
        </>))}
    </div>

</Drawer>
  </div>
  )
}

