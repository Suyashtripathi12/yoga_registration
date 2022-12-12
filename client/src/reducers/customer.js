import { CREATE } from "../constants/actionType.js";

const customers = (customer = [], action) => {
    switch (action.type) {
        case CREATE:
           
            return [ ...customers, action.payload ];
        default:
            return customer;
    }
};

export default customers