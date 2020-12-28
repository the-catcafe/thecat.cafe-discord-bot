const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const path = require('path')
module.exports = {
  name: "senpai",
  description: "notice me senpai",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync(path.join(__dirname, "../assets/sounds/touchmesenpai.mp3"));
    const attachment = new MessageAttachment(buffer, "touchmesenpai.mp3");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  },
};
