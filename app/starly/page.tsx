"use client";

import React from "react";
import Link from "@/components/ui/link";
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

    const UnderConstruction = () => (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">작업中</h1>
            <p className="text-lg">이 페이지는 현재 작업 중입니다.</p>
            <ChildNavigator/>
        </div>
    );

    const ChildNavigator = () => (
        <div className="flex gap-x-1.5 mt-4">
            <Link href="/starly/archive">아카이브</Link>
            <span>|</span>
            <Link href="/starly/closed">서비스 종료</Link>
        </div>
    );

    return (
        <>
            <MobileWarningBanner/>
            <UnderConstruction/>
        </>
    )
};

export default Page;