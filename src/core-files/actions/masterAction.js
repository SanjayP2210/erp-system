import axios from "axios";
import { ACTIONS } from "core-files/constants/actionConstants";
import { BASEURL } from "core-files/constants/apiConstant";

export const loaderStart = () => {
    return {
        type: ACTIONS.loaderStart,
    };
};
export const masterSuccess = (data) => {
    return {
        type: ACTIONS.masterSuccess,
        payload: data,
    };
};

export const masterFailed = (error) => {
    return {
        type: ACTIONS.masterFailed,
        error,
    };
};

export const getMasterList = (masterType) => {
    return (dispatch) => {
        dispatch(loaderStart());
        axios.get(`${BASEURL}/${masterType}`)
            .then(data => {
                console.log(`${masterType} list get`, data.data)
                console.log(data.data);
                dispatch(masterSuccess({ data: data.data, type: masterType }))
            })
            .catch((error) => {
                dispatch(masterFailed(error))
                console.log(`error in get ${masterType}`, error);
            });
    }
};

export const removeMaster = (id) => {
    return {
        type: ACTIONS.delete,
        payload: id,
    };
};