import React from 'react'

class SignUP extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            PasswordBis:"",
            name:"",
            lastname:""
        }
    }


    updateEmailField = (event) => {
        this.setState({email: event.target.value})
    }
    handleSubmit = (event)=>{
      event.preventDefault()
      console.log(this.state)

    }
    render(){
        return (
            <div>
              <h1>{JSON.stringify(this.state,1,1)}</h1>
              <form onSubmit={this.hendeleSubmit}>
              
                <input type="text" name="email"
                value={this.state.email}
                onChange={this.updateEmailField.bind(this)}/>

                <input type="password" name="password"
                value={this.state.password}
                onChange = {(event)=> this.setState({password: event.target.value})}/> 

                <input type="passwordBis" name="passwordBis"
                value={this.state.passwordBis}
                onChange = {(event)=> this.setState({passwordBis: event.target.value})}/>

                <input type="name" name="name"
                value={this.state.name}
                onChange={(event) => this.setState({name: event.target.value})}/>

                <input type="lastname" name="lastname"
                value={this.state.lastname}
                onChange={(event) => this.setState({lastname: event.target.value})}/>

                <input type="submit" value="Soumettre"/> 

            </form>
            </div>
        )
    }
}

export default SignUP