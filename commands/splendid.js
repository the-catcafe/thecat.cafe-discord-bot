const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const path = require("path");
module.exports = {
  name: "splendid",
  description: "Brochafaunt splendid",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync(path.join(__dirname, "../assets/images/splendid.png"));
    const attachment = new MessageAttachment(buffer, "splendid.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  },
};
