const Discord = require("discord.js");

exports.embed = function(body, title = null) {

	const date = new(Date.now())

	const embedreply = new Discord.MessageEmbed();
	embedreply.setColor('a039a0')
	.setAuthor("Powered by Kifo Clanker™", null, `https://discord.gg/HxUFQCxPFp`)
	.setTitle(`${title == null ? "INFO:" : title}`)
	.setURL("https://kifopl.github.io/kifo-clanker/")
	.setDescription(body)
	.setFooter(`by KifoPL, sent at: ${date.toUTCString()}.`)

	return embedreply;
}