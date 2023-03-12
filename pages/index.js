import { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";

const IndexPage = () => {
   const [data, setData] = useState([]);

   const handleGetData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
   };

   return (
      <div>
         {data.length > 0 && <Table data={data} />}
      </div>
   );
};

export default IndexPage;

