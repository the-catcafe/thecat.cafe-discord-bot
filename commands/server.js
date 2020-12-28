const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "server",
  description: "Displays server information.",
  guildOnly: true,
  execute(message, args) {
    const embed = new MessageEmbed()
      .setTitle(``)
      .setAuthor(`${message.guild.name}`, ``, `https://discord.gg/s45RzxDYHU`)
      .setColor(0xff0000)
      .setThumbnail(`${message.guild.iconURL({ dynamic: true, size: 4096 })}`)
      .addField(`Owner:`, `${message.guild.owner}`)
      .addField(`Created on:`, `${message.guild.createdAt}`)
      .addField(`Server Region:`, ` ${message.guild.region}`)
      .addField(`Members:`, ` ${message.guild.memberCount}`)
      .addField(`Boost Level:`, ` ${message.guild.premiumTier}`)
      .addField(`Total Boosts:`, ` ${message.guild.premiumSubscriptionCount}`)
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  },
};
