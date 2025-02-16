import type {Metadata} from "next";
import React from "react";
import StarlyNavbar from "@/components/starly-navbar";

export const metadata: Metadata = {
    title: "스탈리 | 풀스택 개발자, 호예준",
    openGraph: {
        images: [
            {url: "https://cdn.nillpoe.xyz/images/Starly2_1.png"}
        ]
    }
};

export default function SubLayout({
                                      children
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <StarlyNavbar/>
            {children}
        </main>
    );
};