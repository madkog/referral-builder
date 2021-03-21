import React, { useState, useEffect, useMemo } from "react";

import { apiGetReferrers } from "../../services/referrerService";

import Table from "./table";

import { Referrer } from "../../types/Referrer";
import { ReferrerTableData } from "../../types/ReferrerTable";

import 'bootstrap/dist/css/bootstrap.min.css';

const ReferrerTable = () => {
  
    const data: any[] = [];
    const [referrer, setReferrer] = useState(
        data
    ); 

    useEffect(() => {
        (async () => {
            const referrerData = apiGetReferrers();
            referrerData
            .then(function(result) {
                result.forEach((referrer : Referrer) => {
                        const givenName = referrer.givenName;
                        const surname = referrer.surname;
                        const email = referrer.email;
                        const phone = referrer.phone;
                        const actions = "";
                        data.push({
                            "givenName": givenName, 
                            "surname": surname, 
                            "email": email, 
                            "phone": phone,
                            "actions": actions
                        });
                });

                setReferrer(result);
            })
        
        })();
    }, []);
 
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: 'Listing',
            // First group columns
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
            <Table columns={columns} data={referrer} />
        </div>
    )
}

export default ReferrerTable;