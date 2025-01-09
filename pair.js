const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Fredie_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FREDI_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Fredie_Tech = Fredie_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Fredie_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Fredie_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Fredie_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Fredie_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Fredie_Tech.sendMessage(Pair_Code_By_Fredie_Tech.user.id, { text: '' + b64data });

               let FREDI_TECH_TEXT = `
┏━━━━━━━━━━━━━━
┃𝙃𝘼𝙉𝙎-𝙈𝘿 𝙎𝙀𝙎𝙎𝙄𝙊𝙉 𝙄𝙎 
┃𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇𝙇𝙔
┃𝘾𝙊𝙉𝙉𝙀𝘾𝙏𝙀𝘿 ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = ✰ HANSTZ TECH ✰
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Chat me 👉 https://wa.me/255760774888
𝕋ℍ𝕀𝕊 𝕀𝕊 ℍ𝔸ℕ𝕊-𝕄𝔻-ℕ𝔼𝕎-𝕌ℙ𝔻𝔸𝕋𝔼 2025
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©*2024-2099 𝐇𝐀𝐍𝐒-𝐅𝐑𝐎𝐌-𝐓𝐀𝐍𝐙𝐀𝐍𝐈𝐀🇹🇿✌️*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Fredie_Tech.sendMessage(Pair_Code_By_Fredie_Tech.user.id,{text:FREDI_TECH_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Fredie_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FREDI_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await FREDI_TECH_PAIR_CODE()
});
module.exports = router