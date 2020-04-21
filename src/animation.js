import React, { Component } from 'react';

class animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true,
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow?'show':'hide'}>一段小动画</div>
                <div><button onClick={this.toToggole}>切换</button></div>
            </div>
         );
    }
    toToggole () {
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default animation;