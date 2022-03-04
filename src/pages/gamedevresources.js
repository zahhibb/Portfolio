import React, { useState } from 'react';
// import Items from "../components/GameDevResources/ResourceItems";
// import Button from "../components/GameDevResources/Button";
// import Menu from "../components/GameDevResources/Menu";

// const allCategories = ['All', ...new Set(Items.map(item => item.category))]

const GameDevResources = () => {
    // const [menuItem, setMenuItem] = useState(Items);
    // const [buttons, setButtons] = useState(allCategories);

    // const filter = (button) => {
    //     if (button === 'All') {
    //         setMenuItem(Items);
    //         return;
    //     }
    //     const filteredData = Items.filter(item => item.category === button);
    //     setMenuItem(filteredData)
    // }

    return (
        <div className="page gameDevResource">
            <div className="page-container">
                <div className="page-content">
                    <div className="content-header">
                        <h1>Game Dev. Resources</h1>
                        <h2>[ Terminology, principles, and jargon used in game development and user experience ]</h2>
                    </div>
                    {/* <Button button={buttons} filter={filter} />
                    <Menu menuItem={menuItem} /> */}
                </div>
            </div>
        </div>
    )
}

export default GameDevResources
