import React from "react";

import { useTable } from 'react-table';

import 'bootstrap/dist/css/bootstrap.min.css';

function ReferrerTable() {

    // const data = React.useMemo(
    //     () => [
    //       {
    //         col1: 'nick',
    //         col2: 'Madd',
    //         col3: 'nick@nci.com',
    //         col4: '00000',
    //         col5: 'blah',
    //       },
    //       {
    //         col1: 'nick2',
    //         col2: 'Madd',
    //         col3: 'nick@nci.com',
    //         col4: '00000',
    //         col5: 'blah',
    //       },
    //       {
    //         col1: 'nick3',
    //         col2: 'Madd',
    //         col3: 'nick@nci.com',
    //         col4: '00000',
    //         col5: 'blah',
    //       },
    //     ],
    //     []
    // )

    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'Given Name',
    //             accessor: 'givenName',
    //         },
    //         {
    //             Header: 'Surname',
    //             accessor: 'surname',
    //         },
    //         {
    //             Header: 'Email',
    //             accessor: 'email',
    //         },
    //         {
    //             Header: 'Phone',
    //             accessor: 'phone',
    //         },
    //         {
    //             Header: 'Actions',
    //             accessor: 'actions',
    //         },
    //     ],
    //     []
    // )

    const data = [
        {
            "giventName": "horn-od926",
            "surname": "selection-gsykp",
            "email": 22,
            "phone": 20,
            "actions": 39,
        },
    ]

    const columns = [
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Given Name',
                    accessor: 'givenName',
                },
                {
                    Header: 'Surname',
                    accessor: 'surname',
                },
                {
                    Header: 'Email',
                    accessor: 'email',
                },
                {
                    Header: 'Phone',
                    accessor: 'phone',
                },
                {
                    Header: 'Actions',
                    accessor: 'actions',
                },
            ],
        },
    ];

    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

    return (
         // apply the table props
         <table className="table" {...getTableProps()}>
         <thead>
             {headerGroups.map(headerGroup => (
                 <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map(column => (
                         <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                     ))}
                 </tr>
             ))}
         </thead>
         <tbody {...getTableBodyProps()}>
             {rows.map((row, i) => {
                 prepareRow(row)
                 return (
                     <tr {...row.getRowProps()}>
                         {row.cells.map(cell => {
                             return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                         })}
                     </tr>
                 )
             })}
         </tbody>
     </table>
    );
}

export default ReferrerTable;