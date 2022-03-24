import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''     /* aplica ou não a classe */
    classes += props.double ? 'double' : ''           /* de acordo com as propriedades */ 
    classes += props.triple ? 'triple' : ''           /* que recebe */

    return (
        <button 
            onClick={e => props.click && props.click(props.label)} /* conteudo do elemento será passado para a função click*/ 
            className={classes}>
            {props.label}
        </button>
    )
}