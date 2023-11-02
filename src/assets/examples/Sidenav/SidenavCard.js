/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftButton from "assets/components/SoftButton";
import SoftBox from "assets/components/SoftBox";
import SoftTypography from "assets/components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "assets/examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "assets/context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
