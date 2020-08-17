// 如需调用该模块，应将启动事件优先级设置为最高
// 否则用户有权在部分模块中断脚本主进程
const {
    exec
} = at
function cleanLog() {
    exec("rm -rf /var/mobile/Library/AutoTouch/Library/log.txt")
}
function cleanDebugImg(){
    exec("rm -rf /var/mobile/Library/AutoTouch/Scripts/Debug/*")
}
function module_CacheCleaner() {
    cleanLog()
    cleanDebugImg()
}
module.exports = {
    module_CacheCleaner
}