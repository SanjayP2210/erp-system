import { Autocomplete, Card, Grid, Icon, TextField } from '@mui/material'
import SoftBox from 'assets/components/SoftBox'
import SoftButton from 'assets/components/SoftButton'
import SoftInputWithLabel from 'assets/components/SoftInput/SoftInputWithLabel'
import SoftTypography from 'assets/components/SoftTypography'
import dynamicGeneratedData from 'assets/data/dynamicGeneratedData'
import Table from 'assets/examples/Tables/Table'
import pxToRem from 'assets/theme/functions/pxToRem'
import { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  // branchList,
  bussinessTermStaticColums,
  // currencyList,
  // onAcList,
  poTaxStaticColums,
  purchaseOrderItemStaticColums,
  // qcTypeList,
  // taxTypeList,
  // termHeadList
} from '../common/StaticData/StaticJson'
import { SupplierList } from '../common/StaticData/SupplierList'
import './index.css'
import { array, func, object } from 'prop-types'
import { getMasterList } from "core-files/actions/masterAction"
import Loader from 'component/common/Loader/Loader'

export const PurchaseOrderForm = (props) => {
  /* declaration */
  const { masterData } = props;
  const { data, isLoading } = masterData;
  const navigate = useNavigate();
  const uomList = [];
   const [formData, setFormData] = useState({
     'email': '',
     'password': ''
   });
   const [error, setError] = useState("");
   const [showLoader, setShowLoader] = useState(false);
  const [onAcList,setOnAcList]=useState([]);
  const [qcTypeList,setQCTypeList]=useState([]);
  const [termHeadList,setTermHeadList]=useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [branchList, setBranchList] = useState([]);
  // const [poTypeList, setPoTypeList] = useState([]);
  const [taxTypeList, setTaxTypeList] = useState([]);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const staticTermHeadRow = {
    term_head: <Autocomplete
      sx={{
        width: '100%',
      }}
      size={'small'}
      options={termHeadList || []}
      onInputChange={(event, newInputValue) => {
        console.log('newInputValue', newInputValue);
        handleTermHeadChange(newInputValue)
      }}
      renderInput={(params) => <TextField {...params} placeholder={`Select Term Head`} />}
    />
    ,
    business_term: <textarea onChange={() => { }} style={{ width: '100%' }} placeholder={'Business Term'} className={`form-control form-control-sm`} rows="2"></textarea>,
  }
  const staticPORows = {
      item_name: <SoftInputWithLabel
      name={'item_name'}
      placeholder='Item Name'
      value={formData['po_number']}
      onChange={handleFormData}
      size={'small'}
    />,
    uom: <Autocomplete
    sx={{
      width: '8vw',
    }}
    size={'small'}
    options={uomList || []}
    onInputChange={(event, newInputValue) => {
      console.log('newInputValue', newInputValue);
      handleUOMIDChange(newInputValue)
    }}
    renderInput={(params) => <TextField {...params} placeholder={`uom`} />}
    />,
      part_code:<SoftInputWithLabel
      name={'part_code'}
      placeholder='Part Code'
      value={formData['po_number']}
      onChange={handleFormData}
      size={'small'}
    />,
      qty:<SoftInputWithLabel
      name={'qty'}
      placeholder='QTY'
      value={formData['qty']}
      onChange={handleFormData}
      size={'small'}
    />,
      rate:<SoftInputWithLabel
      name={'rate'}
      placeholder='Rate'
      value={formData['rate']}
      onChange={handleFormData}
      size={'small'}
    />,
      disc_percentage:<SoftInputWithLabel
      name={'disc_percentage'}
      placeholder='Disc Percentage'
      value={formData['disc_percentage']}
      onChange={handleFormData}
      size={'small'}
    />,
      disc_amount:<SoftInputWithLabel
      name={'disc_amount'}
      placeholder='Disc Amount'
      value={formData['disc_amount']}
      onChange={handleFormData}
      size={'small'}
    />,
      amount:<SoftInputWithLabel
      name={'amount'}
      placeholder='Amount'
      value={formData['amount']}
      onChange={handleFormData}
      size={'small'}
    />,
      delivery_date:<SoftInputWithLabel
      name={'delivery_date'}
      placeholder='Delivery Date'
      value={formData['delivery_date']}
      onChange={handleFormData}
      size={'small'}
      type={'date'}
    />,
    remarks: <textarea onChange={() => { }} style={{ width: '100%' }} placeholder={'Business Term'} className={`form-control form-control-sm`} rows="1"></textarea>
    ,
  }

  const { columns: poItemColumns } = dynamicGeneratedData(purchaseOrderItemStaticColums, []);
  const { columns: bussinessTermColums } = dynamicGeneratedData(bussinessTermStaticColums, []);
  const { columns: poTaxColums } = dynamicGeneratedData(poTaxStaticColums, []);

  const [termHeads, setTermHeads] = useState([staticTermHeadRow]);  
  console.log('termHeads', termHeads)
  const [poItems, setPOItems] = useState([staticPORows]);  
  const [currency, setCurrency] = useState('');
  const convertedSupplierList = useMemo(() => {
    const convertedList = SupplierList?.map(x => x?.PartyName || '')?.sort();
    const list = [...new Set(convertedList)]
    return list;
  }, [SupplierList]);

  /* useEffects */
  
  useEffect(() => {
    props?.getMasterList('currency');
    props?.getMasterList('branch');
    props?.getMasterList('account-type');
    props?.getMasterList('term-head');
    props?.getMasterList('tax-type');
    // props?.getMasterList('po-type');
    props?.getMasterList('quality-type');
  }, []);

  useEffect(() => {
    if (masterData) {
      const { data, isLoading } = masterData;
      const list = data?.data;
      if(data?.type === 'currency') setCurrencyList(list);
      if(data?.type === 'branch') setBranchList(list);
      if(data?.type === 'account-type') setOnAcList(list);
      if(data?.type === 'term-head') setTermHeadList(list);
      if(data?.type === 'tax-type') setTaxTypeList(list);
      // if(data?.type === 'po-type') setPoTypeList(list);
      if(data?.type === 'quality-type') setQCTypeList(list);
      if (currencyList?.length > 0 && branchList?.length > 0 && onAcList?.length > 0 && termHeadList?.length > 0 && qcTypeList?.length > 0 && taxTypeList?.length > 0) {
        setShowLoader(false);
      } else {
        setShowLoader(true);
      }
    }
      console.log('masterData', data, isLoading);
  }, [masterData,currencyList, branchList, onAcList, termHeadList,qcTypeList ,taxTypeList]);


  /* handlers */
  
  const handleTermHeadChange = (e, i) => {
    // const field = e.target.name;
    // const newTermHeads = [...termHeads];
    // newTermHeads[i][field] = e.target.value;
    // setTermHeads(newTermHeads);
  };

  const handleUOMIDChange = (e, i) => {
    // const field = e.target.name;
    // const newUOMID = [...termHeads];
    // newUOMID[i][field] = e.target.value;
    // setTermHeads(newUOMID);
  };

  const handleDeleteTermHead = (i) => {
    const newTermHead = [...termHeads];
    newTermHead.splice(i, 1);
    setTermHeads(newTermHead);
  };

  const handleDeletePOItem = (i) => {
    const newPOItem = [...poItems];
    newPOItem.splice(i, 1);
    setPOItems(newPOItem);
  };

  const handleAddTermHead = () => {
    setTermHeads([...termHeads, staticTermHeadRow]);
  };

  const handleAddPOItem = () => {
    setPOItems([...poItems, staticPORows]);
  };

  const submitFormData = (e) => {
    e.preventDefault();
    navigate('/purchase-order-list');
    // setProfile(staticUserData)
    // AuthApi.Login(formData)
    //   .then((response) => {
    //     if (response.data.success) {
    //       return setProfile(response);
    //     } else {
    //       setError(response.data.msg);
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       return setError(error.response.data.msg);
    //     }
    //     return setError("There has been an error.");
    //   });
  };

  return (
    <>
      {showLoader && <Loader />}
      <Card>
        <SoftBox>
          <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid pe-0" style={{ justifyContent: 'center' }}>
              <SoftTypography variant="h6"
                alignItems="center"  
                color="info"
                fontWeight="medium"
                textGradient>
                Store Purchase Order
              </SoftTypography>
            </div>
          </nav>
        </SoftBox>
        <SoftBox mt={6} p={3}>
          <form>
            <SoftBox mb={3}>
              <Grid mt={1} container spacing={2}>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'po_number'}
                    label={{ text: 'PO NO', direction: 'left' }}
                    value={formData['po_number']}
                    onChange={handleFormData}
                    disabled={true}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'date'}
                    label={{ text: 'Date', direction: 'left' }}
                    value={formData['date']}
                    onChange={(e) => {
                      handleFormData(e);
                    }}
                    type={'date'}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'on_ac'}
                    label={{ text: 'On AC', direction: 'left' }}
                    value={formData['on_ac']}
                    onChange={handleFormData}
                    type={'dropdown'}
                    optionsList={onAcList || []}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'branch'}
                    label={{ text: 'Branch', direction: 'left' }}
                    value={formData['branch']}
                    onChange={handleFormData}
                    type={'dropdown'}
                    size={'small'}
                    optionsList={branchList || []}
                  />
                </Grid>

                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'po_type'}
                    label={{ text: 'PO Type', direction: 'left' }}
                    value={formData['po_type']}
                    onChange={handleFormData}
                    size={'small'}
                    type={'dropdown'}
                    optionsList={[
                      // {
                      //   label: 'Select PO Type',
                      //   value: null,
                      //   disabled: false,
                      // },
                      {
                        label: 'General',
                        value: 'general',
                        disabled: false,
                      },
                      {
                        label: 'Annual',
                        value: 'annual',
                        disabled: false,
                      },
                      {
                        label: 'Capital',
                        value: 'capital',
                        disabled: false,
                      },
                      {
                        label: 'Import',
                        value: 'import',
                        disabled: false,
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'tax_type'}
                    label={{ text: 'Tax Type', direction: 'left' }}
                    value={formData['tax_type']}
                    onChange={handleFormData}
                    type={'dropdown'}
                    optionsList={taxTypeList || []}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'ref_number'}
                    label={{ text: 'Ref No', direction: 'left' }}
                    value={formData['ref_number']}
                    onChange={handleFormData}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'ref_date'}
                    label={{ text: 'Ref Date', direction: 'left' }}
                    value={formData['ref_date']}
                    onChange={handleFormData}
                    type={'date'}
                    size={'small'}
                  />
                </Grid>


                <Grid item xs={12} sm={6} xl={6}>
                  <SoftInputWithLabel
                    name={'vendor_name'}
                    label={{ text: 'Vendor Name', direction: 'left' }}
                    value={formData['vendor_name']}
                    onChange={handleFormData}
                    size={'small'}
                    type={'dropdown'}
                    optionsList={convertedSupplierList || []}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'req_date'}
                    label={{ text: 'Req Date', direction: 'left' }}
                    value={formData['req_date']}
                    onChange={handleFormData}
                    type={'date'}
                    size={'small'}
                  />
                </Grid>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'del_date'}
                    label={{ text: 'Del Date', direction: 'left' }}
                    value={formData['del_date']}
                    onChange={handleFormData}
                    type={'date'}
                    size={'small'}
                  />
                </Grid>
              </Grid>
              <Grid mt={1} container spacing={2}>
                <Grid item xs={12} sm={6} xl={6}>
                  <Grid item xs={12} sm={12} xl={12}>
                    <SoftInputWithLabel
                      name={'party_address'}
                      label={{ text: 'Party Address', direction: 'left' }}
                      value={formData['party_address']}
                      onChange={handleFormData}
                      size={'small'}
                      type={'text-area'}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} xl={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} xl={6}>
                      <SoftInputWithLabel
                        name={'qc_type'}
                        label={{ text: 'QC Type', direction: 'left' }}
                        value={formData['qc_type']}
                        onChange={handleFormData}
                        type={'dropdown'}
                        optionsList={qcTypeList || []}
                        size={'small'}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} xl={6}>
                      <SoftInputWithLabel
                        className={'display-flex'}
                        style={{
                          padding: '0px',
                          width: '77% !important',
                          maxWidth: '77%',
                        }}
                        inputProps={{
                          sx: {
                            margin: '4px'
                          }
                        }}
                        placeholder="Rate"
                        name={'currency'}
                        label={{ text: 'Currency', direction: 'left' }}
                        value={formData['currency']}
                        endAdornment={
                          <SoftBox style={{
                            padding: '5px',
                          }}>
                            <SoftTypography textTransform={"capitalize"} variant="caption" fontSize={"small"} fontWeight="bold" color="black">
                              Rate</SoftTypography>
                            {/* {['INR', '฿', '¥'][['dollar', 'baht', 'yen'].indexOf(currency)]} */}
                          </SoftBox>
                        }
                        startAdornment={
                          <>
                            <Autocomplete
                              sx={{
                                width: '50%',
                              }}
                              value={currency}
                              size={"small"}
                              // onChange={(event, newValue) => {
                              //    console.log('currency',newValue?.value);
                              //   setCurrency(newValue?.value);
                              //     // setFormState({
                              //     //     ...formState,
                              //     //     selected: newValue,
                              //     //     idPuntoVenta: newValue?.id,
                              //     // });
                              // }}
                              selectOnFocus
                              clearOnBlur
                              // freeSolo
                              inputValue={currency}
                              onInputChange={(event, newInputValue) => {
                                console.log('newInputValue', newInputValue);
                                setCurrency(newInputValue)
                              }}
                              options={currencyList}
                              renderInput={(params) => <TextField {...params} placeholder={'Currency'} />}
                            />
                          </>
                        }
                      // sx={{ width: 300 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} xl={6}>
                      <SoftInputWithLabel
                        name={'oc_number'}
                        label={{ text: 'OC No', direction: 'left' }}
                        value={formData['oc_number']}
                        onChange={handleFormData}
                        size={'small'}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} xl={6}>
                      <SoftInputWithLabel
                        name={'oc_date'}
                        label={{ text: 'OC Date', direction: 'left' }}
                        value={formData['oc_date']}
                        onChange={handleFormData}
                        type={'date'}
                        size={'small'}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid mt={1} container spacing={2}>
                <Grid item xs={12} sm={6} xl={3}>
                  <SoftInputWithLabel
                    name={'order_number'}
                    label={{ text: 'Order No', direction: 'left' }}
                    value={formData['order_number']}
                    onChange={handleFormData}
                    size={'small'}
                  />
                </Grid>
              </Grid>
            </SoftBox>
          </form>
          <SoftBox mb={3}>
            <Grid container xs={6} sm={6} md={6} lg={6} xl={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <SoftTypography variant="h6"
                  color="info"
                  fontWeight="medium"
                  textGradient>
                  Purchase Order Item
                </SoftTypography>
              </Grid>
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
                {/* <Table columns={poItemColumns} rows={[]} isLoading={false} /> */}

                <div className="table-responsive">
                      <table className="table align-items-center mb-0 po-table">
                        <thead>
                          <tr>
                            {poItemColumns.map((item, index) => (
                              <SoftBox
                                key={item?.name}
                                component="th"
                                width={"auto"}
                                textAlign={"center"}
                                fontSize={"small"}
                                fontWeight={700}
                                color="secondary"
                                opacity={0.7}
                                style={{ padding: '5px' }}
                                data-sortable=""
                              >
                                <SoftTypography textTransform={"capitalize"} variant="caption" fontSize={pxToRem(10.4)} fontWeight="bold" color="black">
                                  {item?.name.replaceAll('_', ' ')}
                                </SoftTypography>
                              </SoftBox>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {poItems?.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <SoftTypography variant="caption" tdwidth={'10%'}
                                  sx={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                  }}
                                  width={'100%'} color="text" fontWeight="medium">
                                  {index + 1}
                                </SoftTypography>
                              </td>
                              <td width={'20%'}>
                                {item?.item_name}
                              </td>
                              <td>
                                {item?.uom}
                              </td>
                              <td width="5%">
                                {item?.part_code}
                              </td>
                              <td width="5%">
                                {item?.qty}
                              </td>
                              <td width="5%">
                                {item?.rate}
                              </td>
                              <td width="5%">
                                {item?.disc_percentage}
                              </td>
                              <td width="5%">
                                {item?.disc_amount}
                              </td>
                              <td width="5%">
                                {item?.amount}
                              </td>
                              <td width="5%">
                                {item?.delivery_date}
                              </td>
                              <td width="15%">
                                {item?.remarks}
                              </td>
                              <td>
                                {
                                  <>
                                    {poItems?.length > 1 &&
                                      (<SoftBox
                                        id={index}
                                        className={'po-table-action-button'}
                                        bgColor={"error"}
                                        variant={"gradient"}
                                        onClick={(e, val) => {
                                          handleDeletePOItem(index);
                                        }}
                                        component={'button'}
                                      >
                                        <Icon sx={{ fontWeight: "bold" }}>remove</Icon>
                                      </SoftBox>)
                                    }
                                    <SoftBox
                                      className={'po-table-action-button'}
                                      bgColor={"info"}
                                      variant={"gradient"}
                                      onClick={() => {
                                        handleAddPOItem();
                                        // setBusinessTermRows([...termHeads, termHeads]);
                                        // console.log('add click')
                                      }}
                                      component={'button'}
                                    >
                                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                    </SoftBox>
                                  </>
                                }
                              </td>
                            </tr>
                          ))}
                            {/* <tr>
                               <td>
                                  <>
                                  <SoftButton color="info" type="button"
                                    variant={"gradient"}
                              // onClick={handleAddTodo}
                            >
                                    Add Todo
                                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                </SoftButton>
                                <SoftButton color="info"
                                    variant={"gradient"}
                                    type="submit">Submit Todos 
                                <Icon sx={{ fontWeight: "bold" }}>save</Icon>
                                </SoftButton>
                                  </>
                              </td>
                            </tr> */}
                        </tbody>
                      </table>
                      <div>
                        {/* <button className="btn btn-primary" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                          Previous
                        </button>
                        <button className="btn btn-primary"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={indexOfLastItem >= tableData?.length}
                        >
                          Next
                        </button> */}
                      </div>
                    </div>

              </SoftBox>
            </Card>
          </SoftBox>
          <SoftBox mb={3}>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <SoftTypography variant="h6"
                      color="info"
                      fontWeight="medium"
                      textGradient>
                      PO Business Terms
                    </SoftTypography>
                  </Grid>
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
                    {/* <Table sortable={false} noPadding={true} columns={bussinessTermColums} rows={termHeads || []} isLoading={false} /> */}

                    <div className="table-responsive">
                      <table className="table align-items-center mb-0">
                        <thead>
                          <tr>
                            {bussinessTermColums.map((item, index) => (
                              <SoftBox
                                key={item?.name}
                                component="th"
                                width={"auto"}
                                textAlign={"center"}
                                fontSize={"small"}
                                fontWeight={700}
                                color="secondary"
                                opacity={0.7}
                                style={{ padding: '5px' }}
                                data-sortable=""
                              >
                                <SoftTypography textTransform={"capitalize"} variant="caption" fontSize={pxToRem(10.4)} fontWeight="bold" color="black">
                                  {item?.name.replaceAll('_', ' ')}
                                </SoftTypography>
                              </SoftBox>
                            ))}
                          </tr>
                          {/* <tr> */}
                          {/* <th className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${sortedColumn === 'id' ? sortOrder : ''}`} style={{cursor:'pointer'}} data-sortable="" onClick={() => handleSort('id')}>
                              <div className="dataTable-sorter">ID</div>
                            </th>
                            <th className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${sortedColumn === 'name' ? sortOrder : ''}`} style={{cursor:'pointer'}} data-sortable="" onClick={() => handleSort('name')}>
                              <div className="dataTable-sorter">Name</div></th>
                            <th className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${sortedColumn === 'age' ? sortOrder : ''}`} style={{cursor:'pointer'}} data-sortable="" onClick={() => handleSort('age')}>
                              <div className="dataTable-sorter">Age</div></th>
                            <th className={`text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ${sortedColumn === 'city' ? sortOrder : ''}`} style={{cursor:'pointer'}} data-sortable="" onClick={() => handleSort('city')}>
                              <div className="dataTable-sorter">City</div>
                            </th> */}
                          {/* <th> */}

                          {/* </th> */}
                          {/* </tr> */}
                        </thead>
                        <tbody>
                          {termHeads?.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <SoftTypography variant="caption" tdwidth={'10%'}
                                  sx={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                  }}
                                  width={'100%'} color="text" fontWeight="medium">
                                  {index + 1}
                                </SoftTypography>
                              </td>
                              <td style={{ padding: '0px', width: '30%' }}>
                                {item?.term_head}
                              </td>
                              <td style={{ padding: '0px', width: '60%' }}>
                                {item?.business_term}
                              </td>
                              <td>
                                {
                                  <>
                                    {termHeads?.length > 1 &&
                                      (<SoftBox
                                        id={index}
                                        className={'bussiness-term-table-button'}
                                        bgColor={"error"}
                                        variant={"gradient"}
                                        onClick={(e, val) => {
                                          handleDeleteTermHead(index);
                                        }}
                                        component={'button'}
                                      >
                                        <Icon sx={{ fontWeight: "bold" }}>remove</Icon>
                                      </SoftBox>)
                                    }
                                    <SoftBox
                                      className={'bussiness-term-table-button'}
                                      bgColor={"info"}
                                      variant={"gradient"}
                                      onClick={() => {
                                        handleAddTermHead();
                                        // setBusinessTermRows([...termHeads, termHeads]);
                                        // console.log('add click')
                                      }}
                                      component={'button'}
                                    >
                                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                                    </SoftBox>
                                  </>
                                }
                              </td>
                              {/* <td><p className="text-xs font-weight-bold mb-0">{item.name}</p></td>
                              <td><p className="text-xs font-weight-bold mb-0">{item.age}</p></td>
                              <td><p className="text-xs font-weight-bold mb-0">{item.city}</p></td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div>
                        {/* <button className="btn btn-primary" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                          Previous
                        </button>
                        <button className="btn btn-primary"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={indexOfLastItem >= tableData?.length}
                        >
                          Next
                        </button> */}
                      </div>
                    </div>
                  </SoftBox>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <SoftTypography variant="h6"
                      color="info"
                      fontWeight="medium"
                      textGradient>
                      PO TAX
                    </SoftTypography>
                  </Grid>
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
                    <Table columns={poTaxColums} rows={[]} isLoading={false} />
                  </SoftBox>
                </Card>
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mb={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} xl={6}>
                <Grid item xs={12} sm={12} xl={12}>
                  <SoftInputWithLabel
                    name={'remarks'}
                    label={{ text: 'Remarks', direction: 'left' }}
                    value={formData['remarks']}
                    onChange={handleFormData}
                    size={'small'}
                    type={'text-area'}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} xl={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftInputWithLabel
                      name={'total_quality'}
                      label={{ text: 'Total Quality', direction: 'left' }}
                      value={formData['total_quality']}
                      onChange={handleFormData}
                      size={'small'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftInputWithLabel
                      name={'sub_total'}
                      label={{ text: 'Sub Total', direction: 'left' }}
                      value={formData['sub_total']}
                      onChange={handleFormData}
                      size={'small'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftInputWithLabel
                      name={'c_total_amount'}
                      label={{ text: 'C Total Amount', direction: 'left' }}
                      value={formData['c_total_amount']}
                      onChange={handleFormData}
                      size={'small'}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} xl={6}>
                    <SoftInputWithLabel
                      name={'total_amount'}
                      label={{ text: 'Total Amount', direction: 'left' }}
                      value={formData['total_amount']}
                      onChange={handleFormData}
                      size={'small'}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mt={4} className={'item-center'}>
            <SoftButton className={'me-3'} variant="gradient" color="info" mr={2} onClick={submitFormData}>
              Save&nbsp;<Icon sx={{ fontWeight: "bold" }}>save</Icon>
            </SoftButton>
            <SoftButton variant="gradient" color="error" onClick={() => { navigate('/purchase-order-list'); }}>
              Cancel&nbsp;<Icon sx={{ fontWeight: "bold" }}>cancel</Icon>
            </SoftButton>
            {/* <Grid spacing={1} container xs={12} sm={12} md={6} lg={6} xl={6}>
              <Grid item xs={12} sm={6} xl={6} lg={6} md={6}>
              </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <SoftButton
                  color="info"
                  variant={"gradient"}
                  fullWidth
                    // onClick={() => { }
                    //   // history.push('/create-purchase-order')
                    // }
                    // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >Submit&nbsp;
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                </SoftButton>
              </Grid>
            </Grid> */}
          </SoftBox>
        </SoftBox >
      </Card>
    </>
  )
}

const mapDispatchToProps = {
  getMasterList
}

PurchaseOrderForm.propTypes = {
  getMasterList: func,
  masterData:object
}
const mapStateToProps = (state) => {
  return {
    masterData: state?.masterReducer
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrderForm)