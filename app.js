const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const myGroupName = process.env.GROUP_NAME; // Group name in String

const participantsToKeep = require('./participants.json'); // Array of participants to keep

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
  client.getChats().then((chats) => {
    const myGroup = chats.find(
      (chat) => chat.name.toLowerCase() === myGroupName.toLowerCase()
    );
    const participants = myGroup.participants;
    const participantsToRemove = [];
    participants.forEach(p => {
      if (participantsToKeep.indexOf(p.id.user) === -1) {
        if(!p.isAdmin && !p.isSuperAdmin) {
          participantsToRemove.push(p.id._serialized);
        }
      }
    });
    myGroup.removeParticipants(participantsToRemove)
    .then(data => console.log(data))
    .catch(err => console.log(err));
  });
});

client.initialize();
