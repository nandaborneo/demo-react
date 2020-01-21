import React, { Component } from 'react';


class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        };
    }

   componentDidUpdate(props,state){
       if(this.state.count > 10 && !this.state.overTen) {
           this.setState({
               overTen: true
           });
        }
        
        console.log("update from ",state, "to",this.state);
   }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        let { count } = this.state;

        return (
            <div>
                <h1>Clicked,{count}</h1>
                <button onClick={() => this.handleClick()}>Click!</button>
            </div>
        );
    }
}

export default Application;