import { Component } from "react";

const Login = () => <h3>LOGIN</h3>
const Logout = () => <h3>LOGOUT</h3>

export default class RenderCondicional extends Component{
    constructor(){
        super()
        this.state = {
            session: true
        }
    }
    render(){
        return this.state.session ? <Login/> : <Logout/>
    }
}