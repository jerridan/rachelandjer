import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import { small } from "../../breakpoints";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navigation() {
  const isMobileScreen = useMediaQuery({ maxWidth: small });

  return <>{isMobileScreen ? <MobileNavigation /> : <DesktopNavigation />}</>;
}
