const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const path = require("path");
module.exports = {
  name: "ugh",
  description: "ugh",
  execute(message, args) {
    // Get the buffer from the 'file', assuming that the file exists
    const buffer = fs.readFileSync(path.join(__dirname, "../assets/images/ughlink.png"));
    const attachment = new MessageAttachment(buffer, "ugh.png");
    // Send the attachment in the message channel with a content
    message.channel.send(attachment);
  },
};
