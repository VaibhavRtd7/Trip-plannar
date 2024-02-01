import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Button,
  NavbarMenuItem
} from "@nextui-org/react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar className="z-20 opacity-100" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-xl decoration-gray-100">Trip Planner</p>
        </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 text-xl font-bold  " justify="center">
          <NavbarItem className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem className="mx-1 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full
          ">
            <Link to="/destinations">Destinations</Link>
          </NavbarItem>
          <NavbarItem className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link to="/about">About Us</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" to="/auth" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
        <NavbarMenuItem>
            <Link to="/">Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/destinations">Destinations</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/about">About Us</Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
}
