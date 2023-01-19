import React from 'react'
import axios from "axios"
import {useDispatch} from "react-redux";
import {ups_data} from "../Redux/Actions/DashboardDataAction"
function ServiceFile() {
    const dispatch= useDispatch();
    let abc={}
    const data={
        "inputs": [
          {
            "measurement": "voltage",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OV1",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Voltage-1",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OV1",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 229.10000000000002
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "current",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OC1",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Current-1",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OC1",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 10.100000000000001
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "power",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "KW1",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Power-1",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-KW1",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 2100
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "misc",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "PLOAD1",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Load-1",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-PLOAD1",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 5
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "voltage",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OV2",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Voltage-2",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OV2",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 229.9
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "current",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OC2",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Current-2",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OC2",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "power",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "KW2",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Power-2",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-KW2",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "misc",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "PLOAD2",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Load-2",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-PLOAD2",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "voltage",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OV3",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Voltage-3",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OV3",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 229.20000000000002
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "current",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "OC3",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Current-3",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-OC3",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "power",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "KW3",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Power-3",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-KW3",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          },
          {
            "measurement": "misc",
            "tags": {
              "panel_no": "iam-gw-210104",
              "device_code": "MOD07",
              "zone": "PLOAD3",
              "min_alarm": 0,
              "max_alarm": 0,
              "name": "Output Load-3",
              "alarm_name": "NA",
              "alarm_state": null,
              "unique_tag": "MOD07-PLOAD3",
              "last_recv_dt": "2023-01-17T10:28:05+05:30"
            },
            "fields": {
              "value": 0
            },
            "time": "2023-01-18T12:12:18+05:30"
          }
        ],
        "health": ""
      }
      data.inputs.map((aa)=>
      {
          abc[aa?.tags?.zone]=aa?.fields?.value

      })
      
      dispatch(ups_data(abc));
      console.log("abc",abc)

  return (
    <></>
  )
}

export default ServiceFile