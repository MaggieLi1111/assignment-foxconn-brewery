import React from "react";


export default function Brewery(props){
    const {details} = props;

    if(!details){
        return <h3>Fetching your brewery data....</h3>
    }

    return (
        <div className="brewery container">
            <h2>{details.name}</h2>
            <p>Brewery Type: {details.brewery_type}</p>
            <p>Street: {details.street}</p>
            <p>Phone: {details.phone}</p>
            <p>Website: {details.website_url}</p>
        </div>
    )
}