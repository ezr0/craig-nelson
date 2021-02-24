import React, { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(data => setData(data.message));
    }, []);

    return (
        <h1>{!data ? "Loading...." : data}</h1>
    )
}

export default Home;