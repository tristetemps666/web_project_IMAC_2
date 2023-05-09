const get_item_informations= async function(){
    const url = "https://eldenring.fanapis.com/api/items?limit=20";
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
