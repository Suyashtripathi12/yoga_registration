import axios from 'axios';

const url = "http://localhost:5000/register";

export const fetchCustomer = () => axios.get(url);

export const createAppointment = (newAppointment) => axios.post(url, newAppointment)