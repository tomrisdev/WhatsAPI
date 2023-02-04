import { Client } from "whatsapp-web.js";

enum IGNORE {
  CASE = "IGNORE-CASE",
  WHITESPACE = "IGNORE-WHITESPACE",
}

class Filters {
  client!: Client;
  content!: string;
  constructor(client: Client, content: string) {
    this.client = client;
    this.content = content;
  }

  command(
    command: string,
    seperators: string | string[],
    ignore: string = IGNORE.CASE
  ) {
    switch (ignore) {
      case IGNORE.CASE:
        this.content = this.content.toLowerCase();
      case IGNORE.WHITESPACE:
        this.content = this.content.trim();
    }
    return this.content.indexOf(seperators + command) ? true : false;
  }
}
export { Filters, IGNORE };
