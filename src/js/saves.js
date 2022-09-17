export async function fetchAllSsaves(){
    let url = new URL("http://localhost:9000/weather/all/Firas?appid=71bfbd360d75b2708f283ead381fba1d")
    return await fetch(url)
}
export async function fetchAllSaves(){
    let url = new URL("http://localhost:9000/weather/all/Firas?appid=71bfbd360d75b2708f283ead381fba1d")

    return await fetch(url,
    {
        method: 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}