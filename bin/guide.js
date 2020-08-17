console.log(">>>>> [guide.js] Loading script")
const { dialog,stop } = at
const { module_SkyNetease_init } = require("./bin/skyNetease_init.js")
const content_Title = { type: CONTROLLER_TYPE.LABEL, text: "Sky Helper Guide" }
const content_AppPicker = {
    type: CONTROLLER_TYPE.PICKER,
    title: "选择你的光遇版本:",
    key: "AppPicker",
    value: "国服",
    options: ["国服", "国际服内测"]
}
const content_Btn_Cancle = {
    type: CONTROLLER_TYPE.BUTTON,
    title: "确定",
    width: 0.2,
    flag: 1
}
const content_Btn_OK = {
    type: CONTROLLER_TYPE.BUTTON,
    title: "取消",
    width: 0.2,
    flag: 2
}
const controls = [content_Title, content_AppPicker, content_Btn_Cancle, content_Btn_OK]
function method_Guide_Welcome() {
    console.log(">>>>> Run method:method_Guide_Welcome()")
    console.log(">>>>> Returns control of the current process to the user...")
    const result = dialog({ controls })
    switch (result) {
        case 1:
            switch (content_AppPicker.value) {
                case "国服":
                    console.log(">>>>> Return string:\nresult->%s\ncontent_AppPicker->%s",
                        result, content_AppPicker.value)
                    module_SkyNetease_init();
                    break;
                case "国际服内测":
                    alert("尚未适配")
                    stop(); 
                    break;
            }
            break;
        case 2:
            // Kill procress by user.
            console.log(">>>>> Return string:\nresult->%s\ncontent_AppPicker->%s",
                result, content_AppPicker.value)
            console.log(">>>>> [guide.js] STOP PROCRESS")
            at.stop();
            break;
    }
}
function module_Guide() {
    method_Guide_Welcome();
}
console.log(">>>>> [guide.js] Preparing modules...")
module.exports = {
    module_Guide
}