import React, {useState} from 'react'

export default function SingleTodo(props) {
    return (
        <>
            <tr>
                <td>{props.todo.Action}</td>
                {/* <td>{props.todo.Done}</td> */}
                <input type="checkbox"  checked={props.todo.Done}/>
                <td>{props.todo.CategoryId}</td>
            </tr>
        </>
    )
}




//onChange={() => this.props.callback(this.props.item)
