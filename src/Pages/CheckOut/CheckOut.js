import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(authContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    // create order Object
    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // receive from beck-end
    fetch("http://localhost:5000/orders", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.acknowledged){
            toast.success('order placed successfully')
            form.reset();
        }
    })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl text-bold text-rose-600">
          You are about to order: {title}
        </h2>
        <h4 className="text-3xl text-rose-600">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input w-full input-bordered input-secondary"
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input w-full input-bordered input-secondary"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-secondary w-full"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input w-full input-bordered input-secondary"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-secondary w-full mt-4"
          placeholder="Your Message"
        ></textarea>
        <input
          className="btn btn-secondary mt-4"
          type="submit"
          value="Place Your Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
