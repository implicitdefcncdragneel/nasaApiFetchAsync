
async function sendApiRequest(){
  let api ="bDou7rccvIniueaQtg7HVD5DczNB1wx65jh3vjmV"
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api} `);
  console.log(response)
  let data = await response.json()
  console.log(data);
  useApiData(data)
  
}

function useApiData(data){
 document.querySelector("#content")
}
