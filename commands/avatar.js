const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Displays a users avatar.",
  aliases: ["icon", "pfp"],
  execute(message, args) {
    if (!message.mentions.users.size) {
      const AuthorEmbed = new MessageEmbed()
      .setTitle(`${message.author.username}'s avatar`)
      .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }));
      return message.channel.send(AuthorEmbed);
    } else {
    message.mentions.users.map((user) => {
      const MentionEmbed = new MessageEmbed()
      .setTitle(`${user.username}'s avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }));
      return message.channel.send(MentionEmbed);
    });
    }
  },
};
