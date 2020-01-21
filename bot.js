import Discord from 'discord.js'
import 'dotenv/config'

console.log('👋 henlo')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('✅ running!')
})

bot.login(process.env.DISCORD_TOKEN)

