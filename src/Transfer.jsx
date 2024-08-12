import { useEffect, useState } from "react";

function Transfer() {
  const initialNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [names] = useState(initialNames);
  const [newNames, setNewNames] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    const transferItems = setInterval(() => {
      if (currentId < names.length) {
        setNewNames(() => [...newNames, names[currentId]]);
        setCurrentId(currentId + 1);
      }
      if (names.length) clearInterval(transferItems);
    }, 1000);
    if (!names.length) clearInterval(transferItems);
  });

  return (
    <div>
      <h3>Original Names</h3>

      <ul style={{ backgroundColor: "red" }}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Transferred Names</h3>
      <ul style={{ backgroundColor: "green" }}>
        {newNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Transfer;
