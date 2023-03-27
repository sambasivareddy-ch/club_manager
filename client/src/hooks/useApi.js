const useApi = () => {

    const getDataFromApiHandler = async (payload) => {
        const { url } = payload;
        try {
            const responseData = await fetch(url);
            return responseData.json();
        } catch (err) {
            return err;
        }
    }

    const postDataToApiHandler = async (payload) => {
        const { url, data } = payload;
        try {
            const responseData = await fetch(url, {
                method: "POST",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if (responseData.ok) {
                return responseData.json();
            }
            // return responseData.json();
        } catch (err) {
            return err;
        }
    }

    const deleteDataFromApiHandler = async (payload) => {
        const { url, data } = payload;
        try {
            const responseData = await fetch(url, {
                method: "DELETE",
                // mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            return responseData.json();
        } catch (err) {
            return err;
        }
    }

    return {
        getDataFromApiHandler,
        postDataToApiHandler,
        deleteDataFromApiHandler
    }
}

export default useApi;