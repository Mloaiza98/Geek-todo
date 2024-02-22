import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieCreationRounded from "@mui/icons-material/MovieCreationRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
import { TodoContext } from "../TodoContext";
import "./NavBar.css";

export default function NavBar() {
  const { setType } = React.useContext(TodoContext);
  const [value, setValue] = React.useState(0);

  return (
    <div className="navBar">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setType(newValue);

          console.log(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ color: "#90f2f1", backgroundColor: "#282c34" }}
          label="Home"
          icon={<HomeIcon sx={{ color: "#90f2f1" }} />}
        />
        <BottomNavigationAction
          sx={{ color: "#90f2f1", backgroundColor: "#282c34" }}
          label="Movie"
          icon={<MovieCreationRounded sx={{ color: "#90f2f1" }} />}
        />
        <BottomNavigationAction
          sx={{ color: "#90f2f1", backgroundColor: "#282c34" }}
          label="Video-Game"
          icon={<SportsEsportsIcon sx={{ color: "#90f2f1" }} />}
        />
        <BottomNavigationAction
          sx={{ color: "#90f2f1", backgroundColor: "#282c34" }}
          label="Book"
          icon={<MenuBookIcon sx={{ color: "#90f2f1" }} />}
        />
      </BottomNavigation>
    </div>
  );
}
