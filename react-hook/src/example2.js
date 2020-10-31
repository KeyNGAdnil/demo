import React, { useState } from 'react';

function Example2(){
    const [ sex , setSex ] = useState('男')
    const [ age , setAge ] = useState(18)
    const [ work , setWork ] = useState('前端程序员')
    return (
        <div>
            <p>性别:{sex}</p>
            <p>JSPang 今年:{age}岁</p>
            <p>工作是:{work}</p>

        </div>
    )
}
export default Example2;