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

import { useMemo, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Icon, Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Soft UI Dashboard React components
import SoftBox from "assets/components/SoftBox";
import SoftAvatar from "assets/components/SoftAvatar";
import SoftTypography from "assets/components/SoftTypography";

// Soft UI Dashboard React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import moment from "moment";
import { useSortableTable } from "../../../js/sortableTable";

function Table({ columns, rows, isLoading, noPadding ,sortable}) {
  console.log('noPadding', noPadding);
  const { light } = colors;
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  let [tableColumns ,tableRows, handleSorting] = useSortableTable(rows, columns);
  tableColumns = sortable ? tableColumns : columns ;
  tableRows = sortable ? tableRows : rows;
  handleSorting = () => { };
  
  console.log('tableRows', tableRows);
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor,key) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder,key);
  };

  const renderColumns = tableColumns.map(({ name, align, width, label, accessor, sortable }, key) => {
    let pl;
    let pr;

    if (key === 0) {
      pl = 3;
      pr = 3;
    } else if (key === tableColumns.length - 1) {
      pl = 3;
      pr = 3;
    } else {
      pl = 1;
      pr = 1;
    }
    // ${ sortField === accessor ? order : '' };

    const sortbyOrder = sortable
    ? sortField === accessor && order === "asc"
      ? "asc"
      : sortField === accessor && order === "desc"
      ? "desc"
      : "default"
      : "";
    console.log('sortbyOrder', sortbyOrder);
    return (
      <SoftBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={align === "left" ? pl : 3}
        pr={align === "right" ? pr : 3}
        textAlign={align}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        className={sortbyOrder}
        style={{ cursor: 'pointer' }}
        data-sortable=""
        borderBottom={`${borderWidth[1]} solid ${light.main}`}
        onClick={sortable ? () => handleSortingChange(accessor,key) : null}
      >
        <SoftTypography textTransform={"capitalize"} variant="caption" fontSize={size.xxs} fontWeight="bold" color="black">
          <div className={`${sortable ? 'dataTable-sorter' : ''}`}>
          { name.replaceAll('_', ' ') }
        </div>
        </SoftTypography>
      </SoftBox>
    );
  });

  const renderRows = tableRows.map((row, key) => {
    const rowKey = `row-${key}`;

    const getConvertedRowValue = (name, value) => {
      if (name == 'action') {
        return (value ? value : 
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
            more_vert
          </Icon>)
      } else {
        let updatedValue = value;
        if (name == 'date') {
          updatedValue = moment(value).format('DD MMM YYYY');
        }
        return (<SoftTypography variant="caption" color="text" fontWeight="medium">
          {updatedValue}
        </SoftTypography>)
      }

    }

    const tableRow = tableColumns.map(({ name, align }) => {
      let template;
      const width = row?.[name]?.props?.width;
      const tdwidth = row?.[name]?.props?.tdwidth;
      if (Array.isArray(row[name])) {
        template = (
          <SoftBox
            key={uuidv4()}
            component="td"
            p={1}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftBox display="flex" className={noPadding ? 'no-padding': ''} alignItems="center" py={0.5} px={1}>
              <SoftBox mr={2}>
                <SoftAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </SoftBox>
              <SoftTypography variant="button"  className={noPadding ? 'no-padding': ''} fontWeight="medium" sx={{ width: "max-content" }}>
                {row[name][1]}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        );
      } else {
        template = (
          <SoftBox
            key={uuidv4()}
            component="td"
            style={{ width : tdwidth ? tdwidth : 'auto'}}
            p={1}
            className={noPadding && name != 'sq_no' ? 'no-padding': ''}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${light.main}` : null}
          >
            <SoftTypography
              variant="button"
              fontWeight="regular"
              color="secondary"
              style={{ width : width ? width : 'auto'}}
              // className={noPadding && name != 'sq_no' ? 'no-padding': ''}
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {getConvertedRowValue(name, row[name])}
            </SoftTypography>
          </SoftBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <TableContainer>
        <MuiTable>
          <SoftBox component="thead">
            <TableRow>{renderColumns}</TableRow>
          </SoftBox>
          {tableRows && tableRows?.length > 0 &&
            (<TableBody>
              {renderRows}
            </TableBody>)
          }
        </MuiTable>
        {tableRows && tableRows?.length === 0 &&
          (
            <SoftBox
            p={1}
              textAlign={'center'}
              borderBottom={true ? `${borderWidth[1]} solid ${light.main}` : null}
            >
              <SoftTypography
                variant="button"
                fontWeight="regular"
                color="secondary"
                sx={{ display: "inline-block", width: "max-content" }}
              >
                <SoftTypography
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                 {isLoading ? 'Loading...' :  'No Data Available.'}
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          )
        }
      </TableContainer>
    ),
    [tableColumns, tableRows,isLoading]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
  isLoading: false,
  noPadding: false,
  sortable:false
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  noPadding: PropTypes.bool,
  sortable: PropTypes.bool
};

export default Table;
