import React from "react";

class ChangeSizeTextClass extends React.Component {

    refComp = React.createRef()

    state = {
        firstSize: ""
    }

    componentDidMount() {
        this.setState(() => {
            if (this.refComp.current.clientY === 300) {
                this.firstSize = 30
            } else if (this.refComp.current.clientY === 200) {
                this.firstSize = 20
            } else if (this.refComp.current.clientY === 100) {
                this.firstSize = 10
            }
            console.log(this.state)
        })
    }
    //Почему значение свойства firstSize не ререндерится?
    render() {
        return (
            <>
                <div>
                    <p ref={this.refComp}
                       style={{height: `${300}px`, fontSize: `${this.firstSize}`}}>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui
                        dolorem ipsum qui dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        tempora
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem
                        vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                        illum
                        qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                </div>
            </>
        )
    }
}

export default ChangeSizeTextClass