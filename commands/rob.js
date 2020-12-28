const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const path = require("path");
module.exports = {
  name: "rob",
  description: "laugh like robtar",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync(path.join(__dirname, "../assets/images/meme_kid.png"));
    const attachment = new MessageAttachment(buffer, "meme_kid.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  },
};
