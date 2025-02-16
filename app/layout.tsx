import type {Metadata} from "next";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import {ThemeProvider} from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./styles/globals.css";

export const metadata: Metadata = {
    title: "풀스택 개발자, 호예준 포트폴리오",
    description: "Next.js, Java, Kotlin 개발자, 호예준 (닐포) 포트폴리오 입니다.",
    openGraph: {
        images: [
            {url: "https://cdn.nillpoe.xyz/images/pfp.png"}
        ]
    },
    icons: "https://cdn.nillpoe.xyz/images/Starly2_2.png"
};

export default function RootLayout({
   children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className="antialiased">
            <ThemeProvider>
            <NextTopLoader color="#235ee0" showSpinner={false}/>
            <div className="bg-background min-h-screen flex flex-col">
                {children}
                <Analytics/>
                <SpeedInsights/>
            </div>
            </ThemeProvider>
        </body>
        </html>
    );
}
