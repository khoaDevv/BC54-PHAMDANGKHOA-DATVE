import { useSelector } from "react-redux";

const BookResults = () => {
  const { bookingInfo } = useSelector((state) => state.booking);
  return (
    <table className=" container book-results text-center text-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Seats</th>
          <th>Seats</th>
        </tr>
      </thead>
      <tbody>
        {bookingInfo.map((info, index) => (
          <tr key={index}>
            <td>{info.name}</td>
            <td>{info.seats.length}</td>
            <td>{info.seats.join(",")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookResults;
