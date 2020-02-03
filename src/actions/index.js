
export const addRequest =(NameData)=>{
    console.log('data', NameData);
    return{
        type: "Add_name",
        payload: NameData
    }
}