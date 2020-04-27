import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Index () {
    useEffect(() => {
        console.log(`进入了Index页面`);
        return () => {
            console.log(`out to Index page`);
        }
    }, [] //使用第二个参数来控制 解绑 ，不会重复执行
    )
    return <h2>irlin.cn</h2>
}
function List () {
    useEffect(() => {
        console.log(`进入了List页面`);
        return () => {
            console.log(`out to List`);
        }
    })
    return <h2>list page</h2>
}

function Count () {
    const [count, setCount] = useState(0)
    // eques mouted and update   async
    useEffect(() => {
        // console.log(`useEffect => ${count}`);
    })
    return (
        <div>
        <div>You Clicked {count} times</div>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            <Router>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/list'>list   </Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list'  component={List} />
            </Router>
        </div>
    )
}
 
export default Count;