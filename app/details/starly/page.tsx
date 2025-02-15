"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link2 from "next/link";
import React from "react";
import Image from "next/image";

const Starly = () => {
    const Navbar = () => (
        <nav className="max-xl:hidden fixed top-0 left-0 right-0 z-50 h-[45px] w-full flex justify-between items-center pl-2.5 pr-3 backdrop-blur-md border-b border-neutral-500/50">
            <div className="flex items-center">
                <Breadcrumb className="ml-2">
                    <BreadcrumbList className="gap-1">
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/">💫 풀스택 개발자, 호예준 포트폴리오</Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/details/starly" className="flex items-center gap-1">
                                    <Image alt="스탈리 로고" src="https://cdn.nillpoe.xyz/images/Starly2_2.png"
                                           width={16} height={16}
                                           className="h-4 w-4"/>
                                    <span>스탈리</span>
                                </Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </nav>
    );

    const UnderConstruction = () => (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">🚧 Under Construction 🚧</h1>
            <p className="text-lg">이 페이지는 현재 작업 중입니다. 조금만 기다려주세요!</p>
        </div>
    );

    return (
        <main className="h-full flex flex-col justify-center items-center">
            <Navbar/>
            <UnderConstruction/>
        </main>
    )
};

export default Starly;