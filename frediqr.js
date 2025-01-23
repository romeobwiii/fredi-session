const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Njabulo_Jb,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Njabulo_Jb_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Njabulo_Tech = Jb_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Njabulo_Jb.ev.on('creds.update', saveCreds)
			Qr_Code_By_Njabulo_Jb.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Fredie_Tech.sendMessage(Qr_Code_By_Njabulo_Jb.user.id, { text: '' + b64data });
	
				   let NJABULO_JB_TEXT = `
✧NJABULO MD DEVICE SUCCESSFUL CONNECTED✧
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🤦  Creator ☞ ✧NJABULO JB✧
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🫂  WhattsApp Channel ☞ https://chat.whatsapp.com/GfmBCCZR34g5EqMHpFLzZN
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🥂 Contact Owne ☞ https://wa.me/+26777821911
FREDIETECH
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ©*NJABULO JB 2025 SCRIPT*

_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_Njabulo_Jb.sendMessage(Qr_Code_By_Njabulo_Jb.user.id,{text: NJABULO_JB_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Fredie_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					FREDI_TECH_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await NJABULO_JB_QR_CODE()
});
module.exports = router
