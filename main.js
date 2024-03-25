import { wabe, clearMessages } from "@umamdev/wabe";
import ai from './command.js'

const bot = new wabe({
    phoneNumber: "6281882898488",
    sessionName: "mybot",
    logger: "info"
})

bot.start().then((sock) => {
    sock.ev.on('messages.upsert', m => {
        const msg = m.messages[0].message.conversation
        const sender = m.messages[0].key.remoteJid
        console.log(msg)
        if (msg[0] === 'gemini') {
            console.log(msg.slice(1).join(' '))
            // sock.sendMessage(sender, { text: ai.geminiText() })
        } else if (msg[0] === 'gpt') {
            sock.sendMessage(sender, { text: ai.gptText(msg) })
        }
    })
})