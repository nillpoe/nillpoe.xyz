"use client";

import React from "react";
import {motion} from "framer-motion";
import {Separator} from "@/components/ui/separator";
import CircularText from "@/components/ui/circular-text";
import Link from "@/components/ui/link";
import CountUp from "@/components/ui/count-up";
import { FileText } from 'lucide-react';

const Page = () => {
    const baseDelay = 0.2;
    const itemDelay = 0.05;
    const sectionDelay = 0.3;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculatePreviousDelay = (prevPlugins: any[]) => {
        return baseDelay + (prevPlugins.length * itemDelay) + sectionDelay;
    };


    const season1Plugins = [
        {
            name: "ST-Core 1.9.3",
            version: "1.12-1.20.1",
            sourceCode: "https://github.com/StarlyTeam/ST-Core",
            download: "https://cdn.nillpoe.xyz/files/ST-Core-1.9.3.jar"
        },
        {
            name: "ST-AlphaChest 1.0.5",
            sourceCode: "https://github.com/StarlyTeam/ST-AlphaChest",
            download: "https://cdn.nillpoe.xyz/files/ST-AlphaChest-1.0.5.jar"
        },
        {
            name: "ST-AntiMacro 1.0",
            sourceCode: "https://github.com/StarlyTeam/ST-AntiMacro",
            download: "https://cdn.nillpoe.xyz/files/ST-AntiMacro-1.0.jar"
        },
        {
            name: "ST-BanItem 1.0",
            sourceCode: "https://github.com/StarlyTeam/ST-BanItem",
            download: "https://cdn.nillpoe.xyz/files/ST-BanItem-1.0.jar"
        },
        {
            name: "ST-CashShop 1.0.7",
            sourceCode: "https://github.com/StarlyTeam/ST-CashShop",
            download: "https://cdn.nillpoe.xyz/files/ST-CashShop-1.0.7.jar"
        },
        {
            name: "ST-Cheque 1.0.4",
            sourceCode: "https://github.com/StarlyTeam/ST-Cheque",
            download: "https://cdn.nillpoe.xyz/files/ST-Cheque-1.0.4.jar"
        },
        {
            name: "ST-DefaultKit 1.3.5",
            sourceCode: "https://github.com/StarlyTeam/ST-DefaultKit2",
            download: "https://cdn.nillpoe.xyz/files/ST-DefaultKit-1.3.5.jar"
        },
        {
            name: "ST-DiscordAuth 2.0.6",
            sourceCode: "https://github.com/StarlyTeam/ST-DiscordAuth",
            download: "https://cdn.nillpoe.xyz/files/ST-DiscordAuth-2.0.6.jar"
        },
        {
            name: "ST-DiscordChat 1.0",
            sourceCode: "https://github.com/StarlyTeam/ST-DiscordChat",
            download: "https://cdn.nillpoe.xyz/files/ST-DiscordChat-1.0.jar"
        },
        {
            name: "ST-Gacha 1.1.1",
            sourceCode: "https://github.com/StarlyTeam/ST-Gacha",
            download: "https://cdn.nillpoe.xyz/files/ST-Gacha-1.1.1.jar"
        },
        {
            name: "ST-GiftBox 1.2",
            sourceCode: "https://github.com/StarlyTeam/ST-GiftBox2",
            download: "https://cdn.nillpoe.xyz/files/ST-GiftBox-1.2.jar"
        },
        {
            name: "ST-ItemCommand 1.1",
            sourceCode: "https://github.com/StarlyTeam/ST-ItemCommand",
            download: "https://cdn.nillpoe.xyz/files/ST-ItemCommand-1.1.jar"
        },
        {
            name: "ST-ItemDB 1.0.1",
            sourceCode: "https://github.com/StarlyTeam/ST-ItemDB",
            download: "https://cdn.nillpoe.xyz/files/ST-ItemDB-1.0.1.jar"
        },
        {
            name: "ST-ItemEditor 1.2.7",
            sourceCode: "https://github.com/StarlyTeam/ST-ItemEditor",
            download: "https://cdn.nillpoe.xyz/files/ST-ItemEditor-1.2.7.jar"
        },
        {
            name: "ST-Optimize 1.0.1",
            sourceCode: "https://github.com/StarlyTeam/ST-Optimize",
            download: "https://cdn.nillpoe.xyz/files/ST-Optimize-1.0.1.jar"
        },
        {
            name: "ST-RandomBox 1.0.7",
            sourceCode: "https://github.com/StarlyTeam/ST-RandomBox",
            download: "https://cdn.nillpoe.xyz/files/ST-RandomBox-1.0.7.jar"
        },
        {
            name: "ST-ReverieToken 1.0.1",
            sourceCode: "https://github.com/StarlyTeam/ST-ReverieToken",
            download: "https://cdn.nillpoe.xyz/files/ST-ReverieToken-1.0.1.jar"
        },
        {
            name: "ST-Shop 1.0.4",
            sourceCode: "https://github.com/StarlyTeam/ST-Shop2",
            download: "https://cdn.nillpoe.xyz/files/ST-Shop-1.0.4.jar"
        },
        {
            name: "ST-ShopPlus 1.2.5",
            sourceCode: "https://github.com/StarlyTeam/ST-ShopPlus",
            download: "https://cdn.nillpoe.xyz/files/ST-ShopPlus-1.2.5.jar"
        },
        {
            name: "ST-SkinBook 1.0.4",
            sourceCode: "https://github.com/StarlyTeam/ST-SkinBook",
            download: "https://cdn.nillpoe.xyz/files/ST-SkinBook-1.0.4.jar"
        }
    ];

    const season2Plugins = [
        {
            name: "StarlyCore 2.1",
            version: "1.12-1.20.4",
            sourceCode: "https://github.com/StarlyTeam/StarlyCore",
            download: "https://cdn.nillpoe.xyz/files/StarlyCore-2.1.jar"
        },
        {
            name: "ST-CustomMenu 1.2",
            version: "1.12-",
            sourceCode: "https://github.com/StarlyTeam/ST-CustomMenu",
            download: "https://cdn.nillpoe.xyz/files/ST-CustomMenu-1.2.jar"
        },
        {
            name: "ST-QuickMenu 1.0.5",
            sourceCode: "https://github.com/StarlyTeam/ST-QuickMenu",
            download: "https://cdn.nillpoe.xyz/files/ST-QuickMenu-1.0.5.jar"
        }
    ];

    const nillLibsPlugins = [
        {
            name: "NillLibs 1.3.2",
            version: "1.18-1.21.4",
            sourceCode: "https://github.com/StarlyTeam/NillLibs",
            download: "https://cdn.nillpoe.xyz/files/NillLibs-1.3.2.jar"
        },
        {
            name: "AstalShop 3.4.2",
            sourceCode: "https://cdn.nillpoe.xyz/files/AstralShop-3.4.2.zip",
            download: "https://cdn.nillpoe.xyz/files/AstralShop-3.4.2.jar"
        }
    ];

    return (
        <div className="min-h-screen max-xl:w-full w-[860px] p-5 space-y-8 z-10 mt-5">
            <motion.section
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                className="sm:p-4 xl:p-8 flex flex-col gap-y-8 justify-center bg-neutral-900/30 backdrop-blur-sm rounded-2xl"
            >
                <div className="space-y-6">
                    <h1 className="max-xl:text-4xl text-5xl font-bold text-white">
                        스탈리 아카이브
                    </h1>
                    <p className="text-lg max-sm:text-base text-neutral-300">
                        <span>스탈리에서 2022년부터 2024년까지 배포·판매된 플러그인을 무료로 공개합니다.</span><br/>
                        <br className="sm:hidden"/>
                        <span>공개된 모든 플러그인에는 </span><span className="font-semibold text-white">GPL-3.0 라이선스</span><span>가 적용되며, 기술 지원은 제공되지 않습니다.</span>
                    </p>
                </div>

                <div className="flex max-lg:flex-col justify-between gap-8">
                    <div className="space-y-8 flex-1">
                        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm transition-all hover:bg-neutral-900/70 hover:transform hover:scale-105">
                                <h5 className="text-lg font-medium text-neutral-400">누적 고객</h5>
                                <div className="flex items-center mt-2">
                                    <CountUp
                                        from={500}
                                        to={7000}
                                        separator=","
                                        direction="up"
                                        duration={0.5}
                                        className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"/>
                                    <span className="ml-1 text-lg font-medium text-neutral-400">+</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm transition-all hover:bg-neutral-900/70 hover:transform hover:scale-105">
                                <h5 className="text-lg font-medium text-neutral-400">누적 프로젝트</h5>
                                <div className="flex items-center mt-2">
                                    <CountUp
                                        from={0}
                                        to={160}
                                        separator=","
                                        direction="up"
                                        duration={0.5}
                                        className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"/>
                                    <span className="ml-1 text-lg font-medium text-neutral-400">+</span>
                                </div>
                            </div>
                        </div>

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
                                target="_blank" 
                                href="https://www.gnu.org/licenses/gpl-3.0.html#license-text"
                                className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
                            >
                                <FileText className="w-5 h-5 max-sm:hidden"/>
                                GPLv3
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

                    <div className="max-lg:hidden flex flex-col justify-center">
                        <CircularText
                            text="STARLY*ARCHIVE*"
                            spinDuration={5}
                            className="opacity-80 hover:opacity-100 transition-opacity w-48 h-48 xl:w-64 xl:h-64"
                        />
                    </div>
                </div>
            </motion.section>
            <Separator className="sm:w-[calc(100%-2rem)] sm:mx-4 xl:my-6"/>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className="sm:p-4 flex flex-col gap-y-5 justify-center"
            >
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3, delay: baseDelay}}
                >
                    <motion.h3 
                        className="text-2xl font-bold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.3, delay: baseDelay}}
                    >
                        시즌 1 (ST-Core)
                    </motion.h3>
                    <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                        {season1Plugins.map((plugin, index) => (
                            <motion.div
                                key={plugin.name}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3, delay: baseDelay + ((index + 1) * itemDelay)}}
                            >
                                <p className="font-semibold text-neutral-200/85">
                                    {plugin.name}
                                    {plugin.version && <span className="text-xs text-neutral-400/80"> {plugin.version}</span>}
                                </p>
                                <Link target="_blank" href={plugin.sourceCode}>Source Code</Link>
                                <Link target="_blank" href={plugin.download}>Download</Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        delay: calculatePreviousDelay(season1Plugins)
                    }}
                >
                    <motion.h3 
                        className="text-2xl font-bold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.3,
                            delay: calculatePreviousDelay(season1Plugins)
                        }}
                    >
                        시즌 2 (StarlyCore)
                    </motion.h3>
                    <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                        {season2Plugins.map((plugin, index) => (
                            <motion.div
                                key={plugin.name}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.3,
                                    delay: calculatePreviousDelay(season1Plugins) + ((index + 1) * itemDelay)
                                }}
                            >
                                <p className="font-semibold text-neutral-200/85">
                                    {plugin.name}
                                    {plugin.version && <span className="text-xs text-neutral-400/80"> {plugin.version}</span>}
                                </p>
                                <Link target="_blank" href={plugin.sourceCode}>Source Code</Link>
                                <Link target="_blank" href={plugin.download}>Download</Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.3,
                        delay: calculatePreviousDelay(season1Plugins.concat(season2Plugins))
                    }}
                >
                    <motion.h3 
                        className="text-2xl font-bold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.3,
                            delay: calculatePreviousDelay(season1Plugins.concat(season2Plugins))
                        }}
                    >
                        시즌 3 (NillLibs)
                    </motion.h3>
                    <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                        {nillLibsPlugins.map((plugin, index) => (
                            <motion.div
                                key={plugin.name}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.3,
                                    delay: calculatePreviousDelay(season1Plugins.concat(season2Plugins)) + ((index + 1) * itemDelay)
                                }}
                            >
                                <p className="font-semibold text-neutral-200/85">
                                    {plugin.name}
                                    {plugin.version && <span className="text-xs text-neutral-400/80"> {plugin.version}</span>}
                                </p>
                                <Link target="_blank" href={plugin.sourceCode}>Source Code</Link>
                                <Link target="_blank" href={plugin.download}>Download</Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
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