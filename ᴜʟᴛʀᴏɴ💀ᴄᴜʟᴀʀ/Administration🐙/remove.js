// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `remove`,
  commandType: "Administration๐",
  description: `Use this module to remove people from a group by tagging them  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or replying to them  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isGroup) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `module only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isBotGroupAdmin) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Sorry, don't have permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      let owner = แดสแดสแดษด.chatId.split(`-`)[0];
      if (แดสแดสแดษด.isReply) {
        let PersonToRemove =
          chat.message.extendedTextMessage.contextInfo.participant;
        if (PersonToRemove === owner + `@s.whatsapp.net`) {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        }
        if (PersonToRemove === แดสแดสแดษด.owner) {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!๐ฅบ\n*Request Rejected.* ๐ค`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        }
        var isMember = async (chatId, groupMembers) => {
          var isMember = false;
          if (!(chatId === undefined)) {
            for (const index in groupMembers) {
              if (chatId == groupMembers[index].jid.split(`@`)[0]) {
                isMember = true;
              }
            }
            return isMember;
          } else {
            return isMember;
          }
        };
        if (!isMember) {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `*person is not in the group*`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
        }
        try {
          if (PersonToRemove) {
            ฯโััฯฮทโฮนัฮทั
              .groupRemove(แดสแดสแดษด.chatId, [PersonToRemove])
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          }
        } catch (cแดสสแดส) {
          throw cแดสสแดส;
        }
        return;
      }
      if (!Arc[0]) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (Arc[0][0] == `@`) {
        const number = Arc[0].substring(1);
        if (isNaN(number)) {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        }

        if (number + `@s.whatsapp.net` === แดสแดสแดษด.owner) {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `Why man, why?! Why would you use my powers to remove myself from the group?!๐ฅบ\n*Request Rejected.* ๐ค`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        }

        if (!(number === owner)) {
          ฯโััฯฮทโฮนัฮทั
            .groupRemove(แดสแดสแดษด.chatId, [number + `@s.whatsapp.net`])
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        } else {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `*` + owner + ` is the owner of the group*`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
          return;
        }
      }
      ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          `Reply to the person you want to remove or tag them.\n\nFor instance,  *${UltronSitreper.ULTRONIX}remove @<person-to-remove>*  or reply using  *${UltronSitreper.ULTRONIX}remove*${UltronSitreper.ULTRONIX}`,
          MessageType.text
        )
        .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
    } catch (cแดสสแดส) {
      await ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId,
        `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
        MessageType.text
      );
      return;
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
