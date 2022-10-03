import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { textAlign } from '@mui/system';
import MyFeed from "./MyFeed";

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" 
   >
      <Tab icon={<PhoneIcon />} label="Feed"  style={{
      color:"rebeccapurple",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"

    }}  />
      <Tab icon={<FavoriteIcon />} label="My Feed" ><MyFeed/></Tab>
      <Tab icon={<FavoriteIcon />} label="My Profile" />
      <Tab icon={<FavoriteIcon />} label="Saved Post" />
      <Tab icon={<PersonPinIcon />} label="Task Dashboard" />
      <Tab icon={<PersonPinIcon />} label="Task Manager" />
    </Tabs>
   
  );
}
