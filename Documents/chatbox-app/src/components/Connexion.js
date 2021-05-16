import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault();
        // En validant le formulaire, goToChat renvoie true
        this.setState({ goToChat: true })
    }

    render() {
        // Si goToChat est true redirection de la page
        if(this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} ></Redirect>
        }


        return (
            <div className='connexionBox'>
                <form  className="connexion" onSubmit={this.handleSubmit} >
                    <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    placeholder='Entre Ton Pseudo'
                    type="text"
                    required
                    />
                    <button type="submit"> Connexion </button>
                </form>
                
            </div>
        )
    }
}

export default Connexion
