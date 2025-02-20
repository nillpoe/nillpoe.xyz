"use client";

import {motion} from "framer-motion";
import React from "react";
import CircularText from "@/components/ui/circular-text";
import CountUp from "@/components/ui/count-up";
import Link from "@/components/ui/link";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Social from "@/components/social";

const Page = () => {
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
                        <Link href="/starly/archive">아카이브</Link>
                    </div>
                    <Separator className="my-4"/>
                    <p className="font-semibold">문의는 아래중 하나로 부탁드립니다.</p>
                    <Social telegram email/>
                </div>
                <Separator className="xl:hidden my-4"/>
                <div className="min-h-full flex flex-col justify-center">
                    <CircularText
                        text="STARLY*CLOSED*"
                        spinDuration={5}
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
                <p className="text-neutral-400 font-bold">스탈리 ⓒ {new Date().getFullYear()}, 모든 권리 보유.</p>
                <p className="text-neutral-400 font-normal">STARLY.KR</p>
            </div>
        </motion.footer>
    );

    return (
        <div className="min-h-screen max-xl:w-full w-[860px] pt-[45px] z-10">
            <Article/>
            <Separator className="w-[calc(100%-2rem)] mx-4 xl:my-6"/>
            <FAQ/>
            <Separator className="w-[calc(100%-2rem)] mx-4 mt-6"/>
            <Footer/>
        </div>
    );
};

export default Page;