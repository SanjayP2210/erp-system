// Soft UI Dashboard React layouts
import Dashboard from "assets/layouts/dashboard";
import Tables from "assets/layouts/tables";
import Billing from "assets/layouts/billing";
import VirtualReality from "assets/layouts/virtual-reality";
import RTL from "assets/layouts/rtl";
import Profile from "assets/layouts/profile";
import SignIn from "assets/layouts/authentication/sign-in";
import SignUp from "assets/layouts/authentication/sign-up";
import SignOut from "assets/layouts/authentication/sign-out";

// Soft UI Dashboard React icons
import Shop from "assets/examples/Icons/Shop";
import Office from "assets/examples/Icons/Office";
import Settings from "assets/examples/Icons/Settings";
import Document from "assets/examples/Icons/Document";
import SpaceShip from "assets/examples/Icons/SpaceShip";
import CustomerSupport from "assets/examples/Icons/CustomerSupport";
import CreditCard from "assets/examples/Icons/CreditCard";
import Cube from "assets/examples/Icons/Cube";
import Home from "component/Home";
import MasterCreator from "component/MasterCreator";
import PurchaseOrderForm from "component/PurchaseOrder/PurchaseOrderForm";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
    protected: false,
  },
  {
    type: "collapse",
    name: "Purchase Order List",
    key: "purchase-order-list",
    route: "/purchase-order-list",
    icon: <CreditCard size="12px" />,
    component: <Home />,
    noCollapse: true,
    protected: false,
  },
  {
    type: "collapse",
    name: "Master Creator",
    key: "dynamic-generate-db",
    route: "/dynamic-generate-db",
    icon: <CreditCard size="12px" />,
    component: <MasterCreator />,
    noCollapse: true,
    protected: false,
  },
  {
    type: "collapse",
    name: "Purchase order Create",
    key: "create-purchase-order",
    route: "/create-purchase-order",
    icon: <CreditCard size="12px" />,
    component: <PurchaseOrderForm />,
    noCollapse: true,
    protected: false,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <Office size="12px" />,
  //   component: <Tables />,
  //   noCollapse: true,
  //   protected: false,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  //   protected: false,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  //   protected: false,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  //   protected: false,
  // },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <CustomerSupport size="12px" />,
  //   component: <Profile />,
  //   noCollapse: true,
  //   protected: false,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   route: "/authentication/sign-in",
  //   icon: <Document size="12px" />,
  //   component: <SignIn />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-up",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignUp />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Logout",
  //   key: "sign-out",
  //   route: "/authentication/sign-out",
  //   icon: <SpaceShip size="12px" />,
  //   component: <SignOut />,
  //   noCollapse: true,
  // },
];

export default routes;
