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
import PropTypes from "prop-types";

// Custom styles for SoftInput
import SoftInputRoot from "assets/components/SoftInput/SoftInputRoot";
import SoftInputWithIconRoot from "assets/components/SoftInput/SoftInputWithIconRoot";
import SoftInputIconBoxRoot from "assets/components/SoftInput/SoftInputIconBoxRoot";
import SoftInputIconRoot from "assets/components/SoftInput/SoftInputIconRoot";

// Soft UI Dashboard React contexts
import { useSoftUIController } from "assets/context";
import SoftTypography from "../SoftTypography";

const SoftInput = forwardRef(({ size, icon, error, success, disabled, ...rest }, ref) => {
  let template;
  const [controller] = useSoftUIController();
  const { direction } = controller;
  const iconDirection = icon.direction;

  if (icon.component && icon.type === 'text' && icon.direction === "right") {
    template = (
      <SoftInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <SoftInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
        <SoftInputIconBoxRoot ownerState={{ size }} style={{ width: 'auto', padding: '5px' }}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            {icon.text}
          </SoftTypography>
        </SoftInputIconBoxRoot>
      </SoftInputWithIconRoot>
    );

  } else if (icon.component && icon.direction === "left") {
    template = (
      <SoftInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        {icon.type === "text" && icon.text ?
          <SoftInputIconBoxRoot ownerState={{ size }} style={{ width: 'auto', padding: '5px' }}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              {icon.text}
            </SoftTypography>
          </SoftInputIconBoxRoot>
          :
          <SoftInputIconBoxRoot ownerState={{ size }}>
            <SoftInputIconRoot fontSize="small" ownerState={{ size }}>
              {icon.component}
            </SoftInputIconRoot>
          </SoftInputIconBoxRoot>
        }
        <SoftInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
      </SoftInputWithIconRoot>
    );
  } else if (icon.component && icon.direction === "right") {
    template = (
      <SoftInputWithIconRoot ref={ref} ownerState={{ error, success, disabled }}>
        <SoftInputRoot
          {...rest}
          ownerState={{ size, error, success, iconDirection, direction, disabled }}
        />
        {icon.type === "text" && icon.text ?
          <SoftInputIconBoxRoot ownerState={{ size }} style={{ width: 'auto', padding: '5px' }}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              {icon.text}
            </SoftTypography>
          </SoftInputIconBoxRoot>
          :
          <SoftInputIconBoxRoot ownerState={{ size }}>
            <SoftInputIconRoot fontSize="small" ownerState={{ size }}>
              {icon.component}
            </SoftInputIconRoot>
          </SoftInputIconBoxRoot>
        }
      </SoftInputWithIconRoot>
    );
  } else {
    template = (
      <SoftInputRoot {...rest} ref={ref} ownerState={{ size, error, success, disabled }} />
    );
  }

  return template;
});

// Setting default values for the props of SoftInput
SoftInput.defaultProps = {
  size: "medium",
  icon: {
    component: false,
    direction: "none",
    type: "",
    text: ""
  },
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the SoftInput
SoftInput.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.shape({
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    direction: PropTypes.oneOf(["none", "left", "right"]),
    type: PropTypes.string,
    text: PropTypes.string
  }),
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SoftInput;
