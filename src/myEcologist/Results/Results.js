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
    }

    useEffect(() => { search(query); }, [query]);

    return (
        data && 
        <div className='m-3'>
            <h3>{data.title}</h3>
            <div dangerouslySetInnerHTML={{__html: data.extract}}></div>
        </div>
    );
}

export default Results;