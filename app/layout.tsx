import type {Metadata} from "next";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import {ThemeProvider} from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./styles/globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    title: "풀스택 개발자, 호예준 포트폴리오",
    description: "Next.js, Java, Kotlin 개발자 호예준(닐포) 포트폴리오입니다.",
    icons: "https://cdn.nillpoe.xyz/images/Starly2_2.png"
};

export default function RootLayout({
   children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <head>
            <Script async src="https://tally.so/widgets/embed.js"/>
        </head>
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
