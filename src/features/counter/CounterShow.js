import {useSelector} from "react-redux";

const CounterShow = () => {

    const count = useSelector((state) => state.counter.value)

    return(
        <div>Show counter: {count}</div>
    )
}
export default CounterShow