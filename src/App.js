import './App.css';
// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Soft UI Dashboard React themes
import { Icon, StyledEngineProvider } from '@mui/material';
import SoftBox from 'assets/components/SoftBox';
import { setMiniSidenav, setOpenConfigurator, useSoftUIController } from 'assets/context';
import Configurator from 'assets/examples/Configurator';
import Footer from 'assets/examples/Footer';
import DashboardLayout from 'assets/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'assets/examples/Navbars/DashboardNavbar';
import Sidenav from 'assets/examples/Sidenav';
import theme from "assets/theme";
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if (route.protected) {
          return (
            <Route key={route.key}>
              <Route path={route.route} element={route.component} />
            </Route>
          );
        }
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });


  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                className={'ps ps--active-y'}
                color={sidenavColor}
                // brand={(<CreditCard size="12px" />)}
                brandName="ERP System"
                icon={<i className='ni ni-money-coins' />}
                type={"collapse"}
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <DashboardLayout>
            <DashboardNavbar />
            <Routes>
              {getRoutes(routes)}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
            <Footer />
          </DashboardLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </>

  )
}

export default App;
