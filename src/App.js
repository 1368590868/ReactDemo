import React, { Component } from 'react'

class App extends Component{
    render () {
        return (
            <ul className='my-list'>
                <li>{false ? 'irlin.cn' : '帅哥林'}</li>
                <li>I Love React</li>
            </ul>
        )
    }
}
export default App