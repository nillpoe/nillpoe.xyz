import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "스탈리 | 풀스택 개발자, 호예준",
    openGraph: {
        images: [
            {url: "https://cdn.nillpoe.xyz/images/Starly2_1.png"}
        ]
    },
    icons: `https://${process.env.NEXT_PUBLIC_DOMAIN}/_next/image?url=https%3A%2F%2Fcdn.nillpoe.xyz%2Fimages%2FStarly2_2.png&w=16&q=75`
};

export default function SubLayout({
                                      children
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
};