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
                    Header: 'GIVEN NAME',
                    accessor: 'givenName',
                },
                {
                    Header: 'SURNAME',
                    accessor: 'surname',
                },
                {
                    Header: 'EMAIL',
                    accessor: 'email',
                },
                {
                    Header: 'PHONE',
                    accessor: 'phone',
                },
                {
                    Header: 'ACTIONS',
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