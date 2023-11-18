import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomNavigationMenu from "./BottomNavigationMenu";
import { Container } from "@mui/material";

export default function Root() {
  return (
    <>
      <Container>
        <Header />
        <Outlet />
        <BottomNavigationMenu />
      </Container>
    </>
  );
}
