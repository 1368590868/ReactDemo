import React, { useState,createContext, useEffect, useContext } from 'react';
// 使用createContext 传值
const CountContext = createContext()

function List () {
    let count = useContext(CountContext)
    return <h2>list page{count}</h2>
}

function Count1 () {
    const [count, setCount] = useState(0)
    // eques mouted and update   async
    useEffect(() => {
        // console.log(`useEffect => ${count}`);
    })
    return (
        <div>
        <div>You Clicked {count} times</div>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
            {/* 创建一个共享的值 */}
            <CountContext.Provider value={count}>
                <List></List>
            </CountContext.Provider>
        </div>
    )
}
 
export default Count1;