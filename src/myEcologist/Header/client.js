import  fetchWikiExtract from "./apiHelper";

export const search = async(query) => {
    const response = await fetchWikiExtract(query);
    console.log(response);
    return response.query.search
} 
