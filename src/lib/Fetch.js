import { useState, useEffect } from 'react';

const Fetch = () => {
    const [fetchAPI, setFetchAPI] = useState(() => {});
    const [submitAPI, setSubmitAPI] = useState(() => {});

    useEffect(() => {
        fetch("./Data.js")
          .then(res => res.text())
          .then(text => {
            const script = document.createElement("script");
            script.text = text;
            document.body.appendChild(script);

            const { fetchAPI, submitAPI } = window;
            setFetchAPI(fetchAPI);
            setSubmitAPI(submitAPI)
          });
    }, []);

    return { fetchAPI, submitAPI };
};

export default Fetch;