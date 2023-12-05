import axios from "axios";
import { ACTIONS } from "core-files/constants/actionConstants";
import { BASEURL } from "core-files/constants/apiConstant";
import { useDispatch } from "react-redux";

export const loaderStart = () => {
    return {
        type: ACTIONS.loaderStart,
    };
};
export const purchaseOrderSuccess = (data) => {
    return {
        type: ACTIONS.purchaseOrderSuccess,
        payload: data,
    };
};

export const purchaseOrderFailed = (error) => {
    return {
        type: ACTIONS.purchaseOrderFailed,
        error,
    };
};

export const getPurchaseOrderList = (data) => {
    return (dispatch) => {
        dispatch(loaderStart());
        axios.get(`${BASEURL}/purchase-order`)
            .then(data => {
                console.log('purchase order list get', data.data)
                console.log(data.data);
                dispatch(purchaseOrderSuccess(data.data))
            })
            .catch((error) => {
                dispatch(purchaseOrderFailed(error))
                console.log('error in get purchase order', error);
            });
    }
};

export const removePurchaseOrder = (id) => {
    return {
        type: ACTIONS.deletePurchaseOrder,
        payload: id,
    };
};