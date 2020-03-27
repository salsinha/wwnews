import { useState, useEffect } from "react";

const useNews = url => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError();
            const data = await fetch(url)
                .then(response => response.json())
                .catch(err => {
                    setError(err);
                });
            setNews(data.articles);
            setLoading(false);
        }
        fetchData();
    }, [url]);
    return { news, error, loading };
};

export default useNews;
