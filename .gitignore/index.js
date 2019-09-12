    const Discord = require('discord.js');

const client = new Discord.Client();

const triesPerSecond = 1;

const prefix = "!"

client.on('ready', () => {

    console.log("Je suis co");

});

client.on('message', message => {

    if(message.content.startsWith(prefix + "mppp")) {
    
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');  
        
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
            if(!msge) return message.channel.send("Precise un message")
        message.delete()
        message.guild.members.map(m => m.send(msge + "\n\n\n\n\n\n**invites me for mp ??? : http://mpbotofficiel.tk \n for other bot : http://supportbotserver.tk ** "))
    }

    if(message.content.startsWith(prefix + "mp")) {
    
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
            if(!msge) return message.channel.send("Precise un message")
        message.delete()
        message.guild.members.map(m => m.send(msge))

    }

});



client.login(process.env.TOKEN)
