import React from "react"

class BuggyCounter extends React.Component {
    
        constructor(props){
            super(props)
            this.state = {
                counter : 0
            }   
        }

        handleClick = () => {
            this.setState((prevState) => {
                const updatedCounter = prevState.counter + 1;
                return { counter: updatedCounter };

            }, () => {
                
                if (this.state.counter > 5) {
                    throw new Error('I crashed') 
                }
            });
          }

        render(){
        return(
            <>

            <h3>{this.state.counter}</h3>
            <button onClick={this.handleClick}>+</button>

            </>
        )
        }
}

export default BuggyCounter