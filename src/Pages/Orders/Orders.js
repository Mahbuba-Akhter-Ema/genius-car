import React, { useContext, useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Orders = () => {
  const {user} = useContext(authContext);
  console.log(user);
  const [orders, setOrders] = useState([])
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [user?.email]);
  
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure you want to delete your order')
    if(proceed){
      fetch(`http://localhost:5000/orders/${id}`,{
        method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success('deleted successfully');
          const remaining = orders.filter(order => order._id !== id)
          setOrders(remaining);
        }
      })
    }
  }

  const handleStatusUpdate = id => {
    fetch(`http://localhost:5000/orders/${id}`, {
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            const remaining = orders.filter(odr => odr._id !== id);
            const approving = orders.find(odr => odr._id === id);
            approving.status = 'Approved'

            const newOrders = [approving, ...remaining];
            setOrders(newOrders);
        }
    })
}

    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Order Name</th>
        <th>Order status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {
        orders?.map(order => <OrdersRow 
          key={order._id}
          order={order}
          handleDelete={handleDelete}
          handleStatusUpdate={handleStatusUpdate}
        ></OrdersRow>)
      }

    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Orders;