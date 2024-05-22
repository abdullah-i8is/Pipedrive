import React from 'react';
import { useParams } from 'react-router-dom';

function SSTrack() {
    const params = useParams()
    console.log(params);
    return <iframe src={`https://www.sstrack.io/${params?.token}`} style={{ width: "100%", height: "100vh", overflow: "hidden", border: "none", padding: '100px 30px' }} />;
}

export default SSTrack;