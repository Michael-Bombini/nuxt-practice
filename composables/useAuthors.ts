import type { User } from "~/models/User";

export const useAuthors = () => useState<User[]>("authors", () => []);
