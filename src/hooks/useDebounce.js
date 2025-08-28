import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [dedbounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay);

        return () => clearTimeout(handler)
    },[value])

    return dedbounceValue
}

export default useDebounce;