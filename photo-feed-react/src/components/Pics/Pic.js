import React from 'react';


const Pic = ({pic}) => {
    return (
        <p><img alt="picInList" src={pic.url}/></p>
    )
} 

export default Pic