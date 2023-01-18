import React from 'react'
import { Row, Col, Card, Space, Switch } from "antd";
import Alarm from '../Images/alarm.svg';
import Energy from '../Images/Energy.svg';
import NOF from '../Images/NoF.svg';
import People from '../Images/people.svg';
import Occ from '../Images/Occ.svg';
import '../CSS/Data.css';
import { textAlign } from '@mui/system';

function Data() {
  return (
    <div className='Data'>

      <h2 className="Head">Alarms</h2>

      <Row >
        <Col className='Row1'>

        <Row >
            <Col span={4}> <img src={Alarm} alt="logo" /> </Col>
            <Col span={12} style={{textAlign:"center"}}>Alarms Trigered</Col>
            <Col span={6} style={{ color: '#FF0000', fontSize: "25px" ,paddingBottom:"10px" ,textAlign:"center"}}>1</Col>
          </Row>

        </Col>
        <Col className='Row1'>

          <Row >
            <Col span={5}> <img src={Alarm} alt="logo" /> </Col>
            <Col span={12} style={{textAlign:"center" ,paddingLeft:"5px"}}>Number of Ticket</Col>
            <Col span={6} style={{ color: '#FF0000', fontSize: "25px" ,paddingBottom:"10px" ,textAlign:"center"}}>1</Col>
          </Row>
        </Col>

      </Row>


      <h2 className="Head">Data</h2>
      <Row >

        <Col className='column' >

          <Row className='rows1'>

            <Col span={10} style={{ paddingLeft: "10px", fontSize: "16px" }}>Total Occupancy</Col>
            <Col span={8} style={{ fontSize: "16px", textAlign: "right" }}>120</Col>
            <Col span={4} style={{ display: "flex", justifyContent: "right", }}>     <img src={Occ} alt="" style={{ height: "23px" }}  /> </Col>

          </Row>


        </Col>
        <Col className='column'>

          <Row className='rows1'>

            <Col span={10} style={{ paddingLeft: "10px", fontSize: "16px" }}>Total Energy Consumption</Col>
            <Col span={8} style={{ fontSize: "16px", textAlign: "right" }}>4 KVH</Col>
            <Col span={4} style={{ display: "flex", justifyContent: "right" , paddingTop:"4px" }}> <img src={Energy} alt="" style={{ height: "18px" }} /> </Col>

          </Row>


        </Col>
        <Col className='column'>

          <Row className='rows1'>

            <Col span={12} style={{ paddingLeft: "10px", fontSize: "16px" }}>Conference Room Vacancy</Col>
            <Col span={7} style={{ fontSize: "16px", textAlign: "center" }}> <span style={{ color: "green" }}>2</span> / <span>4</span> </Col>
            <Col span={3} style={{ display: "flex", justifyContent: "right", }}><img src={People} alt="" style={{ height: "25px" }} /> </Col>


          </Row>


        </Col>

        <Col className='column'>

          <Row className='rows1'>

            <Col span={12} style={{ paddingLeft: "10px", fontSize: "16px" }}>Visiters Present In/Out</Col>
            <Col span={7} style={{ fontSize: "16px", textAlign: "center" }}> <span style={{ color: "green" }}>12</span> / <span style={{ color: "red" }}>20</span> </Col>
            <Col span={3} style={{ display: "flex", justifyContent: "right",  }}><img src={People} alt="" style={{ height: "25px" }} /> </Col>


          </Row>

        </Col>

      </Row>

      <div className='armed'>

        <h2 className="Head">Alarms</h2>

        <Row>
          <Col className='ColA'>
            <Row >
              <Col span={15} className="title">Fire Alarm System</Col>
              <Col span={9} className="title" style={{ color: "green" }}>Armed</Col>
            </Row>
          </Col>
          <Col className='ColA'>
            <Row>
              <Col span={15} className="title">Intrusion Panel</Col>
              <Col span={8} className="title" style={{ color: "red" }}>Unarmed</Col>
            </Row>
          </Col>
          <Col className='ColA'>
            <Row>
              <Col span={15} className="title">Intrusion Panel</Col>
              <Col span={8} className="title" style={{ color: "red" }}>Unarmed</Col>
            </Row>
          </Col>
        </Row>


        <Row>
          <Col className='ColA'>
            <Row>
              <Col span={15} className="title">Fire Alarm System</Col>
              <Col span={8} className="title" style={{ color: "green" }}>Armed</Col>
            </Row>
          </Col>
          <Col className='ColA'>
            <Row>
              <Col span={15} className="title">Motion Detector</Col>
              <Col span={8} className="title" style={{ color: "green" }}>Armed</Col>
            </Row>
          </Col>
          <Col className='ColA'>
            <Row>
              <Col span={15} className="title">Motion Detector</Col>
              <Col span={8} className="title" style={{ color: "green" }}>Armed</Col>
            </Row>
          </Col>
        </Row>

      </div>

    </div>
  )
}

export default Data