
 export async function fetchAllSearches(search){
    let url = new URL("http://localhost:9000/geolocations?")
    // construct the list of parameters that will be passed along the URL, as
    // it was extracted from the HTML form
    for  (const [key , value] of Object.entries(search))
    
    {
        // each entry is an array: 
        // entry[0]=key
        // entry[1]=value
        if (value !==""){
       // key="location"
       
            url.searchParams.append(key,value)
            url+="&appid=71bfbd360d75b2708f283ead381fba1d"}
    }
    
   
    return await fetch(url)
}
 export async function fetchSearch(search){
  
   let url = new URL("http://localhost:9000/weather?")
   // construct the list of parameters that will be passed along the URL, as
   // it was extracted from the HTML form
  for  (const [key , value] of Object.entries(search))
   
   {
       // each entry is an array: 
       // entry[0]=key
       // entry[1]=value
       if (value !==""){
      // key="location"
      
           url.searchParams.append(key,value)
           }
   }url+="&appid=71bfbd360d75b2708f283ead381fba1d&units=metric"
   
   
   return await fetch(url)
}
export async  function postDash(search)
{ let url = new URL ('http://localhost:9000/geolocations/Firas')

// for  (const [key , value] of Object.entries(search))
   
//    {
//        // each entry is an array: 
//        // entry[0]=key
//        // entry[1]=value
//        if (value !==""){
//       // key="location"
      
//            url.searchParams.append(key,value)
//            }
//    }


console.log(url)
const data={
        method: "POST",
        headers : {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body :JSON.stringify( {locationNameByUser:search.locationNameByUser,lat:search.lat,lon:search.lon,country:search.country}),
   }
    return await fetch(url , {
        method: "POST",
        headers : {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body :JSON.stringify(search),
   });
  
}



 