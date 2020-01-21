import Discord from 'discord.js'
import 'dotenv/config'

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('👋 henlo')
})

bot.on('message', msg => {
  if (msg.content.includes('vnrbot')) {
    try {
      msg.react(bot.emojis.find(emoji => emoji.name === 'tortuvnr'))
    } catch(e) {
      msg.react('👋')
    }
  }
})

bot.login(process.env.DISCORD_TOKEN)

