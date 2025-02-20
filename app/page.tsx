"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import StackIcon from "tech-stack-icons";
import Link from "@/components/ui/link";
import Squares from "@/components/ui/squares";
import RotatingText from "@/components/ui/rotating-text";
import {Separator} from "@/components/ui/separator";
import Navbar from "@/components/breadcrumb-navbar";

const Page = () => {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <Navbar items={[
                {
                    text: "💫 풀스택 개발자, 호예준 포트폴리오",
                    url: "/"
                }
            ]}/>

            <section id="home" className="relative h-screen w-full shadow-inner shadow-black/50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/6 sm:after:h-1/3 after:bg-gradient-to-t after:from-background after:to-transparent">
                <Squares
                    speed={0.05}
                    squareSize={35}
                    direction="diagonal"
                    borderColor="#4d4d4d"
                />

                <div className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="w-full flex flex-col sm:flex-row justify-center items-center gap-x-2 text-center sm:text-left"
                    >
                        <h1 className="text-2xl sm:text-4xl font-bold">안녕하세요, </h1>
                        <RotatingText
                            texts={["풀스택 개발자", "백엔드 개발자", "학생 개발자", "Java 개발자", "Kotlin 개발자"]}
                            mainClassName="text-2xl sm:text-4xl font-bold px-2 bg-cyan-300 text-black overflow-hidden py-0.5 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{y: "100%"}}
                            animate={{y: 0}}
                            exit={{y: "-120%"}}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{type: "spring", damping: 30, stiffness: 400}}
                            rotationInterval={2000}
                        />
                        <h1 className="text-2xl sm:text-4xl font-bold"> 호예준 입니다.</h1>
                    </motion.div>
                    <div className="mt-5 flex flex-col sm:flex-row justify-center gap-y-5 sm:gap-x-10">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                            className="flex flex-col items-center sm:items-start"
                        >
                            <Image alt="프로필 이미지"
                                src="https://cdn.nillpoe.xyz/images/pfp.png"
                                width={300} height={300}
                                className="rounded-lg w-48 sm:w-[300px]"/>
                            <p className="text-sm text-neutral-100/75 mt-1">닐포 (NillPoe, 호예준)</p>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="min-h-full flex flex-col gap-y-5"
                        >
                            <p className="font-normal text-base sm:text-lg text-center sm:text-left">
                                저는 닉네임 &#39;닐포&#39;로 활동하고 있는<br/>
                                마인크래프트 플러그인 개발자입니다.<br/>
                                자세한 내용은 아래에서 확인해보세요.
                            </p>
                            <div id="toc" className="w-full scroll-mt-[60px]">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-1 tracking-wide text-center sm:text-left">챕터</h2>
                                <ul className="flex flex-col max-sm:w-full max-sm:items-center list-decimal pl-5">
                                    <li><Link href="#home" className="h-5 mb-1">Home</Link></li>
                                    <li><Link href="#careers" className="h-5 mb-1">Careers</Link></li>
                                    <li><Link href="#skills" className="h-5 mb-1">Skills</Link></li>
                                    <li><Link href="#social" className="h-5 mb-1">Social</Link></li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.9}}
                className="h-full w-full max-w-[708px] px-4 flex flex-col gap-y-8 items-center"
            >
                <h2 id="careers" className="flex items-center text-xl sm:text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                    <Image alt="서류 가방" unoptimized
                        src="https://cdn.nillpoe.xyz/images/Telemoji/Briefcase.webp"
                        width={35} height={35}/>
                    <span> | Careers</span>
                </h2>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-base sm:text-lg font-normal min-w-fit">
                        <strong>LUCY NETWORK </strong>
                        <span className="font-light text-xs sm:text-sm">(2023)</span>
                    </p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                </div>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-base sm:text-lg font-normal min-w-fit">
                        <strong>STARLY </strong>
                        <span className="font-light text-xs sm:text-sm">(2022/10 ~ 2024/10)</span>
                    </p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                    <Link href="/starly">자세히 보기</Link>
                </div>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-base sm:text-lg font-normal min-w-fit">
                        <strong>VERCHASE </strong>
                        <span className="font-light text-xs sm:text-sm">(2024/10 ~ 2024/11)</span>
                    </p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                    <Link href="/verchase">자세히 보기</Link>
                </div>
            </motion.section>
            <Separator className="my-7"/>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.1}}
                className="h-full w-full max-w-[708px] px-4 flex flex-col gap-y-8 items-center"
            >
                <h2 id="skills" className="flex items-center text-xl sm:text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                    <Image alt="도구 상자" unoptimized
                        src="https://cdn.nillpoe.xyz/images/Telemoji/Toolbox.webp"
                        width={35} height={35}/>
                    <span> | Skills</span>
                </h2>
                <div className="w-full flex flex-col gap-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">Backend</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <StackIcon name="java" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="kotlin" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="spring" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Maven 로고" src="https://cdn.nillpoe.xyz/images/Maven.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <Image alt="Gradle 로고" src="https://cdn.nillpoe.xyz/images/Gradle.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">JavaScript</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <StackIcon name="js" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="typescript" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="nodejs" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="reactjs" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="nextjs" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">Database</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <StackIcon name="mysql" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="SQLite 로고" src="https://cdn.nillpoe.xyz/images/SQLite.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <StackIcon name="mongodb" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="redis" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="HeidiSQL 로고" src="https://cdn.nillpoe.xyz/images/HeidiSQL.png"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">DevOps</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <StackIcon name="git" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="github" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Discord 로고" src="https://cdn.nillpoe.xyz/images/Discord.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <Image alt="Jenkins 로고" src="https://cdn.nillpoe.xyz/images/Jenkins.svg"
                                width={50} height={50}
                                className="h-12 sm:h-14 w-12 sm:w-14 rounded-md bg-neutral-100 px-2.5 py-1 select-none"/>
                            <Image alt="TeamCity 로고" src="https://cdn.nillpoe.xyz/images/TeamCity.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-y-2">
                        <h3 className="text-lg sm:text-xl font-bold">Tool</h3>
                        <div className="flex flex-wrap justify-center items-center gap-2">
                            <Image alt="IntelliJ 로고" src="https://cdn.nillpoe.xyz/images/IntelliJ.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <Image alt="WebStorm 로고" src="https://cdn.nillpoe.xyz/images/WebStorm.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <Image alt="VSCode 로고" src="https://cdn.nillpoe.xyz/images/VSCode.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <Image alt="Parsec 로고" src="https://cdn.nillpoe.xyz/images/Parsec.svg"
                                width={56} height={56}
                                className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2 select-none"/>
                            <StackIcon name="figma" className="h-12 sm:h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                </div>
            </motion.section>
            <Separator className="my-7"/>
            <motion.section
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.2}}
                className="h-full w-full max-w-[708px] px-4 flex flex-col gap-y-8 items-center"
            >
                <h2 id="social" className="flex items-center text-xl sm:text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                    <Image alt="수화기" unoptimized
                        src="https://cdn.nillpoe.xyz/images/Telemoji/Telephone.webp"
                        width={35} height={35}/>
                    <span> | Social</span>
                </h2>
                <div className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-neutral-100/85">
                    <div>
                        <p>디스코드</p>
                        <Link target="_blank" href="https://discord.com/users/1102166553027432488">@nillpoe</Link>
                    </div>
                    <div>
                        <p>텔레그램</p>
                        <Link target="_blank" href="https://t.me/nillpoe">@nillpoe</Link>
                    </div>
                    <div>
                        <p>깃허브</p>
                        <Link target="_blank" href="https://github.com/nillpoe">@nillpoe</Link>
                    </div>
                    <div>
                        <p>이메일</p>
                        <Link target="_blank" href="mailto:hello@nillpoe.xyz">hello@nillpoe.xyz</Link>
                    </div>
                </div>
            </motion.section>
            <Separator className="my-7"/>
            <motion.footer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.3}}
                className="h-full w-full max-w-[708px] px-4 flex flex-col gap-y-3 items-center pb-[10vh]">
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-y-2 scroll-mt-[60px]">
                    <p className="text-neutral-400 font-bold text-sm sm:text-base text-center">호예준 ⓒ {new Date().getFullYear()}, 모든 권리 보유.</p>
                    <p className="text-neutral-400 font-normal text-sm sm:text-base">{new Date().toLocaleDateString("ko-KR")}</p>
                </div>
            </motion.footer>
        </main>
    );
};

export default Page;