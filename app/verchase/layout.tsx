import type {Metadata} from "next";
import React from "react";
import VerchaseNavbar from "@/components/verchase-navbar";

export const metadata: Metadata = {
    title: "벌체이스 | 풀스택 개발자, 호예준"
};

export default function SubLayout({
                                      children
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <VerchaseNavbar/>
            {children}
        </main>
    );
};