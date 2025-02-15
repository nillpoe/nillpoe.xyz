"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Squares from "@/components/ui/squares";
import RotatingText from "@/components/ui/rotating-text";
import {Smartphone} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import StackIcon from "tech-stack-icons";

const Home = () => {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <nav
                className="fixed top-0 left-0 right-0 z-50 h-[45px] w-full flex justify-between items-center pl-2.5 pr-3 bg-accent">
                <div className="flex items-center">
                    <Breadcrumb className="ml-2">
                        <BreadcrumbList className="sm:gap-1">
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-white" asChild>
                                    <Link href="/">💫 풀스택 개발자, 호예준 포트폴리오</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Smartphone
                                className="text-destructive p-0.5 rounded-sm hover:bg-foreground/20 transition-colors animate-pulse"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            모바일 환경은 지원되지 않습니다.
                        </TooltipContent>
                    </Tooltip>
                </div>
            </nav>
            <article
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
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                            className="min-h-full flex flex-col justify-center"
                        >
                            <p className="font-normal text-lg">
                                저는 닉네임 &#39;닐포&#39;로 활동하고 있으며,<br/>
                                마인크래프트 플러그인을 개발하고 있어요.<br/>
                                자세한 내용은 아래에서 확인해보세요.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </article>
            <motion.article
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.9}}
                className="h-full w-[708px] flex flex-col gap-y-8 items-center">
                <h2 id="careers" className="flex items-center text-2xl font-medium gap-x-1"><Image alt="서류 가방"
                                                                                                   src="https://cdn.nillpoe.xyz/images/Telemoji/Briefcase.webp"
                                                                                                   width={35}
                                                                                                   height={35}/> |
                    Careers · 경력</h2>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-lg font-normal min-w-fit"><strong>STARLY</strong> <span
                        className="font-light text-sm">(2022/10 ~ 2024/10)</span></p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                    <Link target="_blank" href="/details/starly"
                          className="min-w-fit text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">
                        자세히 보기
                    </Link>
                </div>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-lg font-normal min-w-fit"><strong>LUCY NETWORK</strong> <span
                        className="font-light text-sm">(2023)</span></p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                    <Link target="_blank" href="/details/lucynetwork"
                          className="min-w-fit text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">
                        자세히 보기
                    </Link>
                </div>
                <div className="w-full flex items-center gap-x-3">
                    <p className="text-lg font-normal min-w-fit"><strong>VERCHASE</strong> <span
                        className="font-light text-sm">(2024/10 ~ 2024/11)</span></p>
                    <Separator className="w-full flex-1 dark:bg-neutral-100/60"/>
                    <Link target="_blank" href="/details/verchase"
                          className="min-w-fit text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">
                        자세히 보기
                    </Link>
                </div>
            </motion.article>
            <Separator className="my-7"/>
            <motion.article
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className="h-full w-[708px] flex flex-col gap-y-8 items-center">
                <h2 className="flex items-center text-2xl font-medium gap-x-1">
                    <Image alt="카드 인덱스" unoptimized
                           src="https://cdn.nillpoe.xyz/images/Telemoji/Card-Index-Dividers.webp"
                           width={35} height={35}/> |
                    Projects · 작업</h2>
                <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-0.5">
                        <div className="flex items-center gap-x-2 text-xl font-medium">
                            <h3>StarlyTeam/AstralShop3-main</h3>
                            <p>·</p>
                            <Link target="_blank" href="https://github.com/StarlyTeam/AstralShop3-main"
                                  className="text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">Github</Link>
                        </div>
                        <iframe width="708" height="398" src="https://www.youtube.com/embed/XqIror-5e4Q"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen/>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <div className="flex items-center gap-x-2 text-xl font-medium">
                            <h3>StarlyTeam/ST-CustomMenu</h3>
                            <p>·</p>
                            <Link target="_blank" href="https://github.com/StarlyTeam/ST-CustomMenu"
                                  className="text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">Github</Link>
                        </div>
                        <iframe width="708" height="398" src="https://www.youtube.com/embed/W9q6rJAUCNY"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <p>추가적인 소스코드는 아래 링크에 게시되어 있어요. 내용을 확인하시려면 제게 연락해주세요.</p>
                        <Link target="_blank" href="https://gofile.io/d/v4f65g">
                            <div
                                className="h-[108px] flex items-center justify-between rounded-sm border border-neutral-500/50 hover:bg-neutral-300/30 transition-colors select-none">
                                <div className="h-full flex flex-col justify-between p-3.5">
                                    <h5 className="pb-0.5 text-sm text-neutral-300 font-medium">Protected Content</h5>
                                    <p className="h-full text-xs text-neutral-400 font-medium">This content requires
                                        special permissions to access.</p>
                                    <span className="text-xs text-neutral-200 flex items-center gap-x-1">
                                        <Image alt="Gofile 로고"
                                               src="https://gofile.io/dist/img/logo-small-og.png"
                                               width={16} height={16}
                                               className="h-4 w-4"/>
                                        <p>https://gofile.io/d/v4f65g</p>
                                    </span>
                                </div>
                                <Image alt="Gofile 로고"
                                       src="https://gofile.io/dist/img/logo-small-og.png"
                                       width={300} height={300}
                                       className="h-[108px] object-cover"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.article>
            <Separator className="my-7"/>
            <motion.article
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.1}}
                className="h-full w-[708px] flex flex-col gap-y-8 items-center">
                <h2 id="skills" className="flex items-center text-2xl font-medium gap-x-1">
                    <Image alt="도구 상자" unoptimized
                           src="https://cdn.nillpoe.xyz/images/Telemoji/Toolbox.webp"
                           width={35} height={35}/> |
                    Skills · 기술</h2>
                <div className="w-full flex flex-col gap-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">Backend</h3>
                        <div className="flex items-center gap-x-2">
                            <StackIcon name="java" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="kotlin" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="spring" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Maven 로고" src="https://cdn.nillpoe.xyz/images/Maven.svg" width={56} height={56}
                                   className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Gradle 로고" src="https://cdn.nillpoe.xyz/images/Gradle.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <ul className="list-disc flex flex-col gap-1 ml-5">
                        <li>Java와 Kotlin의 문법을 완전히 이해하고 사용할 수 있어요.
                            <ul className="list-disc ml-5 mt-0.5">
                                <li>Java 23, Kotlin 2.1등 최신 문법을 끊임없이 배우고 연습해요.</li>
                            </ul>
                        </li>
                        <li>SpringBoot를 이용하여 RESTful한 Backend를 제작해봤어요.
                            <ul className="list-disc ml-5 mt-0.5">
                                <li>Spring Framework의 내부 코드를 학습하며 동작 원리를 이해하려고 노력해요.</li>
                                <li>SpringBoot와 Kotlin을 조합하여 더욱 빠르게 작업할 수 있어요.</li>
                            </ul>
                        </li>
                        <li>Maven, Gradle을 사용하여 빌드할 수 있어요.
                            <ul className="list-disc ml-5 mt-0.5">
                                <li>Sonatype에서 배포하는 Maven 저장소를 직접 설정하고, 배포해봤어요.</li>
                                <li>Gradle의 Kotlin DSL 문법을 이용하여 더욱 효율적인 Build Script를 작성할 수 있어요.</li>
                            </ul>
                        </li>
                    </ul>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">JavaScript</h3>
                        <div className="flex items-center gap-x-2">
                            <StackIcon name="js" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="typescript" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="nodejs" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <ul className="list-disc flex flex-col gap-1 ml-5">
                        <li>JavaScript, TypeScript를 완벽히 이해하고 사용할 수 있어요.
                            <ul className="list-disc ml-5 mt-0.5">
                                <li>ES6 등의 최신 표준 규격을 따르며, 필요 시에는 Babel등으로 Transpile할 수 있어요.</li>
                            </ul>
                        </li>
                        <li>Node.js 런타임을 사용하여 브라우저 밖에서도 JavaScript 코드를 실행할 수 있어요.</li>
                        <li>Express.js 등의 Framework를 사용하여 Web Application을 제작해봤어요.</li>
                        <li>Prisma, Drizzle 등의 TypeScript 기반 ORM을 사용하여 MongoDB를 연동해봤어요.</li>
                        <li>Discord.js 등을 이용하여 디스코드 봇을 개발해봤어요.</li>
                    </ul>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">Database</h3>
                        <div className="flex items-center gap-x-2">
                            <StackIcon name="mysql" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="SQLite 로고" src="https://cdn.nillpoe.xyz/images/SQLite.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="mongodb" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="redis" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="HeidiSQL 로고" src="https://cdn.nillpoe.xyz/images/HeidiSQL.png" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <ul className="list-disc flex flex-col gap-1 ml-5">
                        <li>SQL 문법을 대부분 이해하고 사용할 수 있어요.</li>
                        <li>MySQL, MariaDB 등의 RDBMS(관계형 데이터베이스)을 다룰 수 있어요.</li>
                        <li>SQLite, MongoDB등의 다양한 DBMS도 다룰 수 있어요.</li>
                        <li>Redis 등의 IMDB(In-Memory Database)도 다룰 수 있어요.</li>
                    </ul>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">DevOps</h3>
                        <div className="flex items-center gap-x-2">
                            <StackIcon name="git" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="github" className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Discord 로고" src="https://cdn.nillpoe.xyz/images/Discord.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Jenkins 로고" src="https://cdn.nillpoe.xyz/images/Jenkins.svg" width={50}
                                   height={50} className="h-14 w-14 rounded-md bg-neutral-100 px-2.5 py-1"/>
                            <Image alt="TeamCity 로고" src="https://cdn.nillpoe.xyz/images/TeamCity.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <ul className="list-disc flex flex-col gap-1 ml-5">
                        <li>SQL 문법을 대부분 이해하고 사용할 수 있어요.</li>
                        <li>MySQL, MariaDB 등의 RDBMS(관계형 데이터베이스)을 다룰 수 있어요.</li>
                        <li>SQLite, MongoDB등의 다양한 DBMS도 다룰 수 있어요.</li>
                        <li>Redis 등의 IMDB(In-Memory Database)도 다룰 수 있어요.</li>
                    </ul>

                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">Tool</h3>
                        <div className="flex items-center gap-x-2">
                            <Image alt="IntelliJ 로고" src="https://cdn.nillpoe.xyz/images/IntelliJ.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="WebStorm 로고" src="https://cdn.nillpoe.xyz/images/WebStorm.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="VSCode 로고" src="https://cdn.nillpoe.xyz/images/VSCode.svg" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <Image alt="Parsec 로고" src="https://cdn.nillpoe.xyz/images/Parsec.svg?" width={56}
                                   height={56} className="h-14 rounded-md bg-neutral-100 p-2"/>
                            <StackIcon name="figma" className="h-14 rounded-md bg-neutral-100 p-2"/>
                        </div>
                    </div>
                    <ul className="list-disc flex flex-col gap-1 ml-5">
                        <li>IntelliJ Ultimate, WebStorm, Fleet 등의 IDE를 사용하고 있어요.</li>
                        <li>Visual Studio Code, VSCodium 등의 텍스트 에디터를 사용하고 있어요.</li>
                        <li>Postman을 이용하여 API를 테스트해봤어요.</li>
                        <li>Figma, Framer 등을 이용하여 Web Page 등을 디자인하는 과정에서 팀원과 협업해봤어요.</li>
                        <li>Parsec, Excalidraw 등을 이용하여 팀원과 협업해봤어요.</li>
                    </ul>
                </div>
            </motion.article>
            <Separator className="my-7"/>
            <motion.article
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.2}}
                className="h-full w-[708px] flex flex-col gap-y-8 items-center">
                <h2 id="skills" className="flex items-center text-2xl font-medium gap-x-1">
                    <Image alt="수화기" unoptimized
                           src="https://cdn.nillpoe.xyz/images/Telemoji/Telephone.webp"
                           width={35} height={35}/> |
                    Contact · 연락처</h2>
                <ul className="w-full list-disc flex flex-col gap-1 ml-5">
                    <li>디스코드 <Link target="_blank" href="https://discord.com/users/1102166553027432488"
                                   className="text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">@nillpoe</Link> 로
                        연락주시면 가장 빠르게 확인할 수 있어요.
                    </li>
                    <li>디스코드 사용이 힘드실 경우, <Link target="_blank" href="mailto:hello@nillpoe.xyz"
                                               className="text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-colors">hello@nillpoe.xyz</Link> 로
                        연락하실 수도 있어요.
                    </li>
                </ul>
            </motion.article>
            <Separator className="my-7"/>
            <motion.footer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 1.3}}
                className="h-full w-[708px] flex flex-col gap-y-3 items-center pb-[10vh]">
                <div className="w-full flex justify-between items-center">
                    <p className="text-neutral-400 font-bold">호예준 ⓒ 2025, 모든 권리 보유.</p>
                    <p className="text-neutral-400 font-normal">최근 수정: 2025-02-16</p>
                </div>
                <p className="w-full text-neutral-100 font-bold">본 홈페이지에 게시된 전화번호, 이메일 주소가 자동 수집되는 것을 거부합니다.</p>
            </motion.footer>
        </main>
    );
};

export default Home;