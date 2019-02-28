import React from 'react';


const Pic = ({pic}) => {
    return (
        <>
            <p><img alt="picInList" src={pic.url}/></p>
            <p>By: {pic.artist.name}</p>
        </>
    )
} 

export default Pic