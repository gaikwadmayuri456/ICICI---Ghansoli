import React from 'react'


function Json() {

    
    //     const inputs = [
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACSTATE",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC State(| 0-OFF | 1-ON |)",
    //           "alarm_name": "AC ON",
    //           "alarm_state": "1",
    //           "unique_tag": "MOD51-ACSTATE",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 1
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "temperature",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "STEMP",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Set Temperature",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-STEMP",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 22
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "temperature",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "RTEMP",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Room Temperature",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-RTEMP",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 23
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "acmode",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMODE",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Mode(| 0-Auto Mode | 1-Cool Mode | 2-Heat Mode | 3-Fan Mode |)",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-ACMODE",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 1
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "acspeed",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACSPEED",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC IDU Fan Speed(| 0-Low | 1-Medium | 2-High Speed | 3-Auto Speed |)",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-ACSPEED",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 2
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "humidity",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACHUMID",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC IDU Humidity",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-ACHUMID",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU0",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU Compressor State",
    //           "alarm_name": "Alarm ON",
    //           "alarm_state": "1",
    //           "unique_tag": "MOD51-ODU0",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 1
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU1",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU High Fan Speed",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ODU1",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU2",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU Low Fan Speed",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ODU2",
    //           "last_recv_dt": "2022-12-21T17:56:09+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU 4-Way Valve",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ODU3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU4",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU Crank Case",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ODU4",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ODU5",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ODU Oil Return",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ODU5",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT0",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Economic Running",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT0",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT1",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Electric Auxiliary Heater",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT1",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT2",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Swing",
    //           "alarm_name": "Alarm ON",
    //           "alarm_state": "1",
    //           "unique_tag": "MOD51-AUXFUNCT2",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 1
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Exchange Air",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT4",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Fresh New",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT4",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT5",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Add Humidity",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT5",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT6",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Add Oxygen",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT6",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT7",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Dry Function",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT7",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT8",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Horizontal Swing",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT8",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT9",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Add Water",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT9",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT10",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Drain Pump",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT10",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT14",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Central Controller Lock",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT14",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AUXFUNCT15",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Aux Funct Remote Controller Lock",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-AUXFUNCT15",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT0",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Fault Power Sequence",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT0",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT1",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Communication Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT1",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT2",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct T1 Sensor Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT2",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct T2A Sensor Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT4",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct T2B Sensor Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT4",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT5",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct T3 or T4 Temp Sensor Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT5",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT6",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Cross Zero Inspect",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT6",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT7",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct EEPROM",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT7",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT8",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Fan Speed Inspect",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT8",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT9",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Comm PCB And Display Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT9",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT10",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Compressor Over Current",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT10",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT11",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Inverter Module Protection",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT11",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT12",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Fresh New Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT12",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT13",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Outdoor Malfunction Protection",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT13",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT14",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Water Lever Test",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT14",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACMALFUNCT15",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "AC Malfunct Other Malfunction",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACMALFUNCT15",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION0",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P0 Evaporator Temp",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION0",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION1",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P1 Anti-Cool/Defrost",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION1",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION2",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P2 Condenser High Temp",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION2",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P3 Compressor Temp",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION4",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P4 Discharge Pipe Temp",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION4",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION5",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P5 Discharge High Pressure",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION5",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION6",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P6 Discharge Low Pressure",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION6",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION7",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P7 Over/Lack Power Voltage",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION7",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION8",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P8 Compressor Over Current",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION8",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION9",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION P9",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION9",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION10",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION PA",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION10",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION11",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION PB",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION11",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION12",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION Pc",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION12",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION13",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION PD",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION13",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION14",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION PE",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION14",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "PROTECTION15",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "PROTECTION PF(Other Protection)",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-PROTECTION15",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT0",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Wrong(Dont_Support_Order)",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT0",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT1",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Object_Addr_Dont_Exist",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT1",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT2",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Order_OverTime",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT2",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Limited_Order",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT4",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_PC",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT4",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT5",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_Function_Module",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT5",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT6",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Communication_MalFunct_CCM_AND_NIM",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT6",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "event",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "ACNWDEVMALFUNCT7",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "ACNWDEVMALFUNCT Communication_MalFunct_NIM_AND_PCB",
    //           "alarm_name": "Alarm OFF",
    //           "alarm_state": "0",
    //           "unique_tag": "MOD51-ACNWDEVMALFUNCT7",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 0
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "acstate",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "AACSTATE",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Analog AC State(| 0-OFF | 1-ON |)",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-AACSTATE",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 1
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "power",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "IDUPOWER",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "IDU Power in Watt",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-IDUPOWER",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 2
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "temperature",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "T2A",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Evaporator Pipe Temperature",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-T2A",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 15
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "temperature",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "T2B",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Evaporator Middle Pipe Temperature",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-T2B",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 16
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "temperature",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "T3",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Condenser Pipe Temperature",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-T3",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 107.5
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       },
    //       {
    //         "measurement": "current",
    //         "tags": {
    //           "panel_no": "80660001_2",
    //           "device_code": "MOD51",
    //           "zone": "COMPCURRENT",
    //           "min_alarm": 0,
    //           "max_alarm": 0,
    //           "name": "Compressor Current",
    //           "alarm_name": "NA",
    //           "alarm_state": null,
    //           "unique_tag": "MOD51-COMPCURRENT",
    //           "last_recv_dt": "2022-12-21T17:56:10+05:30"
    //         },
    //         "fields": {
    //           "value": 107.5
    //         },
    //         "time": "2022-12-21T17:56:30+05:30"
    //       }
    //     ]

   
    //   let abc={};

    //   inputs.map((aa)=>
    //   {
    //     abc[aa?.tags?.zone]=aa?.fields?.value
    //   })

      
    // console.log("MyData",abc)

    // console.log("AC state value is =", abc['AACSTATE'])

        // let newAcData = inputs.map( user => { return {"Dzone" : user.tags.zone , "Dvalue" : user.fields.value  } } )
        // console.log(newAcData)

    
        // var newArray = newAcData.filter(function(ac){
        //     return ( ac.Dzone === "ACSTATE")
        // })

        // console.log(newArray);
   
      
  return (
    <div>
        
     
        
    </div>
  )
}

export default Json