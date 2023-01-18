
import React, { useState ,useEffect} from 'react';
import Panel from '../Components/Panel';
import { Row, Col, Card, Space, Switch } from "antd";
import "../CSS/Dialer.css";
import '../CSS/AcController.css'
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
import { Line } from '@ant-design/plots';

function AcController10() {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
     
    };


    const inputs = [
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACSTATE",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC State(| 0-OFF | 1-ON |)",
            "alarm_name": "AC ON",
            "alarm_state": "1",
            "unique_tag": "MOD51-ACSTATE",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "STEMP",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Set Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-STEMP",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 22
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "RTEMP",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Room Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-RTEMP",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 23
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "acmode",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMODE",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Mode(| 0-Auto Mode | 1-Cool Mode | 2-Heat Mode | 3-Fan Mode |)",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-ACMODE",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "acspeed",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACSPEED",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC IDU Fan Speed(| 0-Low | 1-Medium | 2-High Speed | 3-Auto Speed |)",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-ACSPEED",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 2
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "humidity",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACHUMID",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC IDU Humidity",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-ACHUMID",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU Compressor State",
            "alarm_name": "Alarm ON",
            "alarm_state": "1",
            "unique_tag": "MOD51-ODU0",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU High Fan Speed",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ODU1",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU Low Fan Speed",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ODU2",
            "last_recv_dt": "2022-12-21T17:56:09+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU 4-Way Valve",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ODU3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU Crank Case",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ODU4",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ODU5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ODU Oil Return",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ODU5",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Economic Running",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT0",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Electric Auxiliary Heater",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT1",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Swing",
            "alarm_name": "Alarm ON",
            "alarm_state": "1",
            "unique_tag": "MOD51-AUXFUNCT2",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Exchange Air",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Fresh New",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT4",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Add Humidity",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT5",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Add Oxygen",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT6",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Dry Function",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT7",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Horizontal Swing",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT8",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT9",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Add Water",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT9",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT10",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Drain Pump",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT10",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT14",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Central Controller Lock",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT14",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AUXFUNCT15",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Aux Funct Remote Controller Lock",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-AUXFUNCT15",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Fault Power Sequence",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT0",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Communication Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT1",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct T1 Sensor Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT2",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct T2A Sensor Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct T2B Sensor Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT4",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct T3 or T4 Temp Sensor Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT5",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Cross Zero Inspect",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT6",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct EEPROM",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT7",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Fan Speed Inspect",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT8",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT9",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Comm PCB And Display Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT9",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT10",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Compressor Over Current",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT10",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT11",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Inverter Module Protection",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT11",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT12",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Fresh New Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT12",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT13",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Outdoor Malfunction Protection",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT13",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT14",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Water Lever Test",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT14",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACMALFUNCT15",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "AC Malfunct Other Malfunction",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACMALFUNCT15",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P0 Evaporator Temp",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION0",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P1 Anti-Cool/Defrost",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION1",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P2 Condenser High Temp",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION2",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P3 Compressor Temp",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P4 Discharge Pipe Temp",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION4",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P5 Discharge High Pressure",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION5",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P6 Discharge Low Pressure",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION6",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P7 Over/Lack Power Voltage",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION7",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION8",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P8 Compressor Over Current",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION8",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION9",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION P9",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION9",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION10",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION PA",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION10",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION11",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION PB",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION11",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION12",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION Pc",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION12",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION13",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION PD",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION13",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION14",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION PE",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION14",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "PROTECTION15",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "PROTECTION PF(Other Protection)",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-PROTECTION15",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT0",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Wrong(Dont_Support_Order)",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT0",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT1",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Object_Addr_Dont_Exist",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT1",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT2",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Order_OverTime",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT2",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Limited_Order",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT4",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_PC",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT4",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT5",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_Function_Module",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT5",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT6",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_NIM",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT6",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "event",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "ACNWDEVMALFUNCT7",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "ACNWDEVMALFUNCT Communication_MalFunct_NIM_AND_PCB",
            "alarm_name": "Alarm OFF",
            "alarm_state": "0",
            "unique_tag": "MOD51-ACNWDEVMALFUNCT7",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 0
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "acstate",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "AACSTATE",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Analog AC State(| 0-OFF | 1-ON |)",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-AACSTATE",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 1
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "power",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "IDUPOWER",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "IDU Power in Watt",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-IDUPOWER",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 2
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "T2A",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Evaporator Pipe Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-T2A",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 15
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "T2B",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Evaporator Middle Pipe Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-T2B",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 16
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "temperature",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "T3",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Condenser Pipe Temperature",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-T3",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 107.5
          },
          "time": "2022-12-21T17:56:30+05:30"
        },
        {
          "measurement": "current",
          "tags": {
            "panel_no": "80660001_2",
            "device_code": "MOD51",
            "zone": "COMPCURRENT",
            "min_alarm": 0,
            "max_alarm": 0,
            "name": "Compressor Current",
            "alarm_name": "NA",
            "alarm_state": null,
            "unique_tag": "MOD51-COMPCURRENT",
            "last_recv_dt": "2022-12-21T17:56:10+05:30"
          },
          "fields": {
            "value": 107.5
          },
          "time": "2022-12-21T17:56:30+05:30"
        }
      ]


 
    let abc={};

    inputs.map((aa)=>
    {
      abc[aa?.tags?.zone]=aa?.fields?.value
    })

    
  console.log("MyData",abc);

  console.log("AC state value is =", abc['AACSTATE']);


    const [cards,setCards] = useState([

        { room : "Main Office" , occ : 5 , temp : "25°C" , id: 1},
        { room : "Sales Office" , occ : 4 , temp : "24°C" , id: 2},
        { room : "Dev1 Office" , occ : 6 , temp : "26°C" , id: 3},
        { room : "Dev2 Office" , occ : 7 , temp : "25°C" , id: 4},
        { room : "Director Office" , occ : 2 , temp : "22°C" , id: 5},
        { room : "Cash Counter" , occ : 15 , temp : "24°C" , id: 6},
        { room : "Main Office" , occ : 15 , temp : "26°C" , id: 7},
        { room : "Main Office" , occ : 25 , temp : "23°C" , id: 8},
        { room : "Main Office" , occ : 5 , temp : "25°C" , id: 9},
     
        
      
    ])

    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };

      const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
          // type: 'timeCat',
          tickCount: 5,
        },
        smooth: true,
      };
    return (
        <div style={{ marginLeft:"50px" , }}>
            <div>
                <Panel />
            </div>
            <div>
                <Row>
                    <Col span={12} style={{marginRight:"20px"}} >

                        <h3 className='headingOne'>Air Conditioner</h3>

                        <Row  >

                           {cards.map((card)=>(

        
                            <Col className='columnOne' key={card.id}>
                                <Card className='CardRowOne'  >

                                    <Row className='rowOne'>

                                        <Col span={12} style={{ float: 'left', paddingRight: "10px", fontSize: "16px" }}>{card.room}</Col>
                                        <Col span={12} style={{ float: 'right', paddingLeft: "15px", fontSize: "18px" }}> {card.occ} <img src={Vector} alt="Occupency Logo" className='imgo' /></Col>

                                    </Row>
                                    <Row className='rowTwo'>

                                        <Col span={12} className='right' style={{ float: 'left', paddingRight: "10px", fontSize: "18px" }}>{card.temp}</Col>
                                        <Col span={12} className='right' style={{ float: 'right', paddingLeft: "15px" }}> <Switch defaultChecked checkedChildren="ON" unCheckedChildren="OFF" onChange={onChange} /> </Col>

                                    </Row>
                                </Card>
                            </Col>
                        ))}


                        </Row>
          
                       

                    </Col>


                    <Col span={11} style={{marginTop:"20px"}}>
                        <Row className='ac-graph'>
                            <div className='AcSettingOne'>

                                <Row className='AcRowOne'>
                                    <Col span={7}  className='ACNoOne' ><h4 >Main Office</h4></Col>
                                    <Col span={7} className='ACNoOne'>

                                        <h4 >AC-1</h4>


                                    </Col>
                                    <Col className="settingone">

                                        <Row>

                                            <Col span={8}><img src={Ac} alt="Setting logo" className='settlogoOne' /></Col>
                                            <Col span={8}><img src={On} alt="On/Off" className='on-offOne' /></Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col className="Dial1">

                                        <Row>

                                            <Col span={14}>

                                                <Row >
                                                    <Col span={16}> <h3>Current Temp  </h3></Col>
                                                    <Col span={8}><span className='tempdata'>25°C </span> </Col>

                                                </Row>
                                                <hr />
                                                <Row>
                                                    <Col span={16}> <h3>Room Temp  </h3></Col>
                                                    <Col span={8}><span className='tempdata'>25°C </span> </Col>
                                                </Row>

                                            </Col>
                                            <Col span={10}>

                                                <Row>
                                                    <h3 className='Fanspeed'>Fan Speed  </h3>
                                                </Row>

                                                <Row>
                                                    <img src={Fan} alt="Setting logo" className='fan' />
                                                </Row>

                                            </Col>

                                        </Row>




                                    </Col>

                                    <Col className="Dial2">
                                        <Row className='IncDesc'><img src={Plus} alt="Setting logo" /></Row>
                                        <Row className='IncDesc'> <img src={Fan} alt="Setting logo" /></Row>
                                        <Row className='IncDesc'><img src={Minus} alt="Setting logo" /></Row>
                                    </Col>
                                    <Col className='slide'>
                                        <Row className='slider'>
                                            <Box width={450}>

                                                <img src={Setting} alt="Setting logo" />

                                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                            </Box>

                                        </Row>
                                        <Row className='slider'>
                                            <Box width={450}>
                                                <img src={Fanlogo} alt="Setting logo" />
                                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                                            </Box>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>

                            <div className='graph'>
                            <Line {...config} />
                            </div>

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AcController10


























