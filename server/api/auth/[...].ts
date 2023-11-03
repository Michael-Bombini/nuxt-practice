import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.AUTH_CLIENT,
      clientSecret: process.env.AUTH_SECRET,
    }),
  ],
});
