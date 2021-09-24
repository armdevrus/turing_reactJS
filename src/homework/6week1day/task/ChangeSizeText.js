import React from "react";

const ChangeSizeText = () => {

    const refComp = React.useRef(null)

    const [firstSize, setFirstSize] = React.useState(0)

    React.useEffect(() => {
        if (refComp.current.clientHeight === 100) {
            setFirstSize(10)
        } else if (refComp.current.clientHeight === 200) {
            setFirstSize(20)
        } else if (refComp.current.clientHeight === 300) {
            setFirstSize(30)
        }
    }, [])

    return (
        <div>
            <div>
                <p ref={refComp}
                   style={{height: `${300}px`, fontSize: `${firstSize}px`}}>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum qui dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora
                    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                    nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                    autem
                    vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                    illum
                    qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
            {/*<div>*/}
            {/*    <p ref={refComp}*/}
            {/*       style={{height: `${200}px`, fontSize: `${firstSize}px`}}> "Sed ut perspiciatis unde omnis iste natus error*/}
            {/*        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore*/}
            {/*        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia*/}
            {/*        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione*/}
            {/*        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,*/}
            {/*        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam*/}
            {/*        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit*/}
            {/*        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea*/}
            {/*        voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas*/}
            {/*        nulla pariatur?"*/}

            {/*    </p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p ref={refComp}*/}
            {/*       style={{height: `${300}px`, fontSize: `${firstSize}px`}}> "Sed ut perspiciatis unde omnis iste natus error*/}
            {/*        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore*/}
            {/*        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia*/}
            {/*        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione*/}
            {/*        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,*/}
            {/*        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam*/}
            {/*        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit*/}
            {/*        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea*/}
            {/*        voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas*/}
            {/*        nulla pariatur?"*/}

            {/*    </p>*/}
            {/*</div>*/}
        </div>
    )
}

export default ChangeSizeText