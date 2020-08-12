const {dialog}=at
const content_Title={type:CONTROLLER_TYPE.LABEL,text:"Sky Helper Guide"}
const content_AppPicker={
    type: CONTROLLER_TYPE.PICKER, 
    title: "选择你的光遇版本:", 
    key: "AppPicker", 
    value: "国服", 
    options: ["国服", "国际服内测"] 
}
const content_Btn_Cancle={
    type:CONTROLLER_TYPE.BUTTON,
    title:"确定",
    width:0.2,
    flag:1
}
const content_Btn_OK={
    type:CONTROLLER_TYPE.BUTTON,
    title:"取消",
    width:0.2,
    flag:2
}
const controls=[content_Title,content_AppPicker,content_Btn_Cancle,content_Btn_OK]
function method_Guide(){
    console.log(">>>>> Run method:Guide")
    console.log(">>>>> Returns control of the current process to the user...")
    const result=dialog({controls})
    if(result==1){
        console.log(">>>>> Return string:\nresult->%s\ncontent_AppPicker->%s",
        result,content_AppPicker.value)
    }else{
        console.log(">>>>> Return srting:\nresult->%s",result)
    }
}
function run_module_guide(){
    console.log(">>>>> Run modules:guide")
    method_Guide();
}
console.log(">>>>> [guide.js] Preparing modules...")
module.exports ={
    run_module_guide
}