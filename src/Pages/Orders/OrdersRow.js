import React from "react";

const OrdersRow = ({ order, handleDelete, handleStatusUpdate}) => {
  const { _id, img, serviceName, customer, phone, price, status} = order;


  return (
    <tr>
      <th>
        <label>
          <button onClick={()=> handleDelete(_id)} className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">
          ${price}
        </span>
      </td>
      <td>{}</td>
      <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
    </tr>
  );
};

export default OrdersRow;
