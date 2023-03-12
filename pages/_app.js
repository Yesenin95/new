import Layout from "../components/Layout";
import "../styles/globals.css";
import {useState} from 'react'

function MyApp({ Component, pageProps }) {
   const [data, setData] = useState([]);

   const handleGetData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
   };

   return (
      <Layout onClick={handleGetData} data={data}>
         <Component {...pageProps} />
      </Layout>
   );
}

export default MyApp;
