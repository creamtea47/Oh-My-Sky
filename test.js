const {
    frontMostAppId,
    findColors,
    appRun,
    findColor,
    getColor
} = at
console.log(frontMostAppId())
appRun("com.apple.Preferences")

function test1() {
    const [result, error] = getColor(100, 200)
    if (error) {
        alert('Failed to get color, error: %s', error)
    } else {
        alert('Got result by getColor', result)
    }
    // or ignore the error
}
function test2() {
const [result, error] = findColors({
    colors: [
        { color: 31487, x: 0, y: 0 },
        { color: 16711678, x: 5, y: -3 },
        { color: 16580095, x: 12, y: -6 },
        { color: 2986494, x: 30, y: -5 },
        { color: 11654911, x: 35, y: 1 },
        { color: 31487, x: 18, y: -2 },
        { color: 31487, x: 7, y: 9 },
        { color: 31487, x: 20, y: 19 },
        { color: 31487, x: 30, y: 9 },
        { color: 31487, x: 19, y: 7 }
    ],
    // count: 30,
    // region: null,
    debug: true,
    // rightToLeft: false,
    // bottomToTop: false
})
    console.log(result,error)
}
test2()
