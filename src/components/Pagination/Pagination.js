import styles from "./Pagination.module.css"

const Pagination = ({pages, changePage}) => {
    return(
        <>
            Pagination : {pages}
            <p onClick={() => changePage(1)}>1</p>
            <p onClick={() => changePage(2)}>2</p>
            <p onClick={() => changePage(3)}>3</p>
        </>
    )
}

export default Pagination