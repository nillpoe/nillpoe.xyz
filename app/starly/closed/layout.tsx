import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "스탈리 서비스 종료 | 풀스택 개발자, 호예준",
    description: "마인크래프트 플러그인 전문 제작업체 스탈리가 2024년 10월 30일을 끝으로 서비스를 종료합니다.",
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