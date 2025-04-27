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
        async function ROMEO_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_MULAX_Tech = MULAX_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_MULAX_OFFICIAL.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Niabulo_Jb.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_MULAX_OFFICIAL.ev.on('creds.update', saveCreds)
            Pair_Code_By_MULAX_OFFICIAL.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Njabulo_Jb.sendMessage(Pair_Code_By_Njabulo_Jb.user.id, { text: '' + b64data });

               let ROMEO MD = `
✧ROMEO MD DEVICE SUCCESSFUL CONNECTED✧
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🤦  Creator ☞ ✧MULAX OFFICIAL✧
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🫂  WhattsApp group ☞ https://whatsapp.com/channel/0029Vb5Tm5E6rsQnV4DIRO3z
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🥂 Contact Owne ☞ https://wa.me/+26776660902
FREDIETECH
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ©*ROMEO MD 2025 SCRIPT*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Njabulo_Jb.sendMessage(Pair_Code_By_Njabulo_Jb.user.id,{text: NJABULO_JB_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Njabulo_Jb.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    NJABULO_Jb_PAIR_CODE();
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
    return await NJABULO_JB_PAIR_CODE()
});
module.exports = router
