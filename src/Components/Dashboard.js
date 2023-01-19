import React from 'react'
import { Card, Row } from 'antd';
import { useSelector } from "react-redux";

function Dashboard() {
    const abc = useSelector(state => state.dashboardDataReducer.upsdata);
    return (
        <>
            <Row>
                <Card
                    bordered
                    className={abc?.OC1 >= 15 || abc?.OC1 <= 30 ? 'healthycard' : 'unhealthycard'}
                    style={{ width: 200 }}>
                    <p>UPS Status  Healthy</p>
                </Card>
                <Card
                    bordered
                    className={abc?.OC1 >= 15 || abc?.OC1 <= 30 ? 'healthycard' : 'unhealthycard'}
                    style={{ width: 200 }}>
                    <p>UPS Battery  Healthy</p>
                </Card>
                <Card
                    bordered
                    className={abc?.PLOAD1 >= 0 || abc?.PLOAD1 <= 80 ? 'healthycard' : 'unhealthycard'}
                    style={{ width: 200 }}>
                    <p>UPS Load  Normal</p>
                </Card>
                <Card
                    bordered
                    className="batterycard"
                    style={{ width: 200 }}>
                    <p>UPS Battery Voltage   {abc?.OV2} V</p>
                </Card>
                <Card
                    bordered
                    className="batterycard1"
                    style={{ width: 200 }}>
                    <p>Current UPS Load  24%</p>
                </Card>
            </Row>
        </>
    )
}

export default Dashboard