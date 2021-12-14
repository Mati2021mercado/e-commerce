import React, {Component} from 'react';

export default class Estado extends Component{
    constructor(){
        super()
        this.state = {
            contador: 0
        };
        setInterval( ()=>{
            this.setState({
                contador: this.state.contador +1
            })
        },1000)
    
    }
    render(){
        return(
            <p>{this.state.contador}</p>
        )
    }
}