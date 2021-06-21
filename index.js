const Discord = require("discord.js");

/**
 * 
 * @param {string} body Description of message embed.
 * @param {string} title Title of message embed. Default: "Info:"
 * @returns 
 */
exports.embed = function(body, title = "Info:") {

	const date = new Date(Date.now());

	const embedreply = new Discord.MessageEmbed();
	embedreply.setColor('a039a0')
	.setAuthor("Powered by Kifo Clanker™", null, `https://discord.gg/HxUFQCxPFp`)
	.setTitle(title)
	.setURL("https://kifopl.github.io/kifo-clanker/")
	.setDescription(body)
	.setFooter(`by KifoPL, sent at: ${date.toUTCString()}.`)

	return embedreply;
}