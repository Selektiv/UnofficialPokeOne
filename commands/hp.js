const settings = require('../settings.json');
const discord = require("discord.js");
exports.run = (client, message, args) => {
    
  var HPIV = message.content.split(' ').slice(1).shift();
  var AttackIV = message.content.split(' ').slice(2).shift();
  var DefenseIV = message.content.split(' ').slice(3).shift();
  var SpAtkIV = message.content.split(' ').slice(4).shift();
  var SpDefIV = message.content.split(' ').slice(5).shift();
  var SpeedIV = message.content.split(' ').slice(6).shift();

  if(HPIV > 31) {
    return message.channel.send("Your HP IVs are too high")
  }
  if(AttackIV > 31) {
    return message.channel.send("Your Attack IVs are too high")
  }
  if(DefenseIV > 31) {
    return message.channel.send("Your Defense IVs are too high")
  }
  if(SpeedIV > 31) {
    return message.channel.send("Your Speed IVs are too high")
  }
  if(SpAtkIV > 31) {
    return message.channel.send("Your Special Attack IVs are too high")
  }
  if(SpDefIV > 31) {
    return message.channel.send("Your Special Defence IVs are too high")
  }

  if(HPIV < 1) {
    return message.channel.send("Your HP IVs are too low")
  }
  if(AttackIV < 1) {
    return message.channel.send("Your Attack IVs are too low")
  }
  if(DefenseIV < 1) {
    return message.channel.send("Your Defense IVs are too low")
  }
  if(SpeedIV < 1) {
    return message.channel.send("Your Speed IVs are too low")
  }
  if(SpAtkIV < 1) {
    return message.channel.send("Your Special Attack IVs are too low")
  }
  if(SpDefIV < 1) {
    return message.channel.send("Your Special Defence IVs are too low")
  }

  if(isNaN(HPIV)) {
    return message.channel.send("Your HP IVs Must be a number!")
  }
  if(isNaN(AttackIV)) {
    return message.channel.send("Your Attack IVs Must be a number!")
  }
  if(isNaN(DefenseIV)) {
    return message.channel.send("Your Defense IVs Must be a number!")
  }
  if(isNaN(SpeedIV)) {
    return message.channel.send("Your Speed IVs Must be a number!")
  }
  if(isNaN(SpAtkIV)) {
    return message.channel.send("Your Special Attack IVs Must be a number!")
  }
  if(isNaN(SpDefIV)) {
    return message.channel.send("Your Special Defense IVs Must be a number!")
  }
            

if (HPIV == 1 || HPIV == 3 || HPIV == 5 || HPIV == 7 || HPIV == 9 || HPIV == 11 || HPIV == 13|| HPIV == 15 || HPIV == 17 || HPIV == 19 || HPIV == 21 || HPIV == 23 || HPIV ==  25 || HPIV == 27 || HPIV == 29 || HPIV ==  31) {
    var HPIV = 1
} else {
    var HPIV = 0
}
if (AttackIV == 1 || AttackIV == 3 || AttackIV == 5 || AttackIV == 7 || AttackIV == 9 || AttackIV == 11 || AttackIV == 13|| AttackIV == 15 || AttackIV == 17 || AttackIV == 19 || AttackIV == 21 || AttackIV == 23 || AttackIV ==  25 || AttackIV == 27 || AttackIV == 29 || AttackIV ==  31) {
    var AttackIV = 1
} else {
    var AttackIV = 0
}
if (DefenseIV == 1 || DefenseIV == 3 || DefenseIV == 5 || DefenseIV == 7 || DefenseIV == 9 || DefenseIV == 11 || DefenseIV == 13|| DefenseIV == 15 || DefenseIV == 17 || DefenseIV == 19 || DefenseIV == 21 || DefenseIV == 23 || DefenseIV ==  25 || DefenseIV == 27 || DefenseIV == 29 || DefenseIV ==  31) {
    var DefenseIV = 1
} else {
    var DefenseIV = 0
}
if (SpeedIV == 1 || SpeedIV == 3 || SpeedIV == 5 || SpeedIV == 7 || SpeedIV == 9 || SpeedIV == 11 || SpeedIV == 13|| SpeedIV == 15 || SpeedIV == 17 || SpeedIV == 19 || SpeedIV == 21 || SpeedIV == 23 || SpeedIV ==  25 || SpeedIV == 27 || SpeedIV == 29 || SpeedIV ==  31) {
    var SpeedIV = 1
} else {
    var SpeedIV = 0
}
if (SpAtkIV == 1 || SpAtkIV == 3 || SpAtkIV == 5 || SpAtkIV == 7 || SpAtkIV == 9 || SpAtkIV == 11 || SpAtkIV == 13|| SpAtkIV == 15 || SpAtkIV == 17 || SpAtkIV == 19 || SpAtkIV == 21 || SpAtkIV == 23 || SpAtkIV ==  25 || SpAtkIV == 27 || SpAtkIV == 29 || SpAtkIV ==  31) {
    var SpAtkIV = 1
} else {
    var SpAtkIV = 0
}
if (SpDefIV == 1 || SpDefIV == 3 || SpDefIV == 5 || SpDefIV == 7 || SpDefIV == 9 || SpDefIV == 11 || SpDefIV == 13|| SpDefIV == 15 || SpDefIV == 17 || SpDefIV == 19 || SpDefIV == 21 || SpDefIV == 23 || SpDefIV ==  25 || SpDefIV == 27 || SpDefIV == 29 || SpDefIV ==  31) {
    var SpDefIV = 1
} else {
    var SpDefIV = 0
}

var tota = Math.floor(((HPIV + (2 * AttackIV) + (4 * DefenseIV) + (8 * SpeedIV) + (16 * SpAtkIV) + (32 * SpDefIV)) * 15) / 63)


if (tota == "0") {
    const fightingtype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xDC7633)
  .setDescription(`Type: Fighting`)

    message.channel.send("",{
  embed: fightingtype
}).catch(console.error);
}
if (tota == "1") {
        const flyingtype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x9696FF)
  .setDescription(`Type: Flying`)

    message.channel.send("",{
  embed: flyingtype
}).catch(console.error);
}
if (tota == "2") {
        const poisontype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xC814FF)
  .setDescription(`Type: Poison`)

    message.channel.send("",{
  embed: poisontype
}).catch(console.error);
}
if (tota == "3") {
        const groundtype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xC89B00)
  .setDescription(`Type: Ground`)

    message.channel.send("",{
  embed: groundtype
}).catch(console.error);
}
if (tota == "4") {
        const rocktype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xE59866)
  .setDescription(`Type: Rock`)

    message.channel.send("",{
  embed: rocktype
}).catch(console.error);
}
if (tota == "5") {
        const bugtype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x007D00)
  .setDescription(`Type: Bug`)

    message.channel.send("",{
  embed: bugtype
}).catch(console.error);
}
if (tota == "6") {
        const ghosttype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x640096)
  .setDescription(`Type: Ghost`)

    message.channel.send("",{
  embed: ghosttype
}).catch(console.error);
}
if (tota == "7") {
        const steeltype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x646464)
  .setDescription(`Type: Steel`)

    message.channel.send("",{
  embed: steeltype
}).catch(console.error);
}
if (tota == "8") {
        const firetype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xFF9600)
  .setDescription(`Type: Fire`)

    message.channel.send("",{
  embed: firetype
}).catch(console.error);
}
if (tota == "9") {
        const watertype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x0000C8)
  .setDescription(`Type: Water`)

    message.channel.send("",{
  embed: watertype
}).catch(console.error);
}
if (tota == "10") {
        const grasstype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x00C800)
  .setDescription(`Type: Grass`)

    message.channel.send("",{
  embed: grasstype
}).catch(console.error);
}
if (tota == "11") {
        const electrictype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xE7C332)
  .setDescription(`Type: Electric`)

    message.channel.send("",{
  embed: electrictype
}).catch(console.error);
}
if (tota == "12") {
        const psychictype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0xF032E1)
  .setDescription(`Type: Psychic`)

    message.channel.send("",{
  embed: psychictype
}).catch(console.error);
}
if (tota == "13") {
        const icetype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x32E7E4)
  .setDescription(`Type: Ice`)

    message.channel.send("",{
  embed: icetype
}).catch(console.error);
}
if (tota == "14") {
        const dragontype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x9B32E7)
  .setDescription(`Type: Dragon`)

    message.channel.send("",{
  embed: dragontype
}).catch(console.error);
}
if (tota == "15") {
        const darktype = new discord.RichEmbed()
  .setTitle('Hidden Power')
  .setColor(0x5A4326)
  .setDescription(`Type: Dark`)

    message.channel.send("",{
  embed: darktype
}).catch(console.error);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hp',
  description: 'Gives you your Hidden Power type ',
  usage: 'hp [HP ATK DEF SPATK SPDEF SPEED]'
};