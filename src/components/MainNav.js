import  React,{useEffect} from 'react';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core';
import { Movie, Search, Tv, Whatshot } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
    root:{
        width:"100%",
        position:"fixed",
        bottom:0,
        backgroundColor:"#2d313a",
        zIndex:100,
    },
})
export default function SimpleBottomNavigation() { 
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  useEffect(()=>{
      if(value === 0) navigate("/");
      else if(value === 1) navigate("/movies");
      else if(value === 2) navigate("/series");
      else if(value === 3) navigate("/search");


  },[value,navigate])

  return (
    <Box sx={{ width: 500 }} className={useStyles}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction label="Movies" icon={<Movie />} />
        <BottomNavigationAction label="TV Series" icon={<Tv />} /> 
        <BottomNavigationAction label="Search" icon={<Search />} />

      </BottomNavigation>
    </Box>
  );
}
