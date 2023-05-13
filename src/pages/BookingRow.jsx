const BookingRow = ({ booking,handleDelete,handleConfirm }) => {
  const {_id,  img, email, date, service, price, status } = booking;
  
  return (
    <>
      <tr>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>{service}</div>
          </div>
        </td>
        <td>{date}</td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
            {
                status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> : <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
            }
          
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
