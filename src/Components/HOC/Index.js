import React, { Component } from 'react'
import StarWars from './StarWars'
// import Box from './Box'
// import Circle from './Circle'

export default class Index extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            display: 'sw'
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(display) {
        this.setState({display})
    }

    render() {
        let {display} = this.state
        return (
            <div>
                <div className='btns'>
                    <h1>Higher Order Components</h1>
              
                </div>

                {display === 'sw' && <StarWars/>}

                {display === 'hs' && <>

                 </>}
    
            </div>
        )
    }
}