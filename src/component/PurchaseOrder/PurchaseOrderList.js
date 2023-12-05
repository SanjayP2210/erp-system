import { Card, Grid, Icon } from '@mui/material'
import SoftBox from 'assets/components/SoftBox'
import SoftButton from 'assets/components/SoftButton'
import SoftInput from 'assets/components/SoftInput'
import SoftTypography from 'assets/components/SoftTypography'
import dynamicGeneratedData from 'assets/data/dynamicGeneratedData'
import Table from 'assets/examples/Tables/Table'
import { array, func, object } from 'prop-types'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPurchaseOrderList } from "../../core-files/actions/purchaseOrderAction"
import Loader from '../common/Loader/Loader'
import Modal from '../common/Modal/Modal'
import PurchaseOrderForm from './PurchaseOrderForm'
// import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const PurchaseOrderList = (props) => {
  const navigate = useNavigate();
  const { purchaseOrderData } = props;
  const { purchaseOrder, isLoading } = purchaseOrderData;
  const purchaseOrderList = purchaseOrder || [];
  console.log('purchaseOrderList', purchaseOrderList);
  const [openModal, setOpenModal] = useState(false);
  const staticColums = [
    // "_id",
    "date",
    "po_number",
    "po_type",
    "party",
    "remarks",
    "ref_number",
    "total_amount",
    "req_date",
    "oc_number",
    "oc_date",
    "order_number",
    "machine",
    "delivery_date",
    "grn_date",
    "qc_type",
    "entry_by",
    "auth_by",
    "st",
    "att",
  ];
  const { columns, rows } = dynamicGeneratedData(staticColums, []);
  console.log('columns', columns);
  useEffect(() => {
    props?.getPurchaseOrderList();
  }, []);
  // const history = useHistory();

  return (
    <>
      <Card>
        {isLoading && <Loader />}
        {openModal &&
          <Modal show={openModal} setShow={setOpenModal} body={<PurchaseOrderForm />} />
        }
        <SoftBox m={3} py={3}>
          <SoftBox mb={3}>
            <Grid container mb={3}>
              <Grid container xs={6} sm={6} md={6} lg={6} xl={6}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <SoftTypography variant="h6" fontWeight="medium">
                    Store Purchase Order Page
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid spacing={1} container xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid item xs={12} sm={6} xl={6} lg={6} md={6}>
                  <SoftInput
                    placeholder="Search here..."
                    icon={{ component: "search", direction: "right" }}
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <SoftButton
                      color="info"
                      variant={"gradient"}
                      fullWidth
                      onClick={() => {
                        navigate('/create-purchase-order');
                      }}
                    // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >new&nbsp;
                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    </SoftButton>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <SoftButton
                    color="info"
                    variant={"gradient"}
                    fullWidth
                  >
                    Refresh&nbsp;
                    <Icon sx={{ fontWeight: "bold" }}>refresh</Icon>
                  </SoftButton>
                </Grid>
              </Grid>
              {/* <Grid item xs={6} sm={6} md={1.5}  lg={1.5} xl={2}>
            </Grid> */}
            </Grid>
            <Card>
              <SoftBox
                sx={{
                  "& .MuiTableRow-root:not(:last-child)": {
                    "& td": {
                      borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                        `${borderWidth[1]} solid ${borderColor}`,
                    },
                  },
                }}
              >
                <Table columns={columns} rows={purchaseOrderList} isLoading={isLoading} />
              </SoftBox>
            </Card>
          </SoftBox>
        </SoftBox>
      </Card>
    </>
  )
}

const mapDispatchToProps = {
  getPurchaseOrderList,
}

PurchaseOrderList.propTypes = {
  getPurchaseOrderList: func,
  purchaseOrderList: array,
  purchaseOrder: object,
}
const mapStateToProps = (state) => {
  return {
    purchaseOrderData: state?.purchaseOrderReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderList);