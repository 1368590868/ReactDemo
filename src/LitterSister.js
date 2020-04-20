import React, { Component, Fragment } from 'react'
import './style.css'
import LitterSisterItem from './LitterSisterItem'

class LitterSister extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'irlin.cn',
            list: ['头部按摩','精油推背']
        }
    }

    render () {
        return (
            // 与Vue相同需要一个节点包裹，如果想去掉HTML显示包裹节点
            // 使用Fragment与Vue的模板template差不多
            <Fragment>
                <div>
                    <lable htmlFor = 'irlin' > 加入服务: </lable>
                    <input id='irlin' className='input'
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                />
                     <button onClick={this.addList.bind(this)}>add server</button></div>
                <ul>
                    {this.state.list.map((item, i) => {
                        return (
                            
                            <LitterSisterItem
                                key={i + item}
                                content={item}
                                index={i}
                                deleteItem={this.deleteItem.bind(this)}
                            />
                            
                            // {<li
                            //     key={i + item}
                            //     onClick={this.deleteItem.bind(this, i, item)}
                            //     // 等同于Vue的V-html
                            //     dangerouslySetInnerHTML={{ __html: item }}
                            // >
                            // </li>}
                        )
                    })}
                </ul>
            </Fragment>
        )
    }
    inputChange (e) {
        console.log(e.target.value);
        this.setState({inputValue : e.target.value})
    }
    addList () {
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    deleteItem (i,item) {
        console.log(i + item);
        let list = this.state.list
        list.splice(i, 1)
        this.setState({
            list : list
        })
    }
}
export default LitterSister 