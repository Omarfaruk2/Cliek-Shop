// import { useState } from "react"

import { useEffect, useState } from "react"

const useReviews = () => {
    const [customars, setCustomars] = useState([])
    useEffect(() => {
        fetch("Reviews.json")
            .then(res => res.json())
            .then(data => setCustomars(data))
    }, [])
    return [customars, setCustomars]
}
export default useReviews