import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [editingStatus, setEditingStatus] = useState(null); // Track which status is being edited
  const [editedStatuses, setEditedStatuses] = useState({}); // Track status changes

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    axios.get("https://sunnyphotographybackend-production.up.railway.app/getbookings")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  };

  const handleStatusClick = (id) => {
    setEditingStatus(id); // Set the clicked row for editing
  };

  const handleStatusChange = (id, newStatus) => {
    setEditedStatuses({ ...editedStatuses, [id]: newStatus }); // Store changes
  };

  const handleSubmitChange = async (id) => {
    try {
      const updatedStatus = editedStatuses[id];
      await axios.put("https://sunnyphotographybackend-production.up.railway.app/updateStatus", { id, status: updatedStatus });

      setEditingStatus(null); // Exit edit mode
      setEditedStatuses((prev) => {
        const newState = { ...prev };
        delete newState[id]; // Remove submitted status from pending changes
        return newState;
      });

      fetchCustomers(); // Refresh table after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Customer Bookings</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg  ">
        <table className="table table-border">
          <thead>
            <tr className="bg-blue-100 text-blue-900 " >
              <th className=" px-4 py-2">S.No</th>
              <th className=" px-4 py-2">Name</th>
              <th className=" px-4 py-2">Phone</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Venue</th>
              <th className="px-4 py-2">Package</th>
              <th className=" px-4 py-2">Requests</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id} className={`${index % 2 === 0 ? "bg-secondary" : "bg-white"}`}>
                <td className=" px-4 py-2">{index + 1}</td>
                <td className=" px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.date}</td>
                <td className=" px-4 py-2">{customer.venue}</td>
                <td className=" px-4 py-2">{customer.packageName}</td>
                <td className=" px-4 py-2">{customer.requests}</td>
                <td className=" px-4 py-2">
                  {editingStatus === customer.id ? (
                    <>
                      <select
                        value={editedStatuses[customer.id] || customer.status}
                        onChange={(e) => handleStatusChange(customer.id, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={() => handleSubmitChange(customer.id)}
                        className="ml-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Submit
                      </button>
                      <hr/>
                    </>
                  ) : (
                    <span
                      className="cursor-pointer text-blue-700 underline"
                      onClick={() => handleStatusClick(customer.id)}
                    >
                      {customer.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
