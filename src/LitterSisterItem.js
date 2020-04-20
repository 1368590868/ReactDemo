import React, { Component } from 'react';

class LitterSisterItem extends Component {
    constructor(props) {
        super(props)
        // 改变方法this指向
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.content}
            </li>
         );
    }
// 使用父组件方法
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
}
 
export default LitterSisterItem;