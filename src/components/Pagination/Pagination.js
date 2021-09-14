import React from "react";

import styles from "./Pagination.module.css"

const createArray = (length) => {
    return Array.from({length: length}).map((value, index) => index + 1)
}

const Pagination = ({maxPage, changePage}) => {

    const [currentPage, setCurrentPage] = React.useState(1)
    const [pages, setPages] = React.useState([])

    const handleChangePage = (number) => () => {
        if (number < 1 || number > maxPage) return
        setCurrentPage(number)
        changePage(number)
    }

    React.useEffect(() => {
        if (maxPage < 5) {
            setPages(createArray(maxPage))
        } else if (currentPage === 1) {
            setPages([1, 2, maxPage])
        } else if (currentPage === maxPage) {
            setPages([currentPage - 1, currentPage])
        } else if (currentPage > maxPage - 3) {
            setPages([currentPage - 1, currentPage, currentPage + 1])
        } else (
            setPages([currentPage - 1, currentPage, currentPage + 1, maxPage])
        )
    }, [maxPage, currentPage])

    return (
        <div className={styles.container}>
            {/*Pagination : {maxPages}*/}
            <div onClick={handleChangePage(currentPage - 1)} className={styles.item}>Prev</div>
            {pages.map(elem => (
                <div key={elem} className={currentPage === elem ? styles.active : styles.item}
                     onClick={handleChangePage(elem)}>{elem}</div>
            ))}
            <div onClick={handleChangePage(currentPage + 1)} className={styles.item}>Next</div>
        </div>
    )
}

export default Pagination