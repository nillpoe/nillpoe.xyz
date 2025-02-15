import type {Metadata} from "next";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import {ThemeProvider} from "@/components/theme/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
    title: "풀스택 개발자, 호예준 포트폴리오",
    description: "풀스택 개발자, 호예준 (닐포) 포트폴리오. Next.js, Java, Kotlin를 주로 사용합니다."
};

export default function RootLayout({
   children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className="scroll-smooth antialiased">
            <ThemeProvider>
            <NextTopLoader color="#235ee0" showSpinner={false}/>
            <div className="bg-background min-h-screen flex flex-col">
                {children}
            </div>
            </ThemeProvider>
        </body>
        </html>
    );
}
