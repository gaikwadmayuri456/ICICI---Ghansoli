import React from 'react'
import { Row, Col, Card, Space, Switch } from "antd";
import "../CSS/Dialer.css";
import Vector from '../Images/Vector.svg';
import On from '../Images/ac.svg';
import Ac from '../Images/on.svg';
import Fan from '../Images/fan.svg';
import Fanlogo from '../Images/Fan.svg';
import Setting from '../Images/setting.svg';
import Plus from '../Images/plus.svg';
import Minus from '../Images/minus.svg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function Dialer9() {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className='dial'>

      <h3 className='heading'>Air Conditioner</h3>

      <Row >
        <Col  className='col' >
          <Card className='CardRow' >
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
      </Row>
      
      <Row >
        <Col  className='col' >
          <Card className='CardRow' >
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
        <Col  className='col'>
          <Card className='CardRow'>
            <Row className='row1'>

              <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>Main Office</Col>
              <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}>5 <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

            </Row>
            <Row className='row2'>

              <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>25°C</Col>
              <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked onChange={onChange} /></Col>

            </Row>
          </Card>
        </Col>
      </Row>

  

      <div className='AcNumber'>
         <h3 className='heading1'>Select & Control AC</h3>
     
        <Row>
          <Col  className="ACName"><div>AC-1</div></Col>
          <Col  className="ACName"><div>AC-2</div></Col>
          <Col  className="ACName"><div>AC-3</div></Col>
          <Col  className="ACName">AC-4</Col>
        </Row>
     
        </div>


        <div className='AcSetting'>

        <Row className='AcRow'>
          <Col className='ACNo' ><h4 >Main Office</h4></Col>
          <Col className='ACNo'>

            <h4 >AC-1</h4>


          </Col>
          <Col  className="setting">

          <Row>

              <Col span={8}><img src={Ac} alt="Setting logo" className='settlogo' /></Col>
              <Col span={8}><img src={On} alt="On/Off" className='on-off' /></Col>
            </Row>
          </Col>
        </Row>

        <Row >
          <Col  className="Dial1">

            <Row>

              <Col span={15}>

                <Row>
                  <Col span={16}> <h3>Current Temp  </h3></Col>
                  <Col span={8}><span className='tempdata'>25°C </span> </Col>

                </Row>
                <hr />
                <Row>
                  <Col span={16}> <h3>Room Temp  </h3></Col>
                  <Col span={8}><span className='tempdata'>25°C </span> </Col>
                </Row>

              </Col>
              <Col span={9}>

                <Row>
                  <h3 className='Fanspeed'>Fan Speed  </h3>
                </Row>

                <Row>
                  <img src={Fan} alt="Setting logo" className='fan' />
                </Row>

              </Col>

            </Row>




          </Col>

          <Col  className="Dial2">
            <Row className='IncDesc'><img src={Plus} alt="Setting logo" /></Row>
            <Row className='IncDesc'> <img src={Fan} alt="Setting logo" /></Row>
            <Row className='IncDesc'><img src={Minus} alt="Setting logo" /></Row>
          </Col>
          <Col className='slide'>
            <Row className='slider'>
              <Box width={350}>
            
              <img src={Setting} alt="Setting logo" />

                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              </Box>

            </Row>
            <Row className='slider'> 
            <Box width={350}>
               <img src={Fanlogo} alt="Setting logo" />
               <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
             </Box>
            </Row>
          </Col>
        </Row>
        </div>
        

    
    


    </div>
  )
}

export default Dialer9