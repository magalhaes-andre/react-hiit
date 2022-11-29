import React from 'react';

//Function Component --> After React 18, Function components are able to maintain state TODO: Research more on it and add to Readme.MD
function List() {

    return (
        <aside>
            <h2> Today's Exercises </h2>
            <ul>
                <li>
                    <h3>
                        Chest    
                    </h3>
                    <span>
                        00:04:00
                    </span>
                </li>
                <li>
                    <h3>
                        Triceps    
                    </h3>
                    <span>
                        00:05:00
                    </span>
                </li>
            </ul>
        </aside>
    )
}

export default List;