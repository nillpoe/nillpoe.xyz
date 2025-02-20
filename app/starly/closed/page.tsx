"use client";

import {motion} from "framer-motion";
import React from "react";
import Link from "@/components/ui/link";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import { PillBottle } from "lucide-react";

const Page = () => {
    return (
        <div className="min-h-screen max-xl:w-full w-[860px] p-5 space-y-8 z-10 mt-16">
            <motion.section
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="sm:p-4 xl:p-8 flex flex-col gap-y-8 justify-center bg-neutral-900/30 backdrop-blur-sm rounded-2xl"
            >
                <div className="space-y-6">
                    <h1 className="max-xl:text-4xl text-5xl font-bold text-white">서비스 종료</h1>
                    <div className="space-y-1 text-lg text-neutral-300">
                        <p className="font-semibold">스탈리는 2024년 10월 30일을 끝으로 서비스를 종료합니다.</p>
                        <p>그동안 스탈리와 함께 해주신 고객분들께 진심으로 감사드립니다.</p>
                        <p>기타 안내사항은 아래 &#39;자주 묻는 질문&#39;란에 작성해 두었으니 참고하시기 바랍니다.</p>
                    </div>
                </div>

                <div className="space-y-8 flex-1">
                    <div className="flex gap-4">
                        <Link 
                            target="_blank" 
                            href="https://github.com/StarlyTeam"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5 max-sm:hidden" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Github
                        </Link>
                        <Link 
                            href="/starly/archive"
                            className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
                        >
                            <PillBottle className="w-5 h-5 max-sm:hidden"/>
                            아카이브
                        </Link>
                    </div>

                    <div className="mt-12">
                        <h5 className="font-semibold text-lg text-white mb-3">문의 <span className="text-neutral-400 text-base font-normal">Contact</span></h5>
                        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-all">
                                <p className="text-neutral-400 text-sm mb-2">텔레그램</p>
                                <Link 
                                    target="_blank" 
                                    href="https://t.me/nillpoe"
                                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                    <span className="font-medium">@nillpoe</span>
                                </Link>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-900/70 transition-all">
                                <p className="text-neutral-400 text-sm mb-2">이메일</p>
                                <Link 
                                    target="_blank" 
                                    href="mailto:hello@nillpoe.xyz"
                                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/>
                                    </svg>
                                    <span className="font-medium">hello@nillpoe.xyz</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            <Separator className="sm:w-[calc(100%-2rem)] sm:mx-4"/>
            <motion.section
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.5}}
                className="sm:p-4 flex flex-col gap-y-4 justify-center bg-neutral-900/30 backdrop-blur-sm rounded-2xl"
            >
                <h3 className="text-xl font-bold text-white">자주 묻는 질문</h3>
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold hover:no-underline">
                            플러그인을 다운로드 받을 수 있나요?
                        </AccordionTrigger>
                        <AccordionContent className="flex gap-1 text-neutral-300">
                            <Link href="/starly/archive" className="text-white hover:text-blue-400 transition-colors">스탈리 아카이브</Link>
                            <span>에서 다운로드 받으실 수 있습니다.</span>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold hover:no-underline">
                            구매한 플러그인 파일을 잃어버렸어요.
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-300">
                            괜찮습니다. 개인 외주를 포함한 모든 프로젝트 파일은 영구적으로 보관되어 있으니, 편하게 문의해 주세요.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </motion.section>
            <Separator className="sm:w-[calc(100%-2rem)] sm:mx-4 mt-6"/>
            <motion.footer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.7}}
                className="sm:p-4 h-full flex flex-col justify-end"
            >
                <div className="w-full flex items-center justify-between">
                    <p className="text-neutral-400 font-bold">스탈리 ⓒ {new Date().getFullYear()}, 모든 권리 보유.</p>
                    <p className="text-neutral-400 font-normal">STARLY.KR</p>
                </div>
            </motion.footer>
        </div>
    );
};

export default Page;