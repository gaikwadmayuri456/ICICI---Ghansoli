import React from 'react';
import '../CSS/Panel.css';
import { Link, useNavigate } from 'react-router-dom';






function Panel2() {

  return (
    <div className='Panel'>
        <div className='room'>
        <h2 >
            Main Office
        </h2>
        </div>
        <div className='control' >
        

         <Link to="accontrol10">  <button className='Power'  >Power Panel  </button>   </Link>
          
       
         <Link to="Floor10"><button  className='Controlp'  > Control Panel </button> </Link> 

        </div>
       

    </div>
  )
}

export default Panel2