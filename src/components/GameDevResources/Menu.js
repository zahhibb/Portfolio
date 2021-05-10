import React from 'react'

function ContentItem({ title, header, paragraph }) {
    return (
        <div></div>
    )
}

const Menu = ({ menuItem }) => {
    return (
        <div className="content-wrapper">
            {
                menuItem.map((item) => {
                    return (
                        <div className={"resource-item"} key={item.id}>
                            <span className={`resource-item-cat ${item.category}`}></span>
                            <h3>{item.title}</h3>
                            <p><b>{item.header}</b></p>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu
