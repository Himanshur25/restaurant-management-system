import React from 'react';
import Newcard from './Newcard';

import foodData from "./item.json"
import Navbar2 from './Navbar2';


const PATH = '/images/';

const Menu = (props) => {
    
    return (
    <div>
             
            <Navbar2/>
          
      <div style={
            {display: 'flex',
            flexWrap: 'wrap',
              gap: '75px',
            padding: '1rem',
            marginBottom: '1rem'}
}
            > 
                {foodData.foodItems.map(({id,image, foodName, price})=> {
           return <Newcard key={id} id={id} name={foodName} Image={`${PATH}${image}`} Price={price} />
         })}
         
        </div>

      </div>
    );
};
export default Menu;