export async function my_request(endpoint:string) {

    // Get Data
    const response =  await fetch(endpoint);
    if(!response.ok){
        throw new Error(`Can't access Endpoint \"${endpoint}\"`);
    }
    return response.json();
}