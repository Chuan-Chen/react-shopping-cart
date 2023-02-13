const url = "https://api.escuelajs.co/api/v1/products";

export default function loadData(){
    const data = fetch(url)
    return new Promise((resolve, reject) => {
        data
        .then(res => res.json())
        .then(result => {
            resolve(result);
        }, error => {
            reject(error);
        })
    })
}