import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "스탈리 아카이브",
    description: "\"스탈리를 기억합니다.\"\n2022년부터 2024년까지 배포·판매된 대부분의 플러그인을 무료로 공개합니다.",
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