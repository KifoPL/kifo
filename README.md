# kifo
 NPM package to make the Kifo Clanker™ cleaner and easier to manage.

## Installation
1. `npm install kifo` in your terminal
1. `const kifo = require("kifo");` in your code

... and that's it!

> make sure you have [`npm`](https://www.npmjs.com/get-npm) installed.

## Features
> Main usage of this package is to help develop Kifo Clanker™. However, there are some actually useful features that other bot developers could use (like RegExs).

### `embed(body, title = "Info:", perpetrator = null, client = null)`
- converts string (`body`) with optional title to `embed message`.
> - `perpetrator` - `Discord.User` that used the command (visible in footer)
> - `client` - `Discord.Client` that instantiated this (visible in title)

### `emojiRegex`
- returns `RegEx` fitting all Unicode Emojis.

### `urlRegex`
- returns `RegEx` fitting all URLs starting with `http://` or `https://`

### `channelPerms`
- returns array with `Id`, `name`, `type`, `aliases` of `channel perms`.
#### example:
	[
		(VIEW_CHANNEL = {
		Id: 1,
		name: "VIEW_CHANNEL",
		type: "text",
		aliases: ["view", "vch"],
	}),
	...
	]

## Links
- [npm package site](https://www.npmjs.com/package/kifo),
- [The Galactic Republic Discord Server](https://discord.gg/invite/thegalacticrepublic)
- [Discord Support Server](https://discord.com/invite/HxUFQCxPFp)
- [PayPal](https://paypal.me/Michal3run) - *(electricity and internet bills cost a lot of money, donations motivate me to continue my work developing this package and the bot)*
