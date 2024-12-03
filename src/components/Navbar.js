import React, { useState } from 'react'
import {Box,Drawer,ListItem,ListItemButton,ListItemText,ListItemIcon, List} from "@mui/material"
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import logo from '../Assets/Logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentIcon from '@mui/icons-material/Comment';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false);
  const Menuoptions=[
    {
      text:"Home",
      icon:<HomeIcon/>
    },
    {
      text:"About",
      icon:<InfoIcon/>
    },
    {
      text:"Contact",
      icon:<PhoneIcon/>
    },
    {
      text:"Testimonals",
      icon:<CommentIcon/>
    },
    {
      text:"Cart",
      icon:<ShoppingCartIcon/>
    }
  ]
  return (
    <nav>
      <img src={logo} alt="app-logo" />
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">contacts</a>
      <a href="#">Testimonals</a>
      <a href="#">Cart</a>
      <a href="">
      <BsCart2 className='navbar-cart-icon'/> 
      </a>
      <button className='primary-button'>Bookings Now</button>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=>setOpenMenu(true)}/>
      </div>
    <Drawer open={openMenu} onClose={()=>setOpenMenu(false)}  anchor="right" onClick={()=>setOpenMenu(false) }>
      <Box sx={{width:250}} role='presentation' onClick={()=>setOpenMenu(false)}>

      <List>
          {
            Menuoptions.map((item)=>(
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                   <ListItemIcon>{item.icon}</ListItemIcon>
                   <ListItemText primary={item.text}/>
                </ListItemButton>
              

             </ListItem>
            ))
          }
      </List>
          </Box>

    </Drawer>
    </nav>
  )
}

export default Navbar