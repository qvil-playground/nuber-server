import { Options } from "graphql-yoga";
import app from "./app";

const port: number | string = process.env.PORT || 4000;
const playground: string = "/playground";
const endpoint: string = "/graphql";

const appOptions: Options = {
  port,
  playground,
  endpoint
};

const handleAppStart = () => console.log(`Listening on port ${port}`);

app.start(appOptions, handleAppStart);
