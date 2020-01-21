"use strict";

var _discord = _interopRequireDefault(require("discord.js"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bot = new _discord["default"].Client();
bot.on('ready', function () {
  console.log('👋 henlo');
});
bot.on('message', function (msg) {
  var content = msg.content,
      author = msg.author,
      channel = msg.channel; //henlo

  if (content.includes('vnrbot')) {
    try {
      msg.react(bot.emojis.find(function (emoji) {
        return emoji.name === 'tortuvnr';
      }));
    } catch (e) {
      msg.react('👋');
    }
  } //reply to mee6 bot


  if (author.username === 'MEE6' && content.startsWith('GG')) {
    try {
      channel.send("TG <@".concat(author.id, "> \uD83D\uDC7A"));
    } catch (e) {
      console.log(e);
    }
  }
});
bot.login(process.env.DISCORD_TOKEN);