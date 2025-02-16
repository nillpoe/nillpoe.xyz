import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "벌체이스 | 풀스택 개발자, 호예준",
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
    return children;
};