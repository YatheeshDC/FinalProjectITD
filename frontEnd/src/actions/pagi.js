import { useState } from 'react';

function usePagination(totalItems, itemsPerPage) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index + itemsPerPage < totalItems) {
            setIndex(prevIndex => prevIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - itemsPerPage);
        }
    };

    return { index, handleNext, handlePrev };
}

export default usePagination;