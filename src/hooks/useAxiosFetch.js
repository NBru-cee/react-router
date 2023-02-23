import axios from "axios";
import { useState, useEffect } from "react";
const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token,
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 1000);
            }
        };
        fetchData(dataUrl);
        const cleanUp = () => {
            console.log(" clean up function");
            isMounted = false;
            source.cancel();
        };
        return cleanUp;
    }, [dataUrl]);
    return { data, fetchError, isLoading };
};
export default useAxiosFetch;
