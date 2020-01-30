import Discord from 'discord.js'
import dotenv from 'dotenv'

const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  dotenv.config() 
}

const bot = new Discord.Client()

bot.on('ready', () => {
  bot.user.setStatus(isDev ? 'invisible' : 'online')
  console.log('👋 henlo')
})

bot.on('message', msg => {
  let { content, author, channel } = msg

  //when testing, ignores all but test serv messages
  if (isDev && msg.guild.name !== process.env.TEST_SERV) return
  
  //henlo
  if (RegExp(/\bvnrbot\b/i).test(content) || msg.isMemberMentioned(bot.user)) {
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

