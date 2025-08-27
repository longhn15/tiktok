import { useEffect, useState } from "react";

function useDebounce(value, delay) {
    const [dedbounceValue, setDedbounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDedbounceValue(value)
        }, delay);

        return () => clearTimeout(handler)
    },[value])

    return dedbounceValue
}

export default useDebounce;