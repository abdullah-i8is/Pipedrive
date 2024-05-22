import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Verdebooks() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const password = searchParams.get('password');
    return <iframe src={`https://verde-books.vercel.app/#/landing?email=${email}&password=${password}`} style={{ width: "100%", height: "100vh", overflow: "hidden", border: "none", padding:'100px 30px' }} />;
}

export default Verdebooks;