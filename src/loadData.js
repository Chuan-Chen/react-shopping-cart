const url = "https://api.escuelajs.co/api/v1/products";

export default async function loadData(){
    try{
        const data = await fetch(url);
        return await data.json();
    }catch(error){
        return error;
    }
}