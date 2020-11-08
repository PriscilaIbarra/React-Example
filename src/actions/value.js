//action-> plain object that indicates the type of operation to execute
/* action simple
const valorAction = {
    type:'SETEAR'
}

export default valorAction;
*/

//action creator

const actionValue = (value)=>{
    return {
        type:'SET',
        value: value
    }
}
export default actionValue;