// import React, { useState, useEffect } from 'react';
// import { useTable } from 'react-table';

// function TournamentsTable() {
//     const data = React.useMemo(
//         () => [
//             {
//                 Date: '5/12/2022',
//                 Location: 'Brisbane Olympic Pool',
//                 Details: 'Competition - over 17',
//             },
//             {
//                 Date: '19/12/2022',
//                 Location: 'Bendigo RSL Club',
//                 Details: 'Fundraising Christmas Party',
//             },
//             {
//                 Date: '23/01/2023',
//                 Location: 'BASC',
//                 Details: 'Showcase - under 14 - Performers',
//             },
//             {
//                 Date: '17/02/2023',
//                 Location: 'Karina Club - Bendigo',
//                 Details: 'Ms Olga - Birthday Party',
//             },
//         ],
//         []
//     )
//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Date',
//                 accessor: 'Date', // accessor is the "key" in the data
//                 width: 500,
//             },
//             {
//                 Header: 'Location',
//                 accessor: 'Location',
//                 //width: 400,
//             },
//             {
//                 Header: 'Details',
//                 accessor: 'Details', // accessor is the "key" in the data
//                 //width: 400,
//             },
//         ],
//         []
//     )
//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({ columns, data })
//     return (
//         <div>
//             <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
//                 <thead>
//                     {headerGroups.map(headerGroup => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {headerGroup.headers.map(column => (
//                                 <th
//                                     {...column.getHeaderProps()}
//                                     style={{
//                                         borderBottom: 'solid 3px black',
//                                         color: 'black',
//                                         padding: '10px',
//                                         border: 'solid 1px gray',
//                                         textAlign: 'left',
//                                         fontSize: '20px',
//                                         backgroundColor: '#313131',
//                                     }}
//                                 >
//                                     {column.render('Header')}
//                                 </th>
//                             ))}
//                         </tr>
//                     ))}
//                 </thead>
//                 <tbody {...getTableBodyProps()}>
//                     {rows.map(row => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {row.cells.map(cell => {
//                                     return (
//                                         <td
//                                             {...cell.getCellProps()}
//                                             style={{
//                                                 padding: '10px',
//                                                 border: 'solid 1px gray',
//                                                 textAlign: 'left',
//                                                 fontSize: '14px',
//                                                 backgroundColor: '#626262',
//                                                 width: 150
//                                             }}
//                                         >
//                                             {cell.render('Cell')}
//                                         </td>
//                                     )
//                                 })}
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
// export default TournamentsTable;

import React from "react";

function TournamentsTable() {
    return (
        <div>
            <h2>Tournaments</h2>
            <table border="1px" width="100%">
                <tr>
                    <th>Tournament Name</th>
                    <th>Category</th>
                    <th>Dates</th>
                </tr>
                <tr>
                    <td>Champions of tennis</td>
                    <td>Mixed Doubles</td>
                    <td>December 21-22</td>
                </tr>
                <tr>
                    <td>Summer Comp</td>
                    <td>All</td>
                    <td>January</td>
                </tr>
            </table>
        </div>
    );
}

export default TournamentsTable;
