const Table = ({ data }) => {
   return (
      <div className="sortable">
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>City</th>
               </tr>
            </thead>
            <tbody>
               {data.map((user) => (
                  <tr key={user.id}>
                     <td>
                        <h4>{user.name}</h4>
                     </td>
                     <td>{user.company.name}</td>
                     <td>
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                     </td>
                     <td>
                        <a href={`tel:${user.phone}`}>{user.phone}</a>
                     </td>
                     <td>
                        <a href={`http://${user.website}`}>{user.website}</a>
                     </td>
                     <td>{user.address.city}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
