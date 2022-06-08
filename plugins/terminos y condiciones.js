// NO MODIFICAR ABSOLUTAMENTE NADA DE AQUI
let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
❰ ❗️ ❱ *La información que se proporcionará no excluye a Propietario/a del Bot, Sub Bot, o usuario del Bot de las posibles sanciones.* 

❰ ❗️ ❱ *NO nos hacemos responsables del desconocimiento que pueda tener de estos temas del Bot.*

❰ ⚠️ ❱ *_Términos de Privacidad_*

_- La información que reciba por parte del Bot NO es compartida con nadie._

_- Las imágenes, vídeos, stickers, audios, logos, etc.. NO son compartidas con nadie._

_-  El Bot es posible que no esté activado las 24 horas, no excluye que él/la Propietario/a pueda hacerlo._

_- NO nos hacemos responsables del posible mal uso de un Sub Bot._

- _Los Sub Bots son públicos al depender del comando #bots para saber la lista de Sub Bots._

- _El chat anónimo del comando #start, valga la redundancia no mostrará ningún dato de los Usuarios por parte de alexander. Eso no implica que las personas que hagan uso de esta función puedan dar a conocer sus datos._

`.trim(), m)
    let mentionedJid = [m.sender]
}
    
handler.customPrefix = /términos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Terminó se uso|términos de uso|Términos de uso|Términos y condiciones/i
handler.command = new RegExp

module.exports = handler 
