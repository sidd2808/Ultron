// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
const UltronSitreper = require("./UltronSitreper");
var ÆÊÉ®ÖÊÉ¢ÆÊÇ = require("./á´Êá´Êá´É´ÆÊÇ");
const Kolor = require("chalk");
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
exports.resolve = function (messageInstance, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, groupMetadata) {
  var á´Êá´Êá´É´ = new ÆÊÉ®ÖÊÉ¢ÆÊÇ();
  var prefix = UltronSitreper.ULTRONIX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = UltronSitreper.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYÎ£Ð¯Ð¯) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYÎ£Ð¯Ð¯));
  }
  á´Êá´Êá´É´.chatId = messageInstance.key.remoteJid || "";
  á´Êá´Êá´É´.fromMe = messageInstance.key.fromMe;
  á´Êá´Êá´É´.owner = ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.user.jid || "";
  á´Êá´Êá´É´.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  á´Êá´Êá´É´.type =
    á´Êá´Êá´É´.mimeType === "imageMessage"
      ? "image"
      : á´Êá´Êá´É´.mimeType === "videoMessage"
      ? "video"
      : á´Êá´Êá´É´.mimeType === "conversation" ||
        á´Êá´Êá´É´.mimeType == "extendedTextMessage"
      ? "text"
      : á´Êá´Êá´É´.mimeType === "audioMessage"
      ? "audio"
      : á´Êá´Êá´É´.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  á´Êá´Êá´É´.isReply =
    á´Êá´Êá´É´.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  á´Êá´Êá´É´.replyMessageId =
    á´Êá´Êá´É´.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  á´Êá´Êá´É´.replyMessage =
    á´Êá´Êá´É´.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  á´Êá´Êá´É´.replyParticipant =
    á´Êá´Êá´É´.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  á´Êá´Êá´É´.body =
    á´Êá´Êá´É´.mimeType === "conversation"
      ? messageInstance.message.conversation
      : á´Êá´Êá´É´.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : á´Êá´Êá´É´.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : á´Êá´Êá´É´.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : á´Êá´Êá´É´.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  á´Êá´Êá´É´.isCmd = prefixRegex.test(á´Êá´Êá´É´.body);
  á´Êá´Êá´É´.moduleName = á´Êá´Êá´É´.isCmd
    ? á´Êá´Êá´É´.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  á´Êá´Êá´É´.isImage = á´Êá´Êá´É´.type === "image";
  á´Êá´Êá´É´.isReplyImage = á´Êá´Êá´É´.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  á´Êá´Êá´É´.imageCaption = á´Êá´Êá´É´.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  á´Êá´Êá´É´.isGIF =
    á´Êá´Êá´É´.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  á´Êá´Êá´É´.isReplyGIF = á´Êá´Êá´É´.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  á´Êá´Êá´É´.isSticker = á´Êá´Êá´É´.type === "sticker";
  á´Êá´Êá´É´.isReplySticker = á´Êá´Êá´É´.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  á´Êá´Êá´É´.isReplyAnimatedSticker = á´Êá´Êá´É´.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  á´Êá´Êá´É´.isVideo =
    á´Êá´Êá´É´.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  á´Êá´Êá´É´.isReplyVideo = á´Êá´Êá´É´.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  á´Êá´Êá´É´.isAudio = á´Êá´Êá´É´.type === "audio";
  á´Êá´Êá´É´.isReplyAudio = á´Êá´Êá´É´.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  á´Êá´Êá´É´.logGroup = ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.user.jid || "";
  á´Êá´Êá´É´.isGroup = á´Êá´Êá´É´.chatId.endsWith("@g.us");
  á´Êá´Êá´É´.isPm = !á´Êá´Êá´É´.isGroup;
  á´Êá´Êá´É´.sender =
    á´Êá´Êá´É´.isGroup && messageInstance.message && á´Êá´Êá´É´.fromMe
      ? á´Êá´Êá´É´.owner
      : á´Êá´Êá´É´.isGroup && messageInstance.message
      ? messageInstance.participant
      : !á´Êá´Êá´É´.isGroup
      ? á´Êá´Êá´É´.chatId
      : "";
  á´Êá´Êá´É´.groupName = á´Êá´Êá´É´.isGroup ? groupMetadata.subject : "";
  á´Êá´Êá´É´.groupMembers = á´Êá´Êá´É´.isGroup ? groupMetadata.participants : "";
  á´Êá´Êá´É´.groupAdmins = á´Êá´Êá´É´.isGroup
    ? getGroupAdmins(á´Êá´Êá´É´.groupMembers)
    : "";
  á´Êá´Êá´É´.groupId = á´Êá´Êá´É´.isGroup ? groupMetadata.id : "";
  á´Êá´Êá´É´.isSenderSUDO = SUDOstring.includes(
    á´Êá´Êá´É´.sender.substring(0, á´Êá´Êá´É´.sender.indexOf("@"))
  );
  á´Êá´Êá´É´.isBotGroupAdmin = á´Êá´Êá´É´.isGroup
    ? á´Êá´Êá´É´.groupAdmins.includes(á´Êá´Êá´É´.owner)
    : false;
  á´Êá´Êá´É´.isSenderGroupAdmin = á´Êá´Êá´É´.isGroup
    ? á´Êá´Êá´É´.groupAdmins.includes(á´Êá´Êá´É´.sender)
    : false;

  return á´Êá´Êá´É´;
};
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
