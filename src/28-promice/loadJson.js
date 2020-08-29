'use strict';

async function loadJson(url) {
    const respons = await fetch(url);
    if (respons.status == 200) {
        const loaded = await respons.json();
        return loaded;
    } else {
        await Promise.reject(new Error(respons.status));
    }

}

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404