const { appRun, appState, stop, findColors, findColorsAsync } = at
const SKY_NETEASE_ID = "com.netease.sky";
function method_appRun() {
    console.log(">>>>> Run method:method_appRun()")
    appRun(SKY_NETEASE_ID)
    usleep(1000000)
    if (appState(SKY_NETEASE_ID) != "ACTIVATED") {
        alert("启动失败\n请检查所需要启动的Sky版本是否存在")
        stop();
    } else {
        console.log(">>>>> Run com.netease.sky successful！")
    }
}
function method_findIndex_Btn_Play() {
    console.log(">>>>> Run method:method_findIndex_Btn_Play()")
    usleep(1000000 * 2)
    // usleep(1000000*6*10)

    const [result, error] = findColors({
        colors: [
            { color: 11974842, x: 0, y: 0 },
            { color: 11316913, x: -6, y: 6 },
            { color: 11645877, x: 6, y: 6 },
            { color: 10658983, x: 0, y: 12 },
            { color: 10790569, x: 0, y: 14 },
            { color: 14145754, x: -8, y: 21 },
            { color: 10922155, x: 8, y: 22 },
            { color: 9080465, x: -13, y: 32 },
            { color: 8027778, x: 12, y: 32 },
            { color: 12238015, x: -5, y: 45 },
            { color: 12040636, x: 5, y: 45 },
            { color: 9409174, x: 0, y: 36 },
            { color: 10461861, x: -6, y: 35 },
            { color: 13816789, x: 7, y: 35 }
        ],
        count: 30,
        // region: null,
        debug: true,
        // rightToLeft: false,
        // bottomToTop: false
    })

}
console.log(">>>>> [sky-netease_init] Loading script")
function call_skyNetease_init() {
    console.log(">>>>> [sky-netease_init] Loading script")
    method_appRun()
    method_findIndex_Btn_Play()
}
module.exports = {
    call_skyNetease_init
}