import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Caiif() {
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    return (
        <div style={{ padding: '70px 0 0 65px' }}>
            <iframe src={`https://caiif-committee.vercel.app/sign-in?email=${email}&password=${password}`} style={{ width: "100%", height: "100vh", overflow: "hidden !important", border: "none" }} />;
        </div>
    )
}

export default Caiif;