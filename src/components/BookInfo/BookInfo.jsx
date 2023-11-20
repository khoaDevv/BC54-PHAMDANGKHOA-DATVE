import { useState, useEffect } from "react";

const BookInfo = ({ isSelecting = false, onStartSelecting }) => {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState(0);

  useEffect(() => {
    if (!isSelecting) {
      setName("");
      setTickets(0);
    }
  }, [isSelecting]);

  return (
    <div className="text-white">
      <label>
        <div>Name</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSelecting}
        />
      </label>
      <br />
      <label>
        <div>Number of tickets</div>
        <input
          type="number"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value) || 0)}
          disabled={isSelecting}
        />
      </label>
      <div>
        <button
          className="btn btn-warning"
          disabled={!name || tickets <= 0 || isSelecting}
          onClick={() => onStartSelecting(name, tickets)}
        >
          Start selecting
        </button>
      </div>
      <div>
        <h2 className="text-center">PLEASE SELECT YOUR SEATS </h2>
      </div>
    </div>
  );
};

export default BookInfo;
