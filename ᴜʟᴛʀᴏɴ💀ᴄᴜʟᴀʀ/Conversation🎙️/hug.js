// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const Anime_Images = require(`anime-images-api`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const download = require(`download-file`);
const ffmpeg = require(`fluent-ffmpeg`);
const Kolor = require(`chalk`);
const API = new Anime_Images();
const fs = require(`fs`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `hug`,
  commandType: "Conversation๐๏ธ",
  description: `I know you like anime hug`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    let {
      image
    } = await API.sfw.hug();
    if (image === undefined) {
      return await ฯโััฯฮทโฮนัฮทั.sendMessage(
        แดสแดสแดษด.chatId, {
          url: `https://i.postimg.cc/KcNwHtZt/ltr.png`
        },
        MessageType.image, {
          mimetype: Mimetype.png,
          caption: `Seems Like No Image Was Found.\nPlease Try Again Later!`,
        }
      );
    } else {
      console.log(image);
      download(
        image, {
          directory: `./แดแดแดแด/`,
          filename: `hug-${chat.key.id}.gif`,
        },
        function (err) {
          0;
          if (err) {
            return console.log(err);
          } else console.log(`Download Done...`);
          const FP = `./แดแดแดแด/hug-${chat.key.id}.gif`;
          const SP = `./แดแดแดแด/hug-${chat.key.id}.webp`;
          ffmpeg(FP)
            .duration(8)
            .outputOptions([
              `-y`,
              `-vcodec libwebp`,
              `-lossless 1`,
              `-qscale 1`,
              `-preset default`,
              `-loop 0`,
              `-an`,
              `-vsync 0`,
              `-s 600x600`,
            ])
            .videoFilters(
              `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,
format=rgba,
pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,
setsar=1`
            )
            .save(SP)
            .on(`end`, async () => {
              await ฯโััฯฮทโฮนัฮทั
                .sendMessage(
                  แดสแดสแดษด.chatId,
                  fs.readFileSync(SP),
                  MessageType.sticker
                )
                .catch((CYฮฃะฏะฏ) =>
                  ฯโััฯฮทโฮนัฮทั.sendMessage(
                    แดสแดสแดษด.chatId,
                    `๊ฑแดแดแดแดสษชษดษข แดกแดษดแด แดกสแดษดษข.สแดสแด แดสแด ๊ฑแดแดแด สแดษข๊ฑ ๊ฑษชษดแดแด แดกสแดษด แดสแด สแดแด แดกแด๊ฑ ษดแดแด สแด๊ฑแดแดษดแดษชษดษข แด๊ฑ แดxแดแดแดแดแดแด.

โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${CYฮฃะฏะฏ}


๐ก๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ โข ${แดสแดสแดษด.commandName}
๐ฎ๐๐ ๐๐ฎ๐ ๐ฃ๐?? โข ${แดสแดสแดษด.isPm}`,
                    MessageType.text
                  )
                );
              fs.unlink(FP, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(Kolor.redBright(cแดสสแดส));
                } else {
                  console.log(Kolor.greenBright(`Deleted> ${FP}`));
                }
              });
              fs.unlink(SP, (cแดสสแดส) => {
                if (cแดสสแดส) {
                  console.log(Kolor.redBright(cแดสสแดส));
                } else {
                  console.log(Kolor.greenBright(`Deleted> ${SP}`));
                }
              });
            });
        }
      );
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================