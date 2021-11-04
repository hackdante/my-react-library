import { useState, useEffect } from 'react'

export const useFetch = (goToURL) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(goToURL)
            .then(resp => resp.json())
            .then(data => {
                setstate({
                    loading: false,
                    error: null,
                    data,
                })
            });

    }, [goToURL]);

    return state;

}
