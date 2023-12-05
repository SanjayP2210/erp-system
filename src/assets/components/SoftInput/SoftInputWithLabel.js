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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes, { array, func, string } from "prop-types";

// Soft UI Dashboard React contexts
import { useSoftUIController } from "assets/context";
import SoftTypography from "../SoftTypography";
import SoftInput from ".";
import { makeStyles } from "@mui/styles";
import SoftBox from "../SoftBox";
import { Autocomplete, TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    leftBox: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputLabel: {
        display: 'flex',
        alignItems: 'center',
        width: '30%'
    },
    leftInputBox: {
        marginLeft: '0px'
    },
    rightInputBox: {
        marginRight: '0px'
    }
}));

const SoftInputWithLabel = forwardRef(({ size, label = {}, type, optionsList = [], placeholder, value, onChange, name, error, success, disabled, ...rest }, ref) => {
    const labelDirection = label.direction;
    const classes = useStyles();
    let template;

    const options = optionsList?.length > 0 ? optionsList : [
        {
            label: 'select',
            value: null,
            disabled: false,
        },
    ];

    {/* <div className="form-group">
        <label htmlFor="example-text-input" className="form-control-label">Text</label>
        <input className="form-control" value={formData['name']}
            onChange={handleFormData} type="text" name='name' id="example-text-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-search-input" className="form-control-label">Search</label>
        <input className="form-control"  name='search' onChange={handleFormData}  type="search" value={formData['search'] || 'hello'} id="example-search-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-email-input" className="form-control-label">Email</label>
        <input className="form-control" name='email' onChange={handleFormData}  type="email" value="@example.com" id="example-email-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-url-input" className="form-control-label">URL</label>
        <input className="form-control" type="url" onChange={handleFormData} value="" id="example-url-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-tel-input" className="form-control-label">Phone</label>
        <input className="form-control" type="tel" onChange={handleFormData} value="40-(770)-888-444" id="example-tel-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-password-input" className="form-control-label">Password</label>
        <input className="form-control" type="password" onChange={handleFormData} value="password" id="example-password-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-number-input" className="form-control-label">Number</label>
        <input className="form-control" type="number" onChange={handleFormData} value="23" id="example-number-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-datetime-local-input" className="form-control-label">Datetime</label>
        <input className="form-control"  name='date-time' onChange={handleFormData} value={formData['date-time']} type="datetime-local" id="example-datetime-local-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-date-input" className="form-control-label">Date</label>
        <input className="form-control" name='date'  onChange={handleFormData} type="date" value={formData['date'] || '2018-11-23'} id="example-date-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-month-input" className="form-control-label">Month</label>
        <input className="form-control" type="month" onChange={handleFormData} value="2018-11" id="example-month-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-week-input" className="form-control-label">Week</label>
        <input className="form-control" type="week" onChange={handleFormData} value="2018-W23" id="example-week-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-time-input" className="form-control-label">Time</label>
        <input className="form-control" type="time" onChange={handleFormData} value="10:30:00" id="example-time-input"/>
    </div>
    <div className="form-group">
        <label htmlFor="example-color-input" className="form-control-label">Color</label>
        <input className="form-control" type="color" value="#5e72e4" id="example-color-input"/>
    </div> */}

    if (type === "date") {
        template = (
            <SoftBox className={classes.leftBox}>
                {label?.text && <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                        {label?.text}
                    </SoftTypography>}
                <input className={`form-control form-control-sm ${classes.leftInputBox}`} onChange={onChange} type="date" name={name} value={value} id="example-date-input" />
            </SoftBox>
        )
    } else if (type === "text-area") {
        template = (
            <SoftBox className={classes.leftBox}>
                {label?.text && <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                        {label?.text}
                    </SoftTypography>}
                <textarea placeholder={placeholder || label?.text} className={`form-control form-control-sm ${classes.leftInputBox}`} rows="3"></textarea>
            </SoftBox>
        )
    } else if (type === "dropdown") {
        template = (
            <SoftBox className={labelDirection === "left" ? classes.leftBox : ''}>
                {label?.text && <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                        {label?.text}
                    </SoftTypography>}
                <Autocomplete
                    sx={{
                        width: '100%',
                    }}
                    size={size}
                    options={options}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} placeholder={`Select ${label?.text}`} />}
                />
                {/* <select className={`form-control ${classes.leftInputBox}`}>
                    {options?.map((item, index) => <option key={index} value={item?.value} >{item?.label}</option>)} 
                </select> */}
                {/* <input list="browsers" className="form-control form-control-sm form-select" name="browser" id="browser"/>
                <datalist id="browsers">
                    <option value="Edge">Edge</option>
                    <option value="Firefox">Firefox</option>
                    <option value="Chrome">Chrome</option>
                    <option value="Opera">Opera</option>
                    <option value="Safari">Safari</option>
                </datalist> */}
            </SoftBox>
        )
    } else if (label.text && labelDirection === "left") {
        template = (
            <SoftBox className={classes.leftBox}>
                {label?.text && <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                        {label?.text}
                    </SoftTypography>}
                <SoftInput
                    className={classes.leftInputBox}
                    size={size}
                    type={type}
                    disabled={disabled}
                    name={name} value={value} onChange={onChange} placeholder={placeholder || label?.text} {...rest} />
            </SoftBox>
        );
    } else if (label.text && labelDirection === "right") {
        template = (
            <SoftBox className={classes.leftBox}>
                <SoftInput
                    className={classes.rightInputBox}
                    size={size}
                    type={type}
                    disabled={disabled}
                    {...rest} 
                    name={name} value={value} onChange={onChange} placeholder={placeholder || label?.text} />
                <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                    {label?.text}
                </SoftTypography>
            </SoftBox>
        )
    } else {
        template = (
            <SoftBox>
                <SoftTypography className={classes.inputLabel} mr={0.5} component="label" variant="caption" fontWeight="bold">
                    {label?.text}
                </SoftTypography>
                <SoftInput
                    {...rest} 
                    size={size}
                    type={type}
                    disabled={disabled}
                    name={name} value={value} onChange={onChange} placeholder={placeholder} />
            </SoftBox>
        );
    }

    return template;
});

// Setting default values for the props of SoftInput
SoftInputWithLabel.defaultProps = {
    size: "medium",
    label: {
        text: '',
        direction: "none",
    },
    error: false,
    success: false,
    disabled: false,
    type: 'text',
    name: '',
    value: '',
    placeholder: '',
    optionsList: [],
};

// Typechecking props for the SoftInput
SoftInputWithLabel.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.shape({
        text: PropTypes.string,
        direction: PropTypes.oneOf(["none", "left", "right"]),
    }),
    error: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: func,
    value: string,
    type: PropTypes.oneOf(['email', 'password', 'text', 'number', 'date', 'dropdown']),
    name: PropTypes.string,
    placeholder: string,
    optionsList: array
};

export default SoftInputWithLabel;
