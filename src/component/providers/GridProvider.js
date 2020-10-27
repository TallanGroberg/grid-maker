import React, {useState} from 'react';

const {Provider, Consumer} = React.createContext();

const GridProvider = (props) => {
    const [cords, setCords] = useState({x: 2, y: 2})



    return (
        <Provider value={{
            cords,
            setCords,

        }}>
            {props.children }
        </Provider>
    );
};

export const withGrid = C => props =>  (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default GridProvider;