import React from 'react';
import "./Navbar.css";
import { Image, Box, Icon } from "@chakra-ui/react"
import {Search2Icon, PhoneIcon } from '@chakra-ui/icons'
import { HStack } from '@chakra-ui/react';

import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/youtube'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
const Navbar = () => {
    
  return (
    <div className='Navbar-div'>
 <Box boxSize='230px'>
  <Image src='https://nuturemite.info/wp-content/uploads/2022/10/nuturmite_logo_tranparent.png' alt='nuturemite.png' />
</Box>

<div className='pages-div'>

    <div className='pages-1-div'>
        <button>About us</button>
       
        <button>Contact us:</button>
        <button>  <PhoneIcon /> 891993233</button>
        <div className='input-container'>
        <input type='text'  />
        <Search2Icon className='search-icon' />
        </div>
       
        
        
    </div>

<div className='pages-2-div'>
<button>HOME</button>
<button>BLOG</button>
<button>SHOP</button>
<button>CART</button>
<button>MY ACCOUNT</button>
<button>ABOUT US</button>
<button>LOGIN</button>
<button>REGISTER</button>
</div>



<div className='social-div'>



<SocialIcon url="www.facebook.com"  style={{ height: 25, width: 25 }} className='social-icon' />

<SocialIcon url="www.twitter.com" style={{ height: 25, width: 25 }} className='social-icon'/>

<SocialIcon url="www.youtube.com" style={{ height: 25, width: 25 }} className='social-icon'/>
<SocialIcon url="www.linkedin.com" style={{ height: 25, width: 25 }} className='social-icon'/>
<SocialIcon url="www.instagram.com" style={{ height: 25, width: 25 }} className='social-icon'/>




</div>


</div>


</div>



  );
}

export default Navbar