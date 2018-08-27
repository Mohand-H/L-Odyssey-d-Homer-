import React from 'react'

class SignUP extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:""
        }
    }
    updateEmailField = (event) => {
        this.setState({email: event.target.value})
    }
    render(){
        return (
            <div>
                <h1>{JSON.stringify(this.state,1,1)}</h1>
                <input type="email" name="email"
                value={this.state.email}
                onChange={this.updateEmailField.bind(this)}/> 
            </div>
        )
    }
}

export default SignUP