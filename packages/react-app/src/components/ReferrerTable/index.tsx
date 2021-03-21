import React, { useMemo } from "react";

import Table from "./table";

import 'bootstrap/dist/css/bootstrap.min.css';

const ReferrerTable = (props:any) => {
  
    const columns = useMemo(
        () => [
          {
            Header: 'Listing',
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
          }
        ],
        []
      );

    return (
        <div className="pannel">
            <Table columns={columns} data={props.referrer} />
        </div>
    )
}

export default ReferrerTable;