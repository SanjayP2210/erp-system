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
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from "assets/components/SoftBox";

// Soft UI Dashboard React components
import MasterCard from "assets/examples/Cards/MasterCard";
import DefaultInfoCard from "assets/examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples


// Billing page components
import PaymentMethod from "assets/layouts/billing/components/PaymentMethod";
import Invoices from "assets/layouts/billing/components/Invoices";
import BillingInformation from "assets/layouts/billing/components/BillingInformation";
import Transactions from "assets/layouts/billing/components/Transactions";

function Billing() {
  return (
    <>
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </>
  );
}

export default Billing;
