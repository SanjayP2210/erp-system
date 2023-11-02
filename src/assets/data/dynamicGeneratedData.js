/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "assets/components/SoftBox";
import SoftTypography from "assets/components/SoftTypography";
import SoftProgress from "assets/components/SoftProgress";

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const staticColums = [
  "Date",
  "PONO",
  "Po Type",
  "Party",
  "Remarks",
  "RefNo",
  "TotalAmount",
  "ReqDate",
  "OCNo",
  "OC Dt",
  "OrderNo",
  "Machine",
  "DelDate",
  "GRN Date",
  "QCType",
  "Entry By",
  "Auth By",
  "St",
  "Att"
];

const staticRows = [
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/I/PO/2324/0126",
    "Po Type": "I",
    "Party": "Re S.p.A Controlli Industriali",
    "Remarks": "For, regular Orders",
    "RefNo": "Price List 2023",
    "TotalAmount": "3,242.25",
    "ReqDate": "20 Nov 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Re INDIA Factory",
    "Entry By": "Zinal Parikh",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1856",
    "Po Type": "G",
    "Party": "SAM INDUSTRIES",
    "Remarks": "HIR350",
    "RefNo": "BY MAIL",
    "TotalAmount": "3,658.00",
    "ReqDate": "25 Oct 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Supplier",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1855",
    "Po Type": "G",
    "Party": "HIECON TECHNOLOGIES PVT LTD",
    "Remarks": "HSR\\r\\nVB/23-24/1718",
    "RefNo": "BY MAIL",
    "TotalAmount": "296,618.00",
    "ReqDate": "05 Nov 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "NA",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1854",
    "Po Type": "G",
    "Party": "PCNET INFOTECH PVT. LTD",
    "Remarks": "TRAIL ORDER",
    "RefNo": "BY MAIL",
    "TotalAmount": "3,953.00",
    "ReqDate": "05 Nov 2023",
    "OCNo": "",
    "OC Dt": "10 Jan 2020",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Re INDIA Factory",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1853",
    "Po Type": "G",
    "Party": "PCNET INFOTECH PVT. LTD",
    "Remarks": "INHOUSE USE",
    "RefNo": "BY MAIL",
    "TotalAmount": "35,282.00",
    "ReqDate": "05 Nov 2023",
    "OCNo": "",
    "OC Dt": "10 Jan 2020",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Re INDIA Factory",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1852",
    "Po Type": "G",
    "Party": "C.M.INDUSTRIES",
    "Remarks": "",
    "RefNo": "BY MAIL",
    "TotalAmount": "15,120.00",
    "ReqDate": "10 Oct 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Supplier",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1851",
    "Po Type": "G",
    "Party": "C.M.INDUSTRIES",
    "Remarks": "",
    "RefNo": "BY MAIL",
    "TotalAmount": "2,240.00",
    "ReqDate": "10 Oct 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Supplier",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1850",
    "Po Type": "G",
    "Party": "PANIK TRADERS",
    "Remarks": "",
    "RefNo": "BY MAIL",
    "TotalAmount": "23,818.00",
    "ReqDate": "15 Oct 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "@ Supplier",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1849",
    "Po Type": "G",
    "Party": "PATEL WOODEN WORKS",
    "Remarks": "",
    "RefNo": "VERBAL",
    "TotalAmount": "3,270.00",
    "ReqDate": "09 Oct 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "NA",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1848",
    "Po Type": "G",
    "Party": "HARISON HYDROTECH",
    "Remarks": "OC 1217",
    "RefNo": "BY MAIL",
    "TotalAmount": "26,267.00",
    "ReqDate": "01 Nov 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "01 Nov 2023",
    "QCType": "@ Supplier",
    "Entry By": "Hardik Patel",
    "Auth By": "Mohan Chandra",
    "St": "A",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1847",
    "Po Type": "G",
    "Party": "KIRAN ELECTRONICS",
    "Remarks": "",
    "RefNo": "VERBAL",
    "TotalAmount": "123,900.00",
    "ReqDate": "05 Nov 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "",
    "GRN Date": "",
    "QCType": "NA",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
  {
    "Date": "01 Nov 2023",
    "PONO": "RE/G/PO/2324/1846",
    "Po Type": "G",
    "Party": "JANATICS INDIA PVT. LTD",
    "Remarks": "",
    "RefNo": "BY MAIL",
    "TotalAmount": "16,459.00",
    "ReqDate": "05 Jan 2023",
    "OCNo": "",
    "OC Dt": "",
    "OrderNo": "",
    "Machine": "",
    "DelDate": "05 Jan 2023",
    "GRN Date": "",
    "QCType": "@ Re INDIA Factory",
    "Entry By": "Krunal Desai",
    "Auth By": "",
    "St": "C",
    "Att": 0
  },
 ]

const generateColum = (data) => {
  const generatedColums = [];
  if (data && data?.length > 0) {
    data.map(x => {
      generatedColums.push({ name: x, align: "left" });
    });
    generatedColums.push({ name: "action", align: "center" });
    return generatedColums;
  } else {
    return generatedColums;
  }
}

const addSoftBox = (text) => {
  return (
    <SoftTypography variant="caption" color="text" fontWeight="medium">
     {text}
    </SoftTypography>
  )
}

const addActionButton = () => (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

const generateRows = (data) => {
  let generatedRows = [];
  if (data && data?.length > 0) {
    const newGeneratedData = data.map(x => { return { ...x, action: '' } });
    console.log('newGeneratedData', newGeneratedData);
    const generatedRows = newGeneratedData.map((objects) =>{
      return Object.fromEntries(
      Object.entries(objects).map(([key, value]) => {
        console.log(`key ${key} & value- ${value}`);
        if (key == 'action') {
          return  [key, addActionButton()];
        } else {
          return  [key, addSoftBox(value)]; 
        }
      })
    );
  });
    console.log("🚀 ~ file: projectsTableData.js:398 ~ generatedRows.map ~ objects:", generatedRows);
    return generatedRows;
  } else {
    return generatedRows;   
  }
}

const dynamicGeneratedData = {
  columns: generateColum(staticColums),
  // columns: [
  //   { name: "project", align: "left" },
  //   { name: "budget", align: "left" },
  //   { name: "status", align: "left" },
  //   { name: "completion", align: "center" },
  //   { name: "action", align: "center" },
  // ],

  rows: generateRows(staticRows)
};

export default dynamicGeneratedData;
