

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: false});

//---------------------------------------------------------------\\//---------------------------------------------------------------\\

function changing_status() {

    let status = ['Watching over SCPF..', 'Say :help if you need me!', 'Made by DesiredMercury..']

    let random = status[Math.floor(Math.random() * status.length)]

    bot.user.setActivity(random)

}



bot.on("ready", () => {

    console.log("Changed");

    setInterval(changing_status, 2000);

})



//---------------------------------------------------------------\\//---------------------------------------------------------------\\ 


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}purge`){
  message.channel.bulkDelete(args[0]);
 return;
}  
 
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
var filterWords = [
    "anal",
    "anus",
    "arse",
    "nigger",
    "nigga",
    "ballsack",
    "balls",
    "bastard",
    "bitch",
    "biatch",
    "blowjob",
    "blow job",
    "bollock",
    "bollok",
    "boner",
    "boob",
    "bugger",
    "bum",
    "buttplug",
    "clitoris",
    "cock",
    "coon",
    "cunt",
    "dick",
    "dildo",
    "dyke",
    "fag",
    "feck",
    "fellate",
    "fellatio",
    "felching",
    "fucker",
    "fucking",
    "fuck",
    "f u c k",
    "fudgepacker",
    "fudge packer",
    "flang",
    "homo",
    "jizz",
    "knobend",
    "knob end",
    "labia",
    "muff",
    "penis",
    "prick",
    "pube",
    "pussy",
    "queer",
    "scrotum",
    "sex",
    "shit",
    "s hit",
    "sh1t",
    "slut",
    "smegma",
    "fucken",
    "spunk",
    "tit",
    "tosser",
    "turd",
    "twat",
    "vagina",
    "wank",
    "whore",
    "mofucker",
    "niger"
];




bot.on("message", message => {
            switch (true) {
                case message.author.bot:
                    return;
                case new RegExp(filterWords.join("|")).test(message.content.toLowerCase()):
                    const guild = client.guilds.find(guild => guild.id);
                    let edit = message.content.toLowerCase();
                    for (var i in filterWords) {
                        edit = edit.replace(new RegExp(filterWords[i], "g"), "`*****`");
                    }
                    message.delete();
                    message.channel.send("", {
                        embed: new Discord.RichEmbed()
                            .setColor("RANDOM")
                            .setTitle("New Message")
                            .setDescription(edit)
                    })
            }
 
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\    
    if(cmd === `${prefix}hug`){
        let hug = [
        "https://data.whicdn.com/images/221692186/original.gif",
        "http://mrwgifs.com/wp-content/uploads/2013/04/Ouran-High-School-Host-Club-Love-Hug-Gif.gif",
        "http://images6.fanpop.com/image/photos/33100000/Kyoya-and-Tamaki-ouran-high-school-host-club-33132917-500-375.gif",
        "http://31.media.tumblr.com/4d6525e7b5e546cde555bf2453563335/tumblr_mskyp8XJcb1r40gm7o1_1280.gif",
        "https://i.pinimg.com/originals/34/dc/98/34dc98f17fd5cf558611f14ff9a0c1c9.gif",
        "https://78.media.tumblr.com/6bef64140dfefe6fe86089c6eb11fb9b/tumblr_ohhnjyDJll1vm2xpgo1_500.gif",
        "https://78.media.tumblr.com/806c23dbcf9bde033e708c8679c63975/tumblr_inline_ohhtig3BpF1rz9r19_540.gif",
        "https://i.pinimg.com/originals/0f/48/1b/0f481bfc59229ce8127f2aba52bb8f4a.gif",
        "https://pa1.narvii.com/6276/4461c2a865973bddcc5f4e591a165e09275c7a2c_hq.gif",
        "https://78.media.tumblr.com/7e29c1e560c527de00a9f57bb7d941c3/tumblr_inline_ohi8745BbI1u9qbij_540.gif",
        "https://data.whicdn.com/images/271163043/original.gif",
        "https://78.media.tumblr.com/d00aba2e25ac11a11d9c5a770275dfc8/tumblr_orpdyc83FN1rtwid9o1_500.gif",
        "http://0.media.dorkly.cvcdn.com/33/43/cac85de1cfd2bc4e7bec36631b260156.gif",
        "https://i.pinimg.com/originals/22/8a/c9/228ac960b7c24ffb87374857fa6a0920.gif",
        "https://pa1.narvii.com/6333/8c254b88d099c03be84769075ecac875c5dbb4bb_hq.gif",
        "https://pa1.narvii.com/6449/c5383d0a548987d69aac06e8dc9b270219159b3f_hq.gif",
        "https://media1.tenor.com/images/100c453c2f411189b40e6931ff65a88b/tenor.gif?itemid=7210521",
        "https://i.pinimg.com/originals/e5/0e/c8/e50ec889ef64432e5d4648370014d272.gif",
        "https://78.media.tumblr.com/94f62f2fbca608f70a48e6c04c2dc27c/tumblr_orotkrEC4t1vbbkedo2_540.gif",
        "http://i0.kym-cdn.com/photos/images/original/001/266/481/075.gif",
        "https://data.whicdn.com/images/310192271/original.gif",
        "https://78.media.tumblr.com/064596e2fb0101675b89d79ac41141e0/tumblr_p8g2jmxCLD1qc9mvbo1_540.gif",
    ]
    let hugresult = Math.floor((Math.random() * hug.length));
    if (!args[0]) {
        const ghembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
            .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
        message.channel.send({
            embed: ghembed
        })
        return;
    }
    if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
        const hembed = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTitle(`${message.author.username} gave ${message.mentions.members.first().user.username} a hug! How sweet!`)
            .setImage(hug[hugresult])
        message.channel.send({
            embed: hembed
        })
        return;
    }
    const ghembed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setTitle(`${message.author.username} hugged themself...! (weirdo)`)
        .setImage('https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
    message.channel.send({
        embed: ghembed
    })
    }
  //---------------------------------------------------------------\\//---------------------------------------------------------------\\

  //---------------------------------------------------------------\\//---------------------------------------------------------------\\    
      if(cmd === `${prefix}warn`){
      
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("***Sorry you cant warn users.***");    
     let wUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
       if(!wUser) return message.channel.send("Sorry couldnt find user :unamused:");
       let warnreason = args.join(" ").slice(22);
        
        let warnembed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")
        .setColor("#2A363B")
        .addField("Warn Reason:", warnreason)
        .setDescription("You have been warned in **SCP Fоundatiоn**")
            
       message.reply("**User has been warned.**");   
            
       if(message.mentions.users.first()) return message.mentions.users.first().send(warnembed);       
      }            
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\       

  if(cmd === `${prefix}Group`){
  let embed = new Discord.RichEmbed()
  .setTitle("SCP Foundation")
  .setDescription("https://www.roblox.com/my/groups.aspx?gid=3305396")
  .addField("Information:", "Owned by: Lael_Forare")
  .setColor("#2A363B")
  .setFooter("This group specialises in Secure, Contain, Protect.")
  
   message.channel.send(embed); 
  }
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
    if(cmd === `${prefix}coinflip`){
      message.channel.send(`Result: **${Math.floor(Math.random() * 2) == 0 ? "Heads" : "Tails"}**!`);
    }        
    
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\    
    
  if(cmd === `${prefix}group`){
  let embed = new Discord.RichEmbed()
  .setTitle("SCP Foundation")
  .setDescription("https://www.roblox.com/my/groups.aspx?gid=3305396")
  .addField("Information:", "Owned by: Lael_Forare")
  .setColor("#2A363B")
  .setFooter("This group specialises in Secure, Contain, Protect.")
  
   message.channel.send(embed); 
  }
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\
    
   if(cmd === `${prefix}help`){
       let embed = new Discord.RichEmbed()
       .setDescription("Please say 'cmds' or 'playersupport' or 'info' for the help catagories.")
       
       message.channel.send(embed)
       if (message.content === `${prefix}ping`) {
         message.channel.send("test")  
    }       
  }
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\           
    

if(cmd === `${prefix}shout`){
    
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.reply("Sorry you cannot shout things, its only people with manage messages perms. :)"); 
     let announcement = args.join(" ");
     let embed = new Discord.RichEmbed()
     .setDescription(announcement)
     .setTitle("Server Shout | SCP Foundation")
     .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")
     .setColor("#2A363B")
      message.delete();
     let shoutchannel = message.guild.channels.find(`name`, "announcements");
     shoutchannel.send(embed)
    shoutchannel.send("@everyone")

}   

 //---------------------------------------------------------------\\//---------------------------------------------------------------\\     
   
if(cmd === `${prefix}dm`){

     let mention = args[0];
     const msg = args.slice("1").join(" ");
     
     message.channel.send("User has been DM'ed! Thanks.");
      message.delete().catch(O_o=>{});
      
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you cant DM people.");
     if(message.mentions.users.first()) return message.mentions.users.first().send(msg);
  }

//---------------------------------------------------------------\\//---------------------------------------------------------------\\
   
 if(cmd === `${prefix}say`){

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
      message.delete().catch(O_o=>{});
}
  
//---------------------------------------------------------------\\//---------------------------------------------------------------\\  
   
if (cmd === `${prefix}report`){

   let rUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
   if(!rUser) return message.channel.send("Sorry couldnt find user :unamused:");
   let reason = args.join(" ").slice(22);

   let repoted = new Discord.RichEmbed()
   .setTitle("Reported in **SCP Foundation**")
   .setDescription("You have been reported, please bear in mind the administrators now have this report file Thanks.")
   .addField("Report reason:", reason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")
  
      
   let reportembed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png") 
   .setTitle("Moderation Report")
   .setDescription("Moderators need to act on the reported user.")
   .setColor("#2A363B")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Report time", message.createdAt)
   .addField("Report Reason", reason);


   let reportschannel = message.guild.channels.find(`name`, "modlogs");
   if(!reportschannel) return message.channel.send("Couldnt find the specified channel path. :unamused:");
   

   message.delete().catch(O_o=>{});
   reportschannel.send(reportembed);
      message.reply("**User had been reported, if you are fake reporting you will be blacklisted from this server immidiatley.**")  
        if(message.mentions.users.first()) return message.mentions.users.first().send(repoted);
  return;
}
  
 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
   
  if(cmd === `${prefix}kick`){

  let kUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
  if(!kUser) return message.channel.send("User not found. :unamused:");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry you cant kick people.");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.reply("Sorry that user cannot be kicked.");

   let kicksend = new Discord.RichEmbed()
   .setTitle("Kicked from ***SCP Foundation***")
   .setDescription("You have been kicked, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Kick reason:", kReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")     
        
        
  let kEmbed = new Discord.RichEmbed()
   .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png") 
   .setTitle("Moderation Kick")
  .setColor("#2A363B")
  .addField("Kicked User.", `${kUser} with the ID: ${kUser.id}`)
  .addField("Kicked by:", `<@${message.author.username}> with the ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Kick Reason", kReason);

   let kchannel = message.guild.channels.find(`name`, "modlogs");
   if(!kchannel) return message.channel.send("Channnel path not found. :smile:")

  message.guild.member(kUser).kick(kReason);
  kchannel.send(kEmbed);    
  message.reply("***User had been Kicked.***"); 
      if(message.mentions.users.first()) return message.mentions.users.first().send(kicksend);  

  return;
}



 //---------------------------------------------------------------\\//---------------------------------------------------------------\\  
  
   if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guilds.members.get(args[0]));
    if(!bUser) return message.channel.send("User not found. :unamused:");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry you cant ban people.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("Sorry that user cannot be banned.");
  
   let bansend = new Discord.RichEmbed()
   .setTitle("Banned from **SCP Foundation**")
   .setDescription("You have been Banned, please bear in mind the administrators now have this kick file Thanks.")
   .addField("Ban reason:", bReason)
   .setColor("#2A363B")
   .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")
   
         
  
    let bEmbed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/534135074476654596/534421668286693396/03c887dffdc9f6f4de5386e02d19375a.png")    
    .setTitle("Moderation Ban")
    .setColor("#2A363B")
    .addField("Banned User.", `${bUser} with the ID: ${bUser.id}`)
    .addField("Banned by:", `<@${message.author.username}> with the ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Banned Reason", bReason);

  
     let bChannel = message.guild.channels.find(`name`, "modlogs");
     if(!bChannel) return message.channel.send("Channnel path not found. :smile:")
  
    message.guild.member(bUser).ban(bReason);
    bChannel.send(bEmbed);    
  message.reply("**User had been Banned.**");
        if(message.mentions.users.first()) return message.mentions.users.first().send(bansend);        

    return;
  }
  
});

bot.login(process.env.BOT_TOKEN);
