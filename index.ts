import { WebServer } from "./lib/webServer.js";
import { mongo } from "./lib/mongo.js";


// Web Server
const webServer: WebServer = new WebServer(mongo);
await webServer.start();
