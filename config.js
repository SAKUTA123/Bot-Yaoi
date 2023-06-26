const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'https://api.lolhuman.xyz' //https://api.lolhuman.xyz
global.rosekey = 'https://api.itsrose.life'
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Sekaichi'
global.namaowner = 'Leon&Lousy お-ぎ'

//—————「 Setting Owner 」—————//
global.owner = '6287760550924', '6281273183637'
global.ownernomer = ["6287760550924"]
global.premium = ['6287760550924']

//—————「 Set Wm 」—————//
global.packname = 'Sekaichi'
global.author = 'Leon お-ぎ'
global.prefa = ['#', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Fitur Khusus _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Fitur Ini Khusus _*Leon&Lousy*_',
    group: 'Fitur Ini Khusus _*Group Chat*_',
    private: 'Fitur Ini Khusus _*Admin Group*_',
    wait: 'Tunggu Sebentar Kak!',
    endLimit: 'Limit Harian Kamu Habis,Limit Akan Di Reset Jam 00.00 Malam',
    error: '*!!!Fitur Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10,
}

//—————「 Set Image 」—————//
global.imageurl = fs.readFileSync('./media/thumb.jpg')
global.isLink = `https://youtube.com/@leonnob2820`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
