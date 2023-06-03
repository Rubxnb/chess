import React from 'react'
import '../styles/components/tile.scss'

export default function Tile({x, y, piece }) {

    const tileColor = (x + y) % 2 !== 0 ? 'white' : 'black'

  return (
    <div className={`tile`} id={tileColor}>
     
        {
            piece && <img className='piece' alt={piece} src={`./src/assets/${piece}`}/>
        }
    </div>
  )
}
