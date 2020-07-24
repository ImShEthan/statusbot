const Discord = require("discord.js")
const client = new Discord.Client()
const Math = require("mathjs")

client.on("ready", () => {
    console.log(`${client.user.username} est lancé!`)
    let embed = new Discord.MessageEmbed()
    .setTitle("Statut VPS")
    .setDescription(`VPS ON <:valide:730201189689458828>
    Lancement du statut du vps`)
    
    client.channels.cache.get(`730202113845493800`).send(embed)
    
});

client.on("message", async message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let prefix = "."

    if (cmd == prefix + "refresh") {
        message.delete()
        let embed = new Discord.MessageEmbed()
    .setTitle("Statut VPS")
    .setDescription(`VPS ON <:valide:730201189689458828>
    Ping du VPS : ${Math.floor(client.ws.ping)}`)
    client.channels.cache.get(`730202113845493800`).send(embed)

    }
    /*
    let embed = new Discord.MessageEmbed()
    .setTitle("Statut VPS")
    .setDescription(`VPS ON <:valide:730201189689458828>
    Ping du VPS : ${Math.floor(client.ws.ping)}`)
    client.channels.cache.get(`730202113845493800`).send(embed)
    }, 600000);
    */
    if (cmd === prefix + "statut") {
        let min = 600000;
        let temps = Math.floor((min / 60) / 1000) ;
        const action = args[1];
        if (!message.author.id === "654754795336237058") return ;
        switch(action){
            
        case "on": {
            message.delete()
            client.user.setActivity("Surveiller le VPS d'Ethan")
            message.channel.send("Je commence à surveiller le vps")
            var interval = setInterval (function () {
            let embed = new Discord.MessageEmbed()
            .setTitle("Statut VPS")
            .setTimestamp()
            .setDescription(`VPS ON <:valide:730201189689458828>
    Ping du VPS : ${Math.floor(client.ws.ping)}`)
    .setFooter(`Prochain statut dans ${temps} minutes`)
    
    client.channels.cache.get(`730202113845493800`).send(embed).catch(console.error);
    console.log(`Ping : ${Math.floor(client.ws.ping)}, status envoyé`)

}, 600000);
            break;
        }
        case "off": {
            message.delete()
            client.user.setActivity("Prendre sa pose café ☕")
            message.channel.send("J'arrete de surveiller le vps")
            var interval = ' '
                let embed = new Discord.MessageEmbed()
                .setTitle("Statut VPS")
                .setDescription(`VPS ON <:valide:730201189689458828>
        Ping du VPS : ${Math.floor(client.ws.ping)}`)
        
        client.channels.cache.get(`730202113845493800`).send(embed).catch(console.error);
    
            
            break;
    }
        
        default: {
            let serverembed = new Discord.MessageEmbed()
            .setTitle("Tu dois ON ou OFF le staut.")
        .setColor("#ff0000")
        .setTimestamp(message.createdTimestamp)
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setFooter("Dev par Ethan");
            message.channel.send(serverembed);
        }
    }
}

});




client.login("NzMwMTk3NDIwNDE5NDQ4ODc0.XwT_pA.pcIm_3JiQjCu3-9xzp45k_cUsjw")