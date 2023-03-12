import React from "react";
import Button from "./Button";
import Table from "./Table";

function Layout({ children, onClick, data }) {
   return (
      <div>
         <Button onClick={onClick} />
         {data.length > 0 && <Table data={data} />}
         {children}
      </div>
   );
}

export default Layout;

