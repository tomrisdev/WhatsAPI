import { Client } from "whatsapp-web.js";
import { Filters } from "./filters";

function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

class DefaultOptions {
  options: any;
  constructor(defaultOptions: boolean = true) {
    this.options = { qrMaxRetries: 3 };
  }
}

class ClientUtil {
  name: string;
  client: Client;
  filters!: Filters;
  options!: DefaultOptions;
  responses: any = [];
  constructor(client: Client, options: DefaultOptions = new DefaultOptions()) {
    this.name = "WhatsApp Web PyJs API Wrapper";
    this.client = client;
    this.options = options;
  }

  async messageBoomber(
    target_chat: string = "123456789@c.us",
    default_message: string = "ping pong",
    messages_per_each: string[] = [],
    times: number = 5,
    delay: number = 3,
    delay_message: string | boolean = false
  ) {
    if (times) {
      if (messages_per_each && messages_per_each.length >= 1) {
        sleep(delay);
        return await this.client.sendMessage(target_chat, default_message);
      }

      for (let i = 0; i < times; i++) {
        console.log((i + 1).toString() + ". mesaj gönderildi.");
        sleep(delay);
        this.responses.push(
          await this.client.sendMessage(target_chat, default_message)
        );
      }
      return this.responses;
    }
  }
}

export { ClientUtil, DefaultOptions, sleep };
