import dotenv from "dotenv";
dotenv.config();
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";


const port: number | string = process.env.PORT || 4000;
const playground: string = "/playground";
const endpoint: string = "/graphql";

const appOptions: Options = {
  port,
  playground,
  endpoint
};

const handleAppStart = () => console.log(`Listening on port ${port}`);

createConnection(connectionOptions)
  .then(() => {
    app.start(appOptions, handleAppStart);
  })
  .catch(error => {
    console.error(error);
    console.log("########### error #########");
  });
