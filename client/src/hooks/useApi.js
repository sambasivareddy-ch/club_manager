import {useState} from 'react';

const useApi = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getDataFromApiHandler = async (payload) => {
        const { url } = payload;
        console.log(payload)
        setIsLoading(true);
        try {
            const responseData = await fetch(url);
            setIsLoading(false);
            return responseData.json();
        } catch (err) {
            setIsLoading(false);
            return err;
        }
    }

    const postDataToApiHandler = async (payload) => {
        const { url, data } = payload;
        console.log(url, data)
        setIsLoading(true);
        try {
            const responseData = await fetch(url, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setIsLoading(false);
            const dat = responseData.json();
            return dat;
            // return responseData.json();
        } catch (err) {
            setIsLoading(false);
            return err;
        }
    }

    const deleteDataFromApiHandler = async (payload) => {
        const { url, data } = payload;
        setIsLoading(true);
        try {
            const responseData = await fetch(url, {
                method: "DELETE",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setIsLoading(false);
            return responseData.json();
        } catch (err) {
            setIsLoading(false);
            return err;
        }
    }

    return {
        isLoading,
        getDataFromApiHandler,
        postDataToApiHandler,
        deleteDataFromApiHandler
    }
}

export default useApi;