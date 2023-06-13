import express from "express";
import {bindFlmngr} from "@flmngr/flmngr-server-node-express";
import 'dotenv/config';

// Create Express app
const app = express();

// Let Flmngr to serve URLs on your webserver
bindFlmngr({
    app: app,
    urlFileManager: process.env.urlFileManager as string,
    urlFiles: process.env.urlFiles as string,
    dirFiles: process.env.dirFiles as string
});

process.on('uncaughtException', (err, origin) => {
    console.log("3");
    console.log(err);

});

app.listen(
    parseInt(process.env.port as string),
    process.env.host as string,
    function() {
        // Server started successfully
        console.log("Express server with Flmngr started on http://" + process.env.host + ":" + process.env.port);
    }
);