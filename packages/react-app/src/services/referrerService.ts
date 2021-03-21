import axios from "axios";

import { Referrer } from "../types/Referrer";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'Cache-Control': 'no-cache','Access-Control-Allow-Origin': '*'}
 });

export async function apiCreateReferrer(data: Referrer) {
    await instance.post('/referrals', data)
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export async function apiGetReferrers() {
    let referrers: Referrer[] = [];
    
    await instance.get('/referrals')
    .then(function (response) {  
      // handle success

      console.log(response.data);

     response.data.forEach((referrer : Referrer)=> {
        referrers.push(referrer);
     });

     return referrers;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
  });

  return referrers;
}
