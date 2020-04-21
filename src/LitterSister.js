import React, { Component, Fragment } from 'react'
import './style.css'
import LitterSisterItem from './LitterSisterItem'
import axios from 'axios'
import Animation from './animation'

class LitterSister extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['头部按摩','精油推背']
        }
    }
    // 生命周期函数
    componentWillMount () {
        console.log('1-componentWillMount  - beforeMounted' );
    }
    componentDidMount () {
        axios.get('https://irlin.cn/api/article')
            .then((res) => {
                this.setState({
                inputValue : res.data.data[0].title
            }) })
            .catch(error => console.log(error))
        
    }
    
    render () {
        console.log('3-组件挂载中');
        return (
            // 与Vue相同需要一个节点包裹，如果想去掉HTML显示包裹节点
            // 使用Fragment与Vue的模板template差不多
            <Fragment>
                <div>
                    <input id='irlin' className='input'
                    value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref = {(inputValue) => {this.input = inputValue}}
                />
                     <button onClick={this.addList.bind(this)}>add server</button></div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.state.list.map((item, i) => {
                        return (
                            
                            <LitterSisterItem
                                // avname='波小姐'
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
                < Animation />
            </Fragment>
        )
    }
    inputChange (e) {
        this.setState({
            // inputValue: e.target.value
            inputValue:this.input.value
        })
    }
    addList () {
        // setState 生成的虚拟dom是异步的，可以在后面添加方法，等待执行
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        }, () => {
        console.log(this.ul.querySelectorAll('li').length);
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