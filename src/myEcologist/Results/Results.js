import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import * as client from "../Header/client";
import { useEffect, useState } from 'react';

function Results() {

    const { query } = useParams();

    const [data, setData] = useState([]);

    const search = async (query) => {
        const qList = await client.search(query);
        setData(qList)
        console.log("output" + data)
    }

    useEffect(() => { search(query); }, []);

    return (
        <div className='m-3'>
            <h3>Search Results</h3>
            {data.map((hit => {
                return (
                    <div dangerouslySetInnerHTML={{__html: hit.snippet}}></div>
                )
            }))}
        </div>
    );
}

export default Results;