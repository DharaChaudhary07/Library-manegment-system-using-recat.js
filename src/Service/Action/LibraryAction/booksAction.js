import axios from "axios";
import generateUniqueId from "generate-unique-id";

// Action creators
export const SingleRecord = (data) => ({
    type: "SingleRecord",
    payload: data,
});

export const UpdateRecord = (data) => ({
    type: "UpdateRecord",
    payload: data,
});

export const GetData = (data) => ({
    type: "GetData",
    payload: data,
});

// Async action creators
export const AddDataPostAsync = (data) => {
    return (dispatch) => {
        data.id = generateUniqueId({
            length: 4,
            useLetters: false,
        });

        axios
            .post('http://localhost:3200/Books', data)
            .then((res) => {
                console.log("Response:", res);
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.error("Error adding data:", err);
            });
    };
};

export const GetDataAsync = () => {
    return (dispatch) => {
        axios
            .get('http://localhost:3200/Books')
            .then((res) => {
                console.log("Response:", res);
                dispatch(GetData(res.data));
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    };
};

export const singledataAsync = (id) => {
    return (dispatch) => {
        axios
            .get(`http://localhost:3200/Books/${id}`)
            .then((res) => {
                console.log("Response:", res);
                dispatch(SingleRecord(res.data));
            })
            .catch((err) => {
                console.error("Error fetching single record:", err);
            });
    };
};

export const DeleteAsync = (id) => {
    return (dispatch) => {
        axios
            .delete(`http://localhost:3200/Books/${id}`)
            .then((res) => {
                console.log("Deleted record response:", res.data);
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.error("Error deleting record:", err);
            });
    };
};

export const UpdateRecordAsync = (data) => {
    return (dispatch) => {
        axios
            .put(`http://localhost:3200/Books/${data.id}`, data)
            .then((res) => {
                console.log("Update response:", res);
                dispatch(GetDataAsync());
            })
            .catch((err) => {
                console.error("Error updating record:", err);
            });
    };
};