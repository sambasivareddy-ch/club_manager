import {useState} from 'react';

const useApi = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getDataFromApi = async (payload) => {
        const { url } = payload;
        setIsLoading(true);
        try {
            const responseData = await fetch(url);
            setResponse(responseData.json());
        } catch (err) {
            setError(err);
        }
        setIsLoading(false);
    }

    const postDataToApi = async (payload) => {
        const { url, data } = payload;
        setIsLoading(true);
        try {
            const responseData = await fetch(url, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setResponse(responseData.json());
        } catch (err) {
            setError(err)
        }
    }

    const deleteDataFromApi = async (payload) => {
        const { url, data } = payload;
        setIsLoading(true);
        try {
            const responseData = await fetch(url, {
                method: "DELETE",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setResponse(responseData.json());
        } catch (err) {
            setError(err)
        }
    }

    return {
        response,
        error,
        isLoading,
        getDataFromApi,
        postDataToApi,
        deleteDataFromApi
    }
}

export default useApi;