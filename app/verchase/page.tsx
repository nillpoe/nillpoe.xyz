"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link2 from "next/link";
import Image from "next/image";
import React from "react";
import {Smartphone} from "lucide-react";

const Page = () => {
    const MobileWarningBanner = () => (
        <div
            className="xl:hidden fixed top-0 left-0 right-0 z-40 h-[50px] w-screen flex items-center pl-2.5 pr-3 bg-neutral-50">
            <div className="flex gap-x-2 items-center text-destructive xl:hidden">
                <Smartphone
                    className="w-8 h-8 p-0.5 rounded-sm hover:bg-foreground/20 transition-colors animate-pulse"/>
                <p className="text-sm">
                    아직 모바일/태블릿 환경은 지원되지 않습니다.<br/>
                    데스크탑으로 방문해주세요.
                </p>
            </div>
        </div>
    );

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
                                <Link2 href="/verchase" className="flex items-center gap-1">
                                    <Image alt="벌체이스 로고" src="https://cdn.nillpoe.xyz/images/Verchase.png"
                                           width={16} height={16}
                                           className="h-4 w-4"/>
                                    <span>벌체이스</span>
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
            <h1 className="text-4xl font-bold">작업中</h1>
            <p className="text-lg">이 페이지는 현재 작업 중입니다.</p>
        </div>
    );

    return (
        <main className="h-full flex flex-col justify-center items-center">
            <MobileWarningBanner/>
            <Navbar/>
            <UnderConstruction/>
        </main>
    )
};

export default Page;