import React, { Component } from 'react'

class Formulaire extends Component {
    
    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props

        const message = {
            pseudo,
            message: this.state.message
        }
        
       
        addMessage(message)

        //Reset
        this.setState({ message: '', length })
    }

    // Lorsqu'on envoie le message, la function createMessage est appelée
    handleSubmit = e => {
        e.preventDefault();
        this.createMessage();
    }

    handleChange = e => {
        const message = e.currentTarget.value;
        const length = this.props.length - message.length 
        
       

        this.setState({ message, length })
    }

    handleKeyUp = event => { // touche Enter
         if (event.key === "Enter") {
             this.createMessage()
         }
    }

    render() {
        return (
            <form
                className='form'
                onSubmit={this.handleSubmit}
                >
                
                <textarea
                    required
                    maxLength={this.props.length}
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                />
                <div className="info">
                    {this.state.length}
                </div>
                <button
                    type='submit'>
                    Envoyer
                </button>

            </form>
        )
    }
}

export default Formulaire