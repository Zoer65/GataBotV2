function handler(m) {
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '59167235105', 'OFICIAL - alexander65', m)
  //this.sendContact(m.chat, '59167235105', 'OFICIAL - alexander65', m)
  //this.sendContact(m.chat, '59167235105', 'alexander65', m)
  }
handler.help = ['contacto'] 
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña)$/i

module.exports = handler
