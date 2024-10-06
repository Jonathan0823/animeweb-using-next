import githubAuth from "next-auth/providers/github";


export const authOption = {
    providers: [
        githubAuth({
            clientId: process.env.GITHUB_CLIENT as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
};