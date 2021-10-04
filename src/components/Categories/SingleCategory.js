import React, {useState} from 'react'
import { Card } from 'react-bootstrap'

export default function SingleCategory(props) {
    return (
        <tr>
            <td>{props.category.Name}</td>
            <td>{props.category.Description}</td>
        </tr>
            
        
    )
}


