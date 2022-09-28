import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./dashboard.css"
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { textAlign } from '@mui/system';

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" 
   >
      <Tab icon={<PhoneIcon />} label="RECENTS"  style={{
      color:"rebeccapurple",
      marginLeft:"40%"
    }}  />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
   
  );
}
