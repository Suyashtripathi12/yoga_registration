import CustomerDetails from "../models/customer.js";

export const getCustomers = async (req, res) => {
    try {
        const customerDetails = await CustomerDetails.find();
        res.status(200).json(customerDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAppointment = async (req, res) => {
    console.log(req.body)

    const { name, email, phoneNumber, age, gender, timeSlot,UPI } = req.body;

    const newCustomer = new CustomerDetails({
			name,
			email,
			phoneNumber,
			age,
			gender,
			timeSlot,
            UPI
		});

    try {
        await newCustomer.save();

        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}