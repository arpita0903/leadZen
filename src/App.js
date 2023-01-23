import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardDetails from "./components/CardDetails";

function App() {
  const [apiData, setApiData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setApiData(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (apiData === []) return <p>Loading...</p>;
  return (
    <div className="container">
      <CardDetails apiData={apiData} />
    </div>
  );
}

export default App;
