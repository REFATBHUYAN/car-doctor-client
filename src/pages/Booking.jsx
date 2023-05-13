import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(!data.error){

          setBookings(data);
        }
        else{
          navigate('/');
        }
      });
  }, []);

  const handleDelete = id =>{
    const proced = confirm('are you sure you want to delete ?');
    if(proced){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaing = bookings.filter(booking => booking._id !== id);
                setBookings(remaing);
            }
        })
    }
  }
  const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('updated data')
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
  }

  return (
    <div>
      <h1>Your Bookings: {bookings?.length}</h1>
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
                <th>Service</th>
                <th>Date</th>
                <th>Email</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleConfirm={handleConfirm} handleDelete={handleDelete}></BookingRow>)
              }
              {/* row 2 */}
              
              
              
            </tbody>
            {/* foot */}
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
