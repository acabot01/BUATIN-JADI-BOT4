let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6285791338937]
│ •  [6285791338937]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler