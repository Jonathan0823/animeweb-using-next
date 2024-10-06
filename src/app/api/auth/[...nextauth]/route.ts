import NextAuth from "next-auth";
import { NextApiHandler } from "next";
import { authOption } from "./authoption";

if (!process.env.GITHUB_CLIENT || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
    throw new Error("Missing environment variables for GitHub authentication or NextAuth secret.");
}

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOption);

export { handler as GET, handler as POST };
