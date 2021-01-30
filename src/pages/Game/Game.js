import React, {useState, useEffect} from 'react'
//import {Space} from './gameModel.js'
//import {useGame} from './GameContext'

import "./Game.css"

export default class Game extends React.Component {
    
    constructor(props){
        super(props)
        this.snake = {
            body : [{x:1, y:1}],
                move(){
                    this.body[0].x = (this.body[0].x + 1)%10
                }
        }
        this.state = {
            board : new Array(10).fill('').map(row => new Array(10).fill('field')),
            score: 0
        }
        this.state.board[this.snake.body[0].x][this.snake.body[0].y] = 'snakeHead'
    }

    componentDidMount(){
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){        
        let nextBoard = new Array(10).fill('').map(row => new Array(10).fill('field'))
        this.snake.move()
        nextBoard[this.snake.body[0].x][this.snake.body[0].y] = 'snakeHead'
        // console.log(this.state.board[this.snake.body[0].x][this.snake.body[0].y])
        // console.log(this.state.board)
        this.setState((prev)=>({
            board: nextBoard,
            score: prev.score + 1
        }))
    }

    render(){
        return (
            <div className="gameContainer">
                <div className="head">Score:{this.state.score}</div>
                {
                    this.state.board.map(row => {
                        return(
                        <tr>
                            {
                                row.map((cell)=><td className={cell}></td>)
                            }
                        </tr>)
                    })
                }
            </div>
        )
    }
}
// export default function Game(){

//     const board = new Array(10).fill('').map(row => new Array(10).fill('field'))
//     let [score, setScore] = useState(0)

//     useEffect(() => {

//         const snake = {
            
//         }
//         const interval = setInterval(() => {

//             // let snake = {
//             //     body : [

//             //     ]
//             // }
//             setScore(score => ++score)
//         }, 1000)
//         console.log(1)
//         return ()=> clearInterval(interval)
//     }, [])



//     console.log(board);

//     return (
//             <div className="gameContainer">
//                 <div className="head">Score:{score}</div>
                
//             </div>
//     )
// }