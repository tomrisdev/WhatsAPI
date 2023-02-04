import { enums } from "./enums";
import { Client, Message, LocalAuth } from "whatsapp-web.js";
import * as qrcode from "qrcode-terminal";
import { Filters, IGNORE } from "./filters";
import { ClientUtil } from "./utils";

const client = new Client({
  qrMaxRetries: 3,
  authStrategy: new LocalAuth({ clientId: "client-one" }),
});
const util = new ClientUtil(client);

client.on(enums.AUTH.QR, (qr: string) => {
  qrcode.generate(qr, { small: true, type: "terminal" }, (qr) => {
    if (qr) console.log(qr);
  });
});

client.on(enums.MESSAGES.MESSAGE_CREATE, (message: Message) => {
  util.messageBoomber(message.from);
  console.log("New message: " + message.body.toLowerCase().trim().slice(0, 30));
});

client.initialize();
