import React from 'react'
import {Row,Col,Space} from "antd"
import Data from '../Components/Data'
import Dialer9 from './Dialer9'
import '../CSS/ControlData9.css'
import ServiceFile from './ServiceFile'


function ControlData9() {
  return (
    <div className='Controllers'>
        <ServiceFile/>

    <Row>
   
    <Col span={12}>
      
     <Dialer9/>
    </Col>
    <Col span={12}>
    <Data/>
    </Col>
   </Row>
      
    </div>
  )
}

export default ControlData9