"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {motion} from "framer-motion";
import Link2 from "next/link";
import React from "react";
import Image from "next/image";
import CircularText from "@/components/ui/circular-text";
import CountUp from "@/components/ui/count-up";
import Link from "@/components/ui/link";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Page = () => {
    const Navbar = () => (
        <nav className="fixed top-0 left-0 right-0 z-30 h-[45px] w-full flex justify-between items-center pl-2.5 pr-3 backdrop-blur-md border-b border-neutral-500/50">
            <div className="flex items-center">
                <Breadcrumb className="ml-2">
                    <BreadcrumbList className="gap-1">
                        <BreadcrumbItem className="max-xl:hidden">
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/">💫 풀스택 개발자, 호예준 포트폴리오</Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="max-xl:hidden">/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/starly" className="flex items-center gap-1">
                                    <Image alt="스탈리 로고" src="https://cdn.nillpoe.xyz/images/Starly2_2.png"
                                           width={16} height={16}
                                           className="h-4 w-4"/>
                                    <span>스탈리</span>
                                </Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/starly/closed">📣 스탈리 서비스 종료</Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </nav>
    );

    const Article = () => (
        <motion.article
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="p-4 flex flex-col gap-y-5 justify-center"
        >
            <h1 className="max-xl:text-4xl text-5xl font-semibold my-6">📣 스탈리 서비스 종료</h1>
            <div className="flex max-xl:flex-col justify-between">
                <div>
                    <p className="font-semibold">스탈리는 2024년 10월 30일을 끝으로 서비스를 종료합니다.</p>
                    <p>
                        <span>그동안 스탈리와 함께 해주신 </span>
                        <CountUp
                            from={500}
                            to={1500}
                            separator=","
                            direction="up"
                            duration={0.5}
                            className="count-up-text"/>
                        <span>명의 고객분들께 감사드립니다.</span>
                    </p>
                    <p className="mt-2.5">
                        스탈리에서 제작한 플러그인에 대한 기술 지원은 더 이상 받으실 수 없습니다.
                    </p>
                    <div className="mt-2.5 flex gap-x-2">
                        <Link target="_blank" href="https://github.com/StarlyTeam">Github</Link>
                        <span className="text-neutral-100/85"> &ndash; </span>
                        <Link href="/starly/archive">스탈리 아카이브</Link>
                    </div>
                    <Separator className="my-4"/>
                    <p className="font-semibold">문의는 아래중 하나로 부탁드립니다.</p>
                    <div className="w-full mt-2 grid grid-cols-2 gap-4 text-neutral-100/85 sm:grid-cols-3">
                        <div>
                            <p>디스코드</p>
                            <Link target="_blank" href="https://discord.com/users/1102166553027432488">@nillpoe</Link>
                        </div>
                        <div>
                            <p>텔레그램</p>
                            <Link target="_blank" href="https://t.me/nillpoe">@nillpoe</Link>
                        </div>
                        <div>
                            <p>이메일</p>
                            <Link target="_blank" href="mailto:hello@nillpoe.xyz">hello@nillpoe.xyz</Link>
                        </div>
                    </div>
                </div>
                <Separator className="xl:hidden my-4"/>
                <div className="min-h-full flex flex-col justify-center">
                    <CircularText
                        text="STARLY*CLOSED*"
                        spinDuration={5}
                        className="w-[150px] h-[150px]"
                    />
                </div>
            </div>
        </motion.article>
    );

    const FAQ = () => (
        <motion.section
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5}}
            className="p-4 flex flex-col gap-y-2.5 justify-center"
        >
            <h3 className="text-xl font-bold">자주 묻는 질문</h3>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold">
                        무료 플러그인 홍보글을 보고왔어요. 어디서 다운로드 받을 수 있나요?
                    </AccordionTrigger>
                    <AccordionContent className="flex">
                        <Link href="/starly/archive">스탈리 아카이브</Link>
                        <span>에서 다운로드 받으실 수 있습니다.</span>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-semibold">
                        유료 플러그인을 구매했는데, 기술지원을 받을 수 있나요?
                    </AccordionTrigger>
                    <AccordionContent>
                        네. 2025년 03월 31일까지 기술지원을 받으실 수 있습니다.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.section>
    );

    const Footer = () => (
        <motion.footer
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.7}}
            className="p-4 h-full flex flex-col justify-end"
        >
            <div className="w-full flex items-center justify-between">
                <p className="text-neutral-400 font-bold">스탈리 · 호예준 ⓒ 2025, 모든 권리 보유.</p>
                <p className="text-neutral-400 font-normal">STARLY.KR</p>
            </div>
        </motion.footer>
    );

    return (
        <main className="h-full flex flex-col justify-center items-center">
            <Navbar/>
            <div className="min-h-screen max-xl:w-full w-[860px] pt-[45px] z-10">
                <Article/>
                <Separator className="w-[calc(100%-2rem)] mx-4 xl:my-6"/>
                <FAQ/>
                <Separator className="w-[calc(100%-2rem)] mx-4 mt-6"/>
                <Footer/>
            </div>
        </main>
    );
};

export default Page;