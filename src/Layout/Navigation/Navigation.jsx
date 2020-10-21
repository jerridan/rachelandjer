import React from "react";
import { useMediaQuery } from "react-responsive";
import { small } from "../../breakpoints";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Link from "./Link";

const Links = () => (
  <ul>
    <Link to="/">Home</Link>
    <Link to="/ceremony">Ceremony</Link>
    <Link to="/guestbook">Guestbook</Link>
    <Link to="/our-story">Our Story</Link>
    <Link to="/gifts">Gifts</Link>
  </ul>
);

export default function Navigation() {
  const isMobileScreen = useMediaQuery({ maxWidth: small });
  const NavigationComponent = isMobileScreen
    ? MobileNavigation
    : DesktopNavigation;

  return (
    <NavigationComponent>
      <Links />
    </NavigationComponent>
  );
}
