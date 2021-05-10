import React from 'react'

function Button({ button, filter }) {
    return (
        <div className="button-categories">
            {button.map((cat, i) => {
                return <button type="button" className={(`${cat}`)} onClick={() => filter(cat)} key={i}>{cat}</button>
            })}
        </div>
    )
}

export default Button
