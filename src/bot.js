import Discord from 'discord.js'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('👋 henlo')
})

bot.on('message', msg => {
  let { content, author, channel} = msg
  
  //henlo
  if (content.includes('vnrbot')) {
    try {
      msg.react(bot.emojis.find(emoji => emoji.name === 'tortuvnr'))
    } catch(e) {
      msg.react('👋')
    }
  }

  //reply to mee6 bot
  if (author.username === 'MEE6' && content.startsWith('GG')) {
    try {
      channel.send(`TG <@${author.id}> 👺`)
    } catch(e) {
      console.log(e)
    }
  }
})

bot.login(process.env.DISCORD_TOKEN)

