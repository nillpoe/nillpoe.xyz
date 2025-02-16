import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "스탈리 아카이브",
    description: "2022년부터 2024년까지 스탈리에서 배포·판매된 플러그인을 무료로 공개합니다."
};

export default function SubLayout({
                                      children
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
};