import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
export default NuxtAuthHandler({
  secret: process.env.SIDEBASE_SECRET,
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.AUTH_CLIENT,
      clientSecret: process.env.AUTH_SECRET,
    }),
  ],
});
