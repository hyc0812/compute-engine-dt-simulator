var axios = require('axios');


async function post() {
    var data = JSON.stringify({
    "dtname": "plant_002",
    "dttemperature": 29,
    "dttemperatureAlert": false
    });

    var config = {
    method: 'post',
    url: 'http://34.28.249.145:3001/dt/',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(" creating connection ...  ");
    })
    .catch(function (error) {
    console.log(error);
    });

}


async function patch() {
    var data = JSON.stringify({
    "dtname": "plant_002",
    "dttemperature": Math.round((26 + 3*Math.random()) * 1000) / 1000,
    "dttemperatureAlert": false
    });

    var config = {
    method: 'patch',
    url: 'http://34.28.249.145:3001/dt/1',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log("plant_002 :  " + JSON.stringify(response.data.dttemperature) + " °C .");
    })
    .catch(function (error) {
    console.log(error);
    });

    setTimeout(patch, 3000);
}

// post()

patch()


// const axios = require('axios');

// async function get() {
// const response = await axios.get('https://fleetmanageradt.api.wcus.digitaltwins.azure.net/digitaltwins/HumiSensor1', {
//     params: {
//         'api-version': '2020-10-31'
//     },
//     headers: {
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwYjA3ZjQyOS05ZjRiLTQ3MTQtOTM5Mi1jYzVlOGU4MGM4YjAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8yNGFiNmNkMC00ODdlLTQ3MjItOWJjMy1kYTljNDIzMjc3NmMvIiwiaWF0IjoxNjY3NTc2MzYwLCJuYmYiOjE2Njc1NzYzNjAsImV4cCI6MTY2NzU4MjAzOSwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQWdDME42UXoyQ0JiekRDODlwUnhwWjlkeGZNOVRyK1IzdlBNeUI2ZDhOSDErTjB0Q3l6cDNEWFp3eDd6eXlCT3dMN28xRXFadHllR2Y1WTJ2dmtlbTdrUFFTVzBWRW42Y1JsdUZwbHp3ZmRvPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiJiNjc3YzI5MC1jZjRiLTRhOGUtYTYwZS05MWJhNjUwYTRhYmUiLCJhcHBpZGFjciI6IjIiLCJmYW1pbHlfbmFtZSI6IkhlIiwiZ2l2ZW5fbmFtZSI6IllvbmdjaGFuZyIsImlwYWRkciI6IjEyOC4yMzMuMTAuMzMiLCJuYW1lIjoiSGUsIFlvbmdjaGFuZyIsIm9pZCI6IjllOGQ5ZGY0LWYyMTMtNDljZS04OTlkLTc1MjRiZDdiNDE4OSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xMDYwMjg0Mjk4LTQzNjM3NDA2OS0xNzA4NTM3NzY4LTM2MDc2NiIsInB1aWQiOiIxMDAzMjAwMDM2OUFGREI3IiwicmgiOiIwLkFYVUEwR3lySkg1SUlrZWJ3OXFjUWpKM2JDbjBCd3RMbnhSSGs1TE1YbzZBeUxCMUFBcy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJxc2drMTNCRUtBZGhoc2VoWW9Yc2w5dmpHZ0huYWNmWUdPb0x0WVFsamk0IiwidGlkIjoiMjRhYjZjZDAtNDg3ZS00NzIyLTliYzMtZGE5YzQyMzI3NzZjIiwidW5pcXVlX25hbWUiOiJ5b2g1MzRAdXNhc2suY2EiLCJ1cG4iOiJ5b2g1MzRAdXNhc2suY2EiLCJ1dGkiOiJGQ0RBbTdmeWVrMlhQOEctRWY0cEFBIiwidmVyIjoiMS4wIn0.oyThDWPKhXBaC3Dbxfrla3sCklg8xawmqkbqbYoMMCpnsPeF9HKqvsgbu2UTzxp22ph5fhHgrGft83Hxit2BMlTO6zswLWnx-L8tmnd6z_xbB9A1D9XmurogzYPBEv0Rvez3-pKejWkwznF_0U1R-YoH7F6zBym9Rl8w4Qp4L7UYep76hlFR0qmSEdDgIbTqPecDoLZWu0ZvMV12h_QDxQSRWu0Z0hbKGY_m7HlHw_4U3171pMUOSVHV9Mc4w_AV51Mt7rOO8Hc85ND6JOqd1KJt58TktogzPGwrD9_WNjUe_Zhvwc0Xdjq-p8pbhiE6b1NMWMNYwNhGLgBXrNNNIQ'
//     }
// });
// console.log({ Humi_sensor_1: Math.round((response.data.humidity) * 1000) / 1000}, {Alert: response.data.humidityAlert});

// setTimeout(get, 3500);
// }

// get()

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'http://34.28.249.145:3001/dt',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
// };

// axios(config)
// .then(function (response) {
// //   console.log(JSON.stringify(response.data.dtid));
//     console.log(response.data.dttemperature);
// })
// .catch(function (error) {
//   console.log(error);
// });
