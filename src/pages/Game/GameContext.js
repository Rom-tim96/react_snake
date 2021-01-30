//import {Space} from './gameModel.js'
import React, { useContext, useState } from 'react'

const GameContext = React.createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {

    const [board, setBoard] = useState(new Space())

    //let score = 0
    // const mouse = getRndPos(board)

    // const snake = {
    //     head : getRndPos(board),
    //     body: null
    // }

    // snake.body = [{}, {}].map((pos,i) => {
    //     pos.x = snake.head.x + ++i;
    //     pos.y = snake.head.y + ++i;
    //     return pos;
    // })

    return (
        <GameContext.Provider value={board}>
            {children}
        </GameContext.Provider>
    )
}
