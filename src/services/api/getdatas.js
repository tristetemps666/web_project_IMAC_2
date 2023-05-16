const get_item_informations= async function(category,number_of_items){
    const url = "https://eldenring.fanapis.com/api/"+ category+"?limit="+number_of_items;
    const response = await fetch(url)
    if(response.status == 200){
        const response_data = await response.json();
        console.log(response_data)
        return response_data.data;
    }
    else{
        throw new Error(response.statusText)
    }
}


export {
    get_item_informations
}
