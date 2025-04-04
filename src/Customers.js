import React, { useEffect, useState } from "react";
import axios from "axios";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [editingStatus, setEditingStatus] = useState(null);
  const [editedStatuses, setEditedStatuses] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://sunnyphotographybackend-production.up.railway.app/getbookings");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusClick = (id) => {
    setEditingStatus(id);
  };

  const handleStatusChange = (id, newStatus) => {
    setEditedStatuses((prev) => ({ ...prev, [id]: newStatus }));
  };

  const handleSubmitChange = async (id) => {
    try {
      const updatedStatus = editedStatuses[id] || customers.find((c) => c.id === id).status;
      await axios.put("https://sunnyphotographybackend-production.up.railway.app/updateStatus", { id, status: updatedStatus });

      setCustomers((prev) =>
        prev.map((customer) => (customer.id === id ? { ...customer, status: updatedStatus } : customer))
      );

      setEditingStatus(null);
      setEditedStatuses((prev) => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Failed to update status. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Customer Bookings</h2>

      {loading && <p className="text-center text-gray-600">Loading customer data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="px-4 py-2">S.No</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Venue</th>
                <th className="px-4 py-2">Package</th>
                <th className="px-4 py-2">Requests</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{customer.name}</td>
                  <td className="px-4 py-2">{customer.phone}</td>
                  <td className="px-4 py-2">{customer.date}</td>
                  <td className="px-4 py-2">{customer.venue}</td>
                  <td className="px-4 py-2">{customer.packageName}</td>
                  <td className="px-4 py-2">{customer.requests}</td>
                  <td className="px-4 py-2">
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
                          className="btn btn-outline-primary"
                        >
                          Save
                        </button>
                        
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
      )}
    </div>
  );
};

export default Customer;
