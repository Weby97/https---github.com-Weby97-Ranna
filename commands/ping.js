module.exports = {
    name: 'ping',
    description: "throw a pong back at you!",
    execute(client, message, args){
        message.channel.send('pong!')
    }
}