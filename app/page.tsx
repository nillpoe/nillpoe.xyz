"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList
} from "@/components/ui/breadcrumb";
import Link from "@/components/ui/link";
import Link2 from "next/link";
import Squares from "@/components/ui/squares";
import RotatingText from "@/components/ui/rotating-text";
import {Smartphone} from "lucide-react";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import StackIcon from "tech-stack-icons";
import React from "react";

const Home = () => {
    const MobileWarningBanner = () => (
        <div
            className="xl:hidden fixed top-0 left-0 right-0 z-50 h-[50px] w-screen flex items-center pl-2.5 pr-3 bg-neutral-50">
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
        <nav className="max-xl:hidden fixed top-0 left-0 right-0 z-50 h-[45px] w-full flex justify-between items-center pl-2.5 pr-3 bg-accent">
            <div className="flex items-center">
                <Breadcrumb className="ml-2">
                    <BreadcrumbList className="gap-1">
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white" asChild>
                                <Link2 href="/">💫 풀스택 개발자, 호예준 포트폴리오</Link2>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </nav>
    );

    const Home = () => (
        <article id="home"
                 className="relative h-screen w-full shadow-inner shadow-black/50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/3 after:bg-gradient-to-t after:from-background after:to-transparent">
            <Squares
                speed={0.05}
                squareSize={35}
                direction="diagonal"
                borderColor="#4d4d4d"
            />

            <div className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="w-full flex justify-center items-center gap-x-2"
                >
                    <h1 className="text-4xl font-bold">안녕하세요, </h1>
                    <RotatingText
                        texts={["풀스택 개발자", "백엔드 개발자", "학생 개발자", "Java 개발자", "Kotlin 개발자"]}
                        mainClassName="text-4xl font-bold px-2 bg-cyan-300 text-black overflow-hidden py-0.5 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{y: "100%"}}
                        animate={{y: 0}}
                        exit={{y: "-120%"}}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{type: "spring", damping: 30, stiffness: 400}}
                        rotationInterval={2000}
                    />
                    <h1 className="text-4xl font-bold"> 호예준 입니다.</h1>
                </motion.div>
                <div className="mt-5 flex justify-center gap-x-10">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <Image alt="프로필 이미지"
                               src="https://cdn.nillpoe.xyz/images/pfp.png"
                               width={300} height={300}
                               className="rounded-lg"/>
                        <p className="text-sm text-neutral-100/75 mt-1">닐포 (NillPoe, 호예준)</p>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="min-h-full flex flex-col gap-y-5"
                    >
                        <p className="font-normal text-lg">
                            저는 닉네임 &#39;닐포&#39;로 활동하고 있는<br/>
                            마인크래프트 플러그인 개발자입니다.<br/>
                            자세한 내용은 아래에서 확인해보세요.
                        </p>
                        <div id="toc" className="w-full scroll-mt-[60px]">
                            <h2 className="text-3xl font-bold mb-1 tracking-wide">챕터</h2>
                            <ul className="list-decimal pl-5">
                                <li><Link href="#home">Home</Link></li>
                                <li><Link href="#careers">Careers</Link></li>
                                <li><Link href="#projects">Projects</Link></li>
                                <li><Link href="#skills">Skills</Link></li>
                                <li><Link href="#social">Social</Link></li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </article>
    );

    const Careers = () => (
        <motion.article
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.9}}
            className="h-full w-[708px] flex flex-col gap-y-8 items-center"
        >
            <h2 id="careers" className="flex items-center text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                <Image alt="서류 가방" unoptimized
                       src="https://cdn.nillpoe.xyz/images/Telemoji/Briefcase.webp"
                       width={35} height={35}/>
                <span> | Careers</span>
            </h2>
            <div className="w-full flex items-center gap-x-3">
                <p className="text-lg font-normal min-w-fit">
                    <strong>LUCY NETWORK </strong>
                    <span className="font-light text-sm">(2023)</span>
                </p>
                <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                {/*<Link href="/details/lucynetwork">자세히 보기</Link>*/}
            </div>
            <div className="w-full flex items-center gap-x-3">
                <p className="text-lg font-normal min-w-fit">
                    <strong>STARLY </strong>
                    <span className="font-light text-sm">(2022/10 ~ 2024/10)</span>
                </p>
                <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                <Link href="/details/starly">자세히 보기</Link>
            </div>
            <div className="w-full flex items-center gap-x-3">
                <p className="text-lg font-normal min-w-fit">
                    <strong>VERCHASE </strong>
                    <span className="font-light text-sm">(2024/10 ~ 2024/11)</span>
                </p>
                <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                <Link href="/details/verchase">자세히 보기</Link>
            </div>
        </motion.article>
    );

    const Projects = () => (
        <motion.article
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className="h-full w-[708px] flex flex-col gap-y-8 items-center"
        >
            <h2 id="projects" className="flex items-center text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                <Image alt="카드 인덱스" unoptimized
                       src="https://cdn.nillpoe.xyz/images/Telemoji/Card-Index-Dividers.webp"
                       width={35} height={35}/>
                <span> | Projects</span>
            </h2>
            <div className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-0.5">
                    <div className="flex items-center gap-x-2 text-xl font-medium">
                        <Link target="_blank" href="https://github.com/StarlyTeam/AstralShop3-main">
                            <h3 className="text-xl font-medium">StarlyTeam/AstralShop3-main</h3>
                        </Link>
                    </div>
                    <iframe width="708" height="398" src="https://www.youtube.com/embed/XqIror-5e4Q"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <div className="flex items-center gap-x-2">
                        <Link target="_blank" href="https://github.com/StarlyTeam/ST-CustomMenu">
                            <h3 className="text-xl font-medium">StarlyTeam/ST-CustomMenu</h3>
                        </Link>
                    </div>
                    <iframe width="708" height="398" src="https://www.youtube.com/embed/W9q6rJAUCNY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                </div>
                <div className="flex flex-col gap-y-1">
                    <p>추가적인 소스코드는 아래 링크에 게시되어 있어요. 내용을 확인하시려면 제게 연락해주세요.</p>
                    <Link2 target="_blank" href="https://gofile.io/d/v4f65g">
                        <div className="h-[108px] flex items-center justify-between rounded-sm border border-neutral-500/50 hover:bg-neutral-300/30 transition-colors select-none">
                            <div className="h-full flex flex-col justify-between p-3.5">
                                <h5 className="pb-0.5 text-sm text-neutral-300 font-medium">
                                    Protected Content
                                </h5>
                                <p className="h-full text-xs text-neutral-400 font-medium">
                                    This content requires special permissions to access.
                                </p>
                                <span className="text-xs text-neutral-200 flex items-center gap-x-1">
                                    <Image alt="Gofile 로고"
                                           src="https://gofile.io/dist/img/logo-small-og.png"
                                           width={16} height={16}/>
                                    <p>https://gofile.io/d/v4f65g</p>
                                </span>
                            </div>
                            <Image alt="Gofile 로고"
                                   src="https://gofile.io/dist/img/logo-small-og.png"
                                   width={300} height={300}
                                   className="h-[108px] object-cover"/>
                        </div>
                    </Link2>
                </div>
            </div>
        </motion.article>
    );

    const Skills = () => (
        <motion.article
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 1.1}}
            className="h-full w-[708px] flex flex-col gap-y-8 items-center"
        >
            <h2 id="skills" className="flex items-center text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                <Image alt="도구 상자" unoptimized
                       src="https://cdn.nillpoe.xyz/images/Telemoji/Toolbox.webp"
                       width={35} height={35}/>
                <span> | Skills</span>
            </h2>
            <div className="w-full flex flex-col gap-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Backend</h3>
                    <div className="flex items-center gap-x-2">
                        <StackIcon name="java" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="kotlin" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="spring" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="Maven 로고" src="https://cdn.nillpoe.xyz/images/Maven.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="Gradle 로고" src="https://cdn.nillpoe.xyz/images/Gradle.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">JavaScript</h3>
                    <div className="flex items-center gap-x-2">
                        <StackIcon name="js" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="typescript" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="nodejs" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="reactjs" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="nextjs" className="h-14 rounded-md bg-neutral-100 p-2"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Database</h3>
                    <div className="flex items-center gap-x-2">
                        <StackIcon name="mysql" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="SQLite 로고" src="https://cdn.nillpoe.xyz/images/SQLite.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="mongodb" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="redis" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="HeidiSQL 로고" src="https://cdn.nillpoe.xyz/images/HeidiSQL.png"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">DevOps</h3>
                    <div className="flex items-center gap-x-2">
                        <StackIcon name="git" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="github" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="Discord 로고" src="https://cdn.nillpoe.xyz/images/Discord.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="Jenkins 로고" src="https://cdn.nillpoe.xyz/images/Jenkins.svg"
                               width={50} height={50}
                               className="h-14 w-14 rounded-md bg-neutral-100 px-2.5 py-1"/>
                        <Image alt="TeamCity 로고" src="https://cdn.nillpoe.xyz/images/TeamCity.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Tool</h3>
                    <div className="flex items-center gap-x-2">
                        <Image alt="IntelliJ 로고" src="https://cdn.nillpoe.xyz/images/IntelliJ.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="WebStorm 로고" src="https://cdn.nillpoe.xyz/images/WebStorm.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="VSCode 로고" src="https://cdn.nillpoe.xyz/images/VSCode.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <Image alt="Parsec 로고" src="https://cdn.nillpoe.xyz/images/Parsec.svg"
                               width={56} height={56}
                               className="h-14 rounded-md bg-neutral-100 p-2"/>
                        <StackIcon name="figma" className="h-14 rounded-md bg-neutral-100 p-2"/>
                    </div>
                </div>
            </div>
        </motion.article>
    );

    const Contact = () => (
        <motion.article
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 1.2}}
            className="h-full w-[708px] flex flex-col gap-y-8 items-center"
        >
            <h2 id="social" className="flex items-center text-2xl font-medium gap-x-1 scroll-mt-[60px]">
                <Image alt="수화기" unoptimized
                       src="https://cdn.nillpoe.xyz/images/Telemoji/Telephone.webp"
                       width={35} height={35}/>
                <span> | Social</span>
            </h2>
            <div className="w-full flex justify-between">
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
                <div>
                    <p>웹사이트</p>
                    <Link target="_blank" href="https://beta.nillpoe.xyz">beta.nillpoe.xyz</Link>
                </div>
            </div>
        </motion.article>
    );

    const Footer = () => (
        <motion.footer
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, delay: 1.3}}
            className="h-full w-[708px] flex flex-col gap-y-3 items-center pb-[10vh]">
            <div className="w-full flex justify-between items-center scroll-mt-[60px]">
                <p className="text-neutral-400 font-bold">호예준 ⓒ 2025, 모든 권리 보유.</p>
                <p className="text-neutral-400 font-normal">최근 수정: 2025-02-16</p>
            </div>
            <p className="w-full text-neutral-100 font-bold">본 홈페이지에 게시된 전화번호, 이메일 주소가 자동 수집되는 것을 거부합니다.</p>
        </motion.footer>
    );

    return (
        <main className="h-full flex flex-col justify-center items-center">
            <MobileWarningBanner/>
            <Navbar/>
            <Home/>
            <Careers/>
            <Separator className="my-7"/>
            <Projects/>
            <Separator className="my-7"/>
            <Skills/>
            <Separator className="my-7"/>
            <Contact/>
            <Separator className="my-7"/>
            <Footer/>
        </main>
    );
};

export default Home;