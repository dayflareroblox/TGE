

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
    if(cmd === `${prefix}verify`){
    let verifiedRole = message.guild.roles.find(r => r.name === "Verified")
    if (message.member.roles.has(verifiedRole.id)) return message.channel.send("You are already verified.")

    function makeid() {
        var text = "";
        var selectFruit = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😲', '😝', '🤑', '🤯', '😭', '😑', '😶', '😋', '🙆', '👉', '👇', '🧠', '💼', '👮🏻', '👍🏼', '👎🏼', '🐵', '🌨', '☁️', '💧', '🎬', '🎧', '🎮', '🎲', '🏅', '🥇', '🥈', '🥉', '🏆', '🏒', '🍎', '🍫', '🍿', '🍪', '🥛', '🍽', '🍴', '🐑', '🦀', '🐔', '🐭', '🦊', '🐧', '🐞', '🌍', '🌏', '🌕', '🌖', '🌚', '🌝', '🌵', '🎄', '🌲', '☀️', '⛅️', '☔️', '🍋'];
        text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
        text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
        text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
        text += selectFruit[Math.floor(Math.random() * selectFruit.length)];
        return text;

    }
    const filter = m => m.author.id === message.author.id
    const collector = message.channel.createMessageCollector(filter, {
        max: "1",
        time: "200000"
    })
    const robloxEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Prompt")
        .setDescription("❓ What's your ROBLOX username?")
        .setFooter("This prompt will cancel after 200 seconds.")
        .setTimestamp()
    message.channel.send(robloxEmbed)

    collector.on("collect", m => {
        if (m.content === 'cancel' || m.content === 'Cancel') {
            message.channel.send('**Cancelled prompt.**')
            return
        }
        rbx.getIdFromUsername(m.content).then(foundId => {
            const Id = foundId
            const newString = makeid() + makeid() + makeid() + makeid() + makeid()
            const foundUsername = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("Prompt")
                .setDescription("Hello **" + m.content + "**, to verify that you are that user. Please put this in your blurb, or status. \n `" + newString + "`\n\nSay **done** when complete.\nSay **cancel** to cancel. ")
                .setFooter("Player ID is " + foundId)
                .setImage("https://cdn.discordapp.com/attachments/498352842818715649/515541774966587392/verify_help.png")
                .setTimestamp()
            message.channel.send(foundUsername)
            message.channel.awaitMessages(mag => {
                if (mag.content.includes('done') && mag.author.id == message.author.id) {
                    const fetchingBlurb = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setTitle("Prompt")
                        .setDescription("Fetching your emojis, please wait as I am going to fetch it.")
                        .setFooter("Fetching..")
                        .setTimestamp()
                    message.channel.send(fetchingBlurb)
                    setTimeout(function() {
                        rbx.getStatus(foundId).then(status => {
                            console.log(status)
                            rbx.getBlurb(foundId).then(blurb => {
                                if (status.includes(newString) || blurb.includes(newString)) {
                                    const verified = new Discord.MessageEmbed()
                                        .setColor("GREEN")
                                        .setTitle("Prompt")
                                        .setDescription("You have now been verified! Please wait shortly as you are going to recieve the Verified role.")
                                        .setFooter("Verifying..")
                                        .setTimestamp()
                                    message.channel.send(verified)
                                    let role = message.guild.roles.find(r => r.name === "Verified")
                                    message.member.roles.add(role)
                                    console.log()
                                    message.member.setNickname(m.content)
                                    let rolew = message.guild.roles.find(r => r.name === "UnVerified")
                                    message.member.roles.remove(rolew)
                                    console.log()
                                } else {
                                    message.channel.send("Can not find the emojis.")
                                }
                            })
                        }, 5000)
                    })
                } else
                if (mag.content.includes('cancel') && mag.author.id == message.author.id) {
                    message.channel.send('**Cancelled prompt.**')
                    return
                }
            })
        })
    })
}
    }
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
