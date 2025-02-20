import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.nillpoe.xyz",
                port: "",
                pathname: "/images/**",
                search: ""
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
                pathname: "/avatars/**",
                search: ""
            },
            {
                protocol: "https",
                hostname: "discord.com",
                port: "",
                pathname: "/assets/**",
                search: ""
            },
            {
                protocol: "https",
                hostname: "gofile.io",
                port: "",
                pathname: "/**",
                search: ""
            }
        ]
    }
};

export default nextConfig;