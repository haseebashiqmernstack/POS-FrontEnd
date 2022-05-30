import { AppBar, Avatar, Menu, MenuItem, Tab, Tabs } from '@mui/material';
import React from 'react';
import { deepOrange } from '@mui/material/colors';
const Navbar=()=>{
    return (<>
         <AppBar position='sticky'>
            <Tabs>
                <Tab label="Orders"/>
                <Tab component={Avatar} src={'https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-cm-digital-human-promo.jpg'}>
                </Tab>
            </Tabs>
         </AppBar>
    </>)
}
export default Navbar;