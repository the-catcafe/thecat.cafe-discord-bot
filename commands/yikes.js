const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const path = require("path");
module.exports = {
  name: "yikes",
  description: "Yoshi Yikes",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync(path.join(__dirname, "../assets/images/Yoshi_come_on.gif"));
    const attachment = new MessageAttachment(buffer, "yoshi.gif");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  },
};
