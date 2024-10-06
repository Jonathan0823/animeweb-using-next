import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";
import { NextApiHandler } from "next";

if (!process.env.GITHUB_CLIENT || !process.env.GITHUB_SECRET || !process.env.NEXTAUTH_SECRET) {
    throw new Error("Missing environment variables for GitHub authentication or NextAuth secret.");
}

export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOption);

export { handler as GET, handler as POST };
