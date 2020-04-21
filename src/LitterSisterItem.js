import React, { Component } from 'react';
// use PropTypes util
import propTypes from 'prop-types'
class LitterSisterItem extends Component {
    constructor(props) {
        super(props)
        // 改变方法this指向
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件第一次存在于dom中，函数不会执行
    // 如果已经存在于dom中，函数会被执行
    componentWillReceiveProps () {
        console.log('child - componentWllReceiveProps');
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务
                {this.props.content}
            </li>
         );
    }
// 使用父组件方法
    handleClick () {
        this.props.deleteItem(this.props.index)
    }
}
// 父组件传值，子组件校验
LitterSisterItem.propTypes = {
    avname:propTypes.string.isRequired,
    content: propTypes.string,
    index: propTypes.number,
    deleteItem:propTypes.func
}
// 为校验添加默认值
LitterSisterItem.defaultProps = {
    avname:'大姐姐'
}
 
export default LitterSisterItem;