import { Card, Icon } from '@mui/material'
import SoftBox from 'assets/components/SoftBox'
import SoftTypography from 'assets/components/SoftTypography'
import dynamicGeneratedData from 'assets/data/dynamicGeneratedData'
import Table from 'assets/examples/Tables/Table'
import React from 'react'

const Home = () => {

  const { columns, rows } = dynamicGeneratedData;

  // const po_fields = {
  //   'date': 'date',
  //   'po_number': 'string',
  //   'po_type': 'string',
  //   'party_name': 'string',
  //   'remarks': 'string',
  //   'ref_no': 'string',
  //   'total_amount': 'string',
  //   'req_date': 'string',
  //   'oc_number': 'string',
  //   'oc_date': 'date',
  //   'order_number': 'string',
  //   'machine': 'string',
  //   'delivery_date': 'date',
  //   'received_date': 'date',
  //   'qc_type': 'string',
  //   'entry_by': 'string',
  //   'auth_by': 'string',
  //   'st': 'string',
  //   'att': 'string',
  // }

  // const columns = [
  //   { name: 'Date', label: 'date', align: "center" },
  //   { name: 'PONO ', label: 'po_number ', align: "left" },
  //   { name: 'PO T.', label: 'po_type', align: "left" },
  //   { name: 'Party', label: 'party_name', align: "left" },
  //   { name: 'Remarks.', label: 'remarks', align: "left" },
  //   { name: 'RefNo', label: 'ref_no', align: "left" },
  //   { name: 'Total Amount', label: 'total_amount', align: "left" },
  //   { name: 'Req Date', label: 'req_date', align: "left" },
  //   { name: 'OC No', label: 'oc_number', align: "left" },
  //   { name: 'OC Date', label: 'oc_date', align: "left" },
  //   { name: 'OrderNo', label: 'order_number', align: "left" },
  //   { name: 'Machine', label: 'machine', align: "left" },
  //   { name: 'Del Date', label: 'delivery_date', align: "left" },
  //   { name: 'GRN Date', label: 'received_date', align: "left" },
  //   { name: 'QCType', label: 'qc_type', align: "left" },
  //   { name: 'Entry By', label: 'entry_by', align: "left" },
  //   { name: 'Auth By', label: 'auth_by', align: "left" },
  //   { name: 'St', label: 'st', align: "left" },
  //   { name: 'Att', label: 'att', align: "left" },
  //   { name: "action", label: "action", align: "center" },
  // ];

  return (
    <SoftBox py={3}>
      <SoftBox mb={3}>
        <Card>
          {/* <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Purchase Order List</SoftTypography>
          </SoftBox> */}
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
            <Table columns={columns} rows={rows} />
          </SoftBox>
        </Card>
      </SoftBox>
    </SoftBox>
  )
}

export default Home