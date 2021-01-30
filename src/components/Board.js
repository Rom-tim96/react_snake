import React from 'react'
import Field from './Field'

export default function Board(space){

    return (
        <table className="board">
                {space.map(row => <tr>{row.map(field => <td className={'field ' + field}></td>)}</tr>)} 
        </table>
    )
}