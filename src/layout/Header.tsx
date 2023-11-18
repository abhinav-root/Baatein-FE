import { Box } from "@mui/material";
import { Link } from "react-router-dom";
// import AppLogo from "../assets/appLogo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Box display={"flex"} justifyContent={"space-between"} marginY={2}>
          <Link to="/feed">
            Baatein
          </Link>
          <span>profile</span>
        </Box>
      </nav>
    </header>
  );
}
