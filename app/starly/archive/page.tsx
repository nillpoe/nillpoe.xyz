"use client";

import React from "react";
import CircularText from "@/components/ui/circular-text";
import {Separator} from "@/components/ui/separator";
import Link from "@/components/ui/link";
import CountUp from "@/components/ui/count-up";
import {motion} from "framer-motion";

const Page = () => {
    const Article = () => (
        <motion.article
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="p-4 flex flex-col gap-y-5 justify-center"
        >
            <h1 className="max-xl:text-4xl text-5xl font-semibold my-6">💽 스탈리 아카이브</h1>
            <div className="flex max-xl:flex-col justify-between">
                <div>
                    <p className="text-lg font-semibold">&quot;스탈리를 기억합니다.&quot;</p>
                    <p>
                        <CountUp
                            from={500}
                            to={1500}
                            separator=","
                            direction="up"
                            duration={0.5}
                            className="count-up-text"/>
                        <span>명의 고객님과 함께한 </span>
                        <CountUp
                            from={0}
                            to={162}
                            separator=","
                            direction="up"
                            duration={0.5}
                            className="count-up-text"/>
                        <span>개의 프로젝트, 잊지 않겠습니다.</span>
                    </p>
                    <p className="mt-2.5">
                        스탈리에서 2022년부터 2024년까지 배포·판매된 플러그인을 무료로 공개합니다.<br/>
                        공개된 모든 플러그인에는 <span className="font-semibold">GPL-3.0 라이선스</span>가 적용되며, 기술 지원은 제공되지 않습니다.
                    </p>
                    <div className="mt-2.5 flex gap-x-2">
                        <Link target="_blank" href="https://github.com/StarlyTeam">Github</Link>
                        <Link target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.html#license-text">GPLv3</Link>
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
                        text="STARLY*ARCHIVE*"
                        spinDuration={5}
                    />
                </div>
            </div>
        </motion.article>
    );

    const Plugins = () => (
        <motion.article
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.5}}
            className="p-4 flex flex-col gap-y-5 justify-center"
        >
            <div>
                <h3 className="text-2xl font-bold">라이브러리 (코어)</h3>
                <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                    <div>
                        <p className="font-semibold">ST-Core 1.9.3 <span className="text-xs text-neutral-100/60">1.12-1.20.1</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-Core">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-Core-1.9.3.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">StarlyCore 2.1 <span className="text-xs text-neutral-100/60">1.12-1.20.4</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/StarlyCore">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/StarlyCore-2.1.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">NillLibs 1.3.2 <span className="text-xs text-neutral-100/60">1.18-1.21.4</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/NillLibs">Source Code</Link>
                        <Link href="https://cdn.nillpoe.xyz/files/NillLibs-1.3.2.jar">Download</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">유료 리소스</h3>
                <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                    <div>
                        <p className="font-semibold">AstalShop 3.4.2 <span className="text-xs text-neutral-100/60">NillLibs</span></p>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/AstralShop-3.4.2.zip">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/AstralShop-3.4.2.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-CustomMenu 1.2 <span className="text-xs text-neutral-100/60">1.12-1.21.4</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-CustomMenu">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-CustomMenu-1.2.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-SkinBook 1.0.4 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-SkinBook">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-SkinBook-1.0.4.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-QuickMenu 1.0.5 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-QuickMenu">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-QuickMenu-1.0.5.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-ShopPlus 1.2.5 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-ShopPlus">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-ShopPlus-1.2.5.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-CashShop 1.0.7 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-CashShop">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-CashShop-1.0.7.jar">Download</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">무료 리소스</h3>
                <div className="w-full mt-2 grid grid-cols-1 gap-4 text-neutral-100/85 sm:grid-cols-3">
                    <div>
                        <p className="font-semibold">ST-ItemEditor 1.2.7 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-ItemEditor">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-ItemEditor-1.2.7.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-DefaultKit 1.3.5 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-DefaultKit2">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-DefaultKit-1.3.5.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-AlphaChest 1.0.5 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-AlphaChest">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-AlphaChest-1.0.5.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-GiftBox 1.2 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-GiftBox2">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-GiftBox-1.2.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-RandomBox 1.0.7 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-RandomBox">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-RandomBox-1.0.7.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-ItemDB 1.0.1 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-ItemDB">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-ItemDB-1.0.1.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-ReverieToken 1.0.1 <span className="text-xs text-neutral-100/60">ST-Core</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-ReverieToken">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-ReverieToken-1.0.1.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-Shop 1.0.4 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-Shop2">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-Shop-1.0.4.jar">Download</Link>
                    </div>
                    <div>
                        <p className="font-semibold">ST-Warn 1.0.4 <span className="text-xs text-neutral-100/60">StarlyCore</span></p>
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-Warn">Source Code</Link>
                        <Link target="_blank" href="https://cdn.nillpoe.xyz/files/ST-Warn-1.0.4.jar">Download</Link>
                    </div>
                </div>
            </div>
        </motion.article>
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
            <Plugins/>
            <Separator className="w-[calc(100%-2rem)] mx-4 mt-6"/>
            <Footer/>
        </div>
    );
};

export default Page;