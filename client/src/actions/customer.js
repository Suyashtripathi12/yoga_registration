import * as api from '../api';

const createAppointment = (customer) => async (dispatch) => {
    try {
       
        const { data } = await api.createAppointment(customer);
        
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export default createAppointment;
