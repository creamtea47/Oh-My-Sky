// ===================================
// Oh-My-Sky
// Project creation date：2020/08/12
// ===================================
// Attention：
// 1. To keep your system secure,
//    We don't do hacks, modify "mods", or change game features,
//    even future versions
// 2. You might know，This scirpt against the game's design philosophy, 
//    so I hope you guys please keep it LOW-KEY.
//    (https://thatgamecompany.helpshift.com/a/sky-children-of-the-light/?s=code-of-conduct&f=can-i-use-third-party-software-like-mods-or-bots)
// 2. Tested only on iPhone 6 and iPhone 11
// 3. This script is completely free and you can sponsor us.
console.log(">>>>> [index.js] Preparing Oh-My-Sky...")
// Import modules.
const {
    module_Guide
} = require("./bin/guide")
const {
    module_CacheCleaner
}=require("./boot/cacheCleaner")
// Call modules.
module_CacheCleaner()
module_Guide()