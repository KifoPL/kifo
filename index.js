const Discord = require("discord.js");
const fs = require("fs");
const contents = fs.readFileSync(`./prefixes.json`);
const jsonPrefixes = JSON.parse(contents);

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
	.setAuthor("Powered by Kifo Clanker™", null, `https://kifopl.github.io/kifo-clanker/`)
	.setTitle(title)
	.setDescription(body)
	.setFooter(`by KifoPL, sent at: ${date.toUTCString()}.`)

	return embedreply;
}
/**
 * 
 * @param {string} guildID ID of the guild from which the message is called.
 * @returns prefix used in the guild (or default "!kifo ")
 */
exports.prefix = function(guildID) {
	return jsonPrefixes[guildID].prefix;
}