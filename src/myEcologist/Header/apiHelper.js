import axios from "axios";

function fetchWikiExtract(query) {

    const wikiEndpoint = "https://en.wikipedia.org/w/api.php"
    const wikiParams = "?action=query"
        + "&list=search" 
        + "&srsearch=" + query
        + "&format=json"
        + "&origin=*"


    const wikiLink = wikiEndpoint + wikiParams;
    console.log(wikiLink);

    let wikiConfig = {
        timeout: 6500
    };

    async function getJsonResponse(url, config) {
        const res = await axios.get(url, config)
        return res.data;
    }
    return getJsonResponse(wikiLink, wikiConfig).then(result => {
        return result
    }).catch(error => { console.log("an error has occured: " + error) });
    return null;
}

  export default fetchWikiExtract;