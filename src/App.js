import React, {useContext, useState} from 'react'
import {withGrid} from './component/providers/GridProvider'
import styled from 'styled-components'

function App(props) {
  const [divId, setDivId] = useState([])

  const {  cords, setCords} = props;



  const showState = (x,y) => {
    for (let i = 0; i < x * y; i++) {
      
      divId[i] = `div${i}`
      
    }


    return divId
  }

  showState(cords.x, cords.y);

  console.log(props)
  const handleChange = (e) => {
    const { name, value} = e.target;
    setCords(prev =>  ({...prev, [name]: value }))
    if(divId.length >= 1){
      setDivId([]);
    }
  }




  

  return (<>
      <form>
        <input 
          type="number"
          name='x'
          value={cords.x}
          placeholder="x coordinate"
          onChange={handleChange}
       />
        <input 
          type="number"
          name='y'
          value={cords.y}
          placeholder="y coordinate" 
          onChange={handleChange}

        />
      </form>
    <AppStyles>

      {
      divId.map(id => {
        return <div key={id} className={id}></div>
      })
      }

    </AppStyles>
  </>);
}

const AppStyles = withGrid(styled.div`
min-height: 100vh;
display: grid;
grid-template-columns: repeat(${props => props.cords.x}, 1fr );
grid-template-rows: repeat(${props => props.cords.y}, 1fr);
grid-column-gap: 1px;
grid-row-gap: 1px;

div {
  border: 1px solid black;
}
`);


export default withGrid(App);