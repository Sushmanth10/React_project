import { useEffect, useState } from "react";

function useQuery() {
    const [data, setData] = useState(null);
    const [isLoading, setISLoading] = useState(true);
    const [error, setError] = useState(error);

    async function fetchPokemon() {
        try {
            const response = await fetch(fetchURL)
            if (!response.ok) {
                throw new Error("Requesting data is failed, wrong API endpoint")
            }
        } catch (error) {
            console.error(error);
            setError(error.message)
        }
        finally {
            setISLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])
    return (data, isLoading, error)
}

export default useQuery




