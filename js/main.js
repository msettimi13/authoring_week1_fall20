import { fetchData } from "./modules/DataMiner.js";

(() => {

        // make an AJAX request using the fetch API
    //     async function fetchData(datasource) {
    //         let resource = await fetch(datasource).then(response => {
    //             if (response.status !== 200) {
    //                 throw new Error(`Danger will robinson! here there be monsters! Error $(response.status)`);
    //             }

    //             return response; 

    //         })

    //     //if we get success, then we can return back our resource afer we parse it into plain js
    //     let dataset = await resource.json();

    //     return dataset;
    // }

    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        debugger;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].avatar}.jpg`;
            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }

        console.log(data);
    }

    fetchData('./DataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
    fetchData('./AnotherDataSet.json').then(data => handleDataSet(data)).catch(err => console.log(err));
})();