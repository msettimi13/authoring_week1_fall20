async function fetchData(datasource) {
    let resource = await fetch(datasource).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger will robinson! here there be monsters! Error ${response.status}`);
        }

        return response; 

    })

//if we get success, then we can return back our resource afer we parse it into plain js
let dataset = await resource.json();

return dataset;
}

export { fetchData };