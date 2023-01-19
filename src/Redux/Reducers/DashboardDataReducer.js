
const initialState =()=>
{
    var state={
        upsdata:
        {KW2:0,
        KW3:0,
        OC1:10.100000000000001,
        OC2:0,
        OC3:0,
        OV1:229.10000000000002,
        OV2:229.9,
        OV3:229.20000000000002,
        PLOAD1:5,
        PLOAD2:0,
        PLOAD3:0},
    }
    return state
}
const dashboardDataReducer =(state = initialState(),action)=>{
    switch(action.type)
    {
         case "UPS_DATA":
             return{
                 ...state,
                 upsdata:action.payload,
             };
             default :
             return state;
    }
}
export default dashboardDataReducer;