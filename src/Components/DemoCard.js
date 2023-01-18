import React from 'react'
import { Row, Col, Card, Space, Switch } from "antd";
import alert from '../Images/alert-siren.gif';
import EscOn from "../Images/ESCOn.svg";
import EscStatus from "../Images/EscStatus.svg";
import '../CSS/DemoCard.css'


function DemoCard() {
    return (
        <div>

            <Row className='CardRow1'>
                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                            {/* <span class="tooltiptext">Tooltip text</span> */}
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>

                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>

                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>
                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>
                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>

                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>
                <Col className="ESC"  >

                    <Row className='ESCROW1'>

                        <Col span={12} className="ESCName"> Esc 1</Col>
                        <Col span={12}> <img src={alert} alt="" style={{ height: "25px", paddingTop: "1px" }} className="Alarm" /></Col>
                    </Row>
                    <Row className='ESCRow' >



                        <Col span={8} className="ESCCol">

                            <Row className='Rowc1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Power
                            </Row>
                            <Row>
                                <img src={EscOn} alt="" className='Rowc2' />
                            </Row>
                            <Row className='Rowc3'>
                                ON
                            </Row>

                        </Col>

                        <Col span={8} className="ESCCol">
                            <Row style={{ fontSize: "16px", fontWeight: "bold" }} className="Scol1">
                                Status
                            </Row>
                            <Row>
                                <img src={EscStatus} alt="" className="Scol2" />
                            </Row>
                            <Row className="Scol3">
                                UP
                            </Row>
                        </Col>
                        <Col span={8} className="ESCCol">

                            <Row className='RCol1' style={{ fontWeight: "bold", fontSize: "16px" }}>
                                Speed
                            </Row>
                            <Row className='RCol2'>
                                0.2
                            </Row>
                            <Row className='RCol3'>
                                Normal
                            </Row>
                        </Col>


                    </Row>
                    <hr />
                    <Row className='ESCROW2'>
                        <Col span={20} className="ESCName1">Last Error : E107</Col>
                        <Col span={4} className="ESCName2"> <button className="Viewbtn">View</button></Col>
                    </Row>

                </Col>









            </Row>

        </div>
    )
}

export default DemoCard