import { Greeting } from "../../../types/graph";

const resolvers = {
  Query: {
    sayHello: (): Greeting => ({
      error: false,
      text: "love2"
    })
  }
};

export default resolvers;
