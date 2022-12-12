import React, { useState } from "react";
import { useDispatch } from "react-redux";

import createAppointment from "./actions/customer";

function BasicFrom () {
    const dispatch = useDispatch();

    const [customerData, setcustomerData]= useState({name: '', age: '', email: '' , phoneNumer: '', gender: '', timeSlot: '', payment: ''})

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(customerData);

        dispatch(createAppointment(customerData))
    }

  return (
		<div className="container">
			<h1>Yoga Regitration</h1>
			<form action="/" method="post" onSubmit={handleSubmit} autoComplete="off">
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						required
						value={customerData.name}
						onChange={(e) =>
							setcustomerData({ ...customerData, name: e.target.value })
						}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="name">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						value={customerData.email}
						onChange={(e) =>
							setcustomerData({ ...customerData, email: e.target.value })
						}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="name">Phone Number</label>
					<input
						type="text"
						name="phone_Number"
						id="name"
						required
						value={customerData.phoneNumer}
						onChange={(e) =>
							setcustomerData({ ...customerData, phoneNumer: e.target.value })
						}
					/>
				</div>
				<div className="form-control">
					<h4>Please select your Gender:</h4>
					<div className="radio-time">
						<input
							type="radio"
							id="male"
							name="gender"
							value="Male"
							onChange={(e) =>
								setcustomerData({ ...customerData, gender: e.target.value })
							}
						/>
						<label htmlFor="Male">Male</label>
						<br />
					</div>
					<div className="radio-time">
						<input
							type="radio"
							id="female"
							name="gender"
							value="Female"
							onChange={(e) =>
								setcustomerData({ ...customerData, gender: e.target.value })
							}
						/>
						<label htmlFor="Female">Female</label>
					</div>
				</div>
				<div className="form-control">
					<label htmlFor="name">Age</label>
					<input
						type="number"
						name="Age"
						id="Ages"
						min="18"
						max="65"
						required
						value={customerData.age}
						onChange={(e) =>
							setcustomerData({ ...customerData, age: e.target.value })
						}
					/>
				</div>
				<div className="form-control">
					<h4>Please select your favorite Time Slot:</h4>
					<div className="radio">
						<div className="radio-time">
							<input
								type="radio"
								id="6AM"
								name="time_slot"
								value="6AM"
								onChange={(e) =>
									setcustomerData({ ...customerData, timeSlot: e.target.value })
								}
							/>
							<label htmlFor="html">6AM-7AM</label>
							<br />
						</div>
						<div className="radio-time">
							<input
								type="radio"
								id="7AM"
								name="time_slot"
								value="7AM"
								onChange={(e) =>
									setcustomerData({ ...customerData, timeSlot: e.target.value })
								}
							/>
							<label htmlFor="css">7AM-8AM</label>
							<br />
						</div>
					</div>
					<div className="radio">
						<div className="radio-time">
							<input
								type="radio"
								id="8AM"
								name="time_slot"
								value="8AM"
								onChange={(e) =>
									setcustomerData({ ...customerData, timeSlot: e.target.value })
								}
							/>
							<label htmlFor="html">8AM-9AM</label>
							<br />
						</div>
						<div className="radio-time">
							<input
								type="radio"
								id="5PM"
								name="time_slot"
								value="5PM"
								onChange={(e) =>
									setcustomerData({ ...customerData, timeSlot: e.target.value })
								}
							/>
							<label htmlFor="css">5PM-6PM</label>
						</div>
					</div>

					<div className="form-control">
						<h3>Complete Payment</h3>
                        <input
						type="number"
						name="Payment"
						id="payment"
						min="300"
						max="300"
						required
						value={customerData.payment}/>
					</div>
				</div>

				<button className="btn" type="submit">
					Submit
				</button>
			</form>

		</div>
    );
}


export default BasicFrom;