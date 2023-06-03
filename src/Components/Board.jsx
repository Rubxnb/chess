import React from 'react'
import '../styles/components/board.scss'
import Tile from './Tile'
import { pieces } from '../chess/board'

export default function Board() {


    let board = []  

    board.push(<Tile key={`${0}${0}`} x={0} y={0} piece={pieces.brook}/>)
    board.push(<Tile key={`${0}${1}`} x={0} y={1} piece={pieces.bknight}/>)
    board.push(<Tile key={`${0}${2}`} x={0} y={2} piece={pieces.bbishop}/>)
    board.push(<Tile key={`${0}${3}`} x={0} y={3} piece={pieces.bqueen}/>)
    board.push(<Tile key={`${0}${4}`} x={0} y={4} piece={pieces.bking}/>)
    board.push(<Tile key={`${0}${5}`} x={0} y={5} piece={pieces.bbishop}/>)
    board.push(<Tile key={`${0}${6}`} x={0} y={6} piece={pieces.bknight}/>)
    board.push(<Tile key={`${0}${7}`} x={0} y={7} piece={pieces.brook}/>)

    for(var i = 1 ; i < 7 ; i++) {
        for(var j = 0; j < 8; j++) {
            if(i === 1)
                board.push(<Tile key={`${i}${j}`} x={i} y={j} piece={pieces.bpawn}/>)
            
            else if(i === 6)
                board.push(<Tile key={`${i}${j}`} x={i} y={j} piece={pieces.wpawn}/>)

            else
            board.push(<Tile key={`${i}${j}`} x={i} y={j} />)
        }
    }

    board.push(<Tile key={`${7}${0}`} x={7} y={0} piece={pieces.wrook}/>)
    board.push(<Tile key={`${7}${1}`} x={7} y={1} piece={pieces.wknight}/>)
    board.push(<Tile key={`${7}${2}`} x={7} y={2} piece={pieces.wbishop}/>)
    board.push(<Tile key={`${7}${3}`} x={7} y={3} piece={pieces.wqueen}/>)
    board.push(<Tile key={`${7}${4}`} x={7} y={4} piece={pieces.wking}/>)
    board.push(<Tile key={`${7}${5}`} x={7} y={5} piece={pieces.wbishop}/>)
    board.push(<Tile key={`${7}${6}`} x={7} y={6} piece={pieces.wknight}/>)
    board.push(<Tile key={`${7}${7}`} x={7} y={7} piece={pieces.wrook}/>)

    return (
        <div className='board'>
            {board}
        </div>
    )
}
