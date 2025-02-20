"use client";

import React from "react";
import Image from "next/image";
import Link from "@/components/ui/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    profile: "https://cdn.discordapp.com/avatars/811505120252657664/de6fd8b7275815a187296232fb8b5468.webp", 
    nickname: "솔*",
    service: "인챈트 시스템 외주",
    rating: 5,
    title: "인챈트 시스템 외주 후기",
    content: "\"시간이 촉박한 상황에서도 빠른 응답과 신속한 작업으로 만족스러웠습니다. 기본적인 최적화까지 꼼꼼하게 진행해주셔서 전반적인 서비스가 훌륭했습니다.\""
  },
  {
    profile: "https://cdn.discordapp.com/avatars/1033104250714206279/d29f1b2460e7df5de2b1e9771a4b42f6.webp",
    nickname: "성*", 
    service: "퀵메뉴 플러그인",
    rating: 5,
    title: "퀵메뉴 플러그인 구매 후기",
    content: "\"합리적인 가격에 높은 퀄리티의 플러그인을 구매했습니다. 구매 과정이 간단하고 문의 응답도 빨라서 매우 만족스러웠습니다.\""
  },
  {
    profile: "https://discord.com/assets/9855d7e3b9780976.png",
    nickname: "dd0**",
    service: "통합 플러그인",
    rating: 5,
    title: "통합 플러그인 사용 후기", 
    content: "\"여러 플러그인이 완벽하게 연동되어 안정적으로 작동합니다. 상세한 설명서와 함께 직접 테스트하며 쉽게 익힐 수 있었습니다.\""
  },
  {
    profile: "https://cdn.discordapp.com/avatars/249180521211363340/4d2faf6073e040802f5fb187882af601.webp",
    nickname: "한**",
    service: "외주 서비스 (플러그인)",
    rating: 5,
    title: "플러그인 외주 후기",
    content: "\"플러그인이 깔끔하고 사후 관리도 훌륭합니다. 호환성 문제 없이 안정적으로 작동하여 서버에 많은 플러그인을 사용 중인 분들께 추천드립니다.\""
  },
  {
    profile: "https://cdn.discordapp.com/avatars/990825488450748457/fa5ea085f407ff1624d49e0dcd9dfb18.webp",
    nickname: "유***",
    service: "유료 리소스, 외주 서비스 (플러그인)",
    rating: 5,
    title: "전체 플러그인 후기",
    content: "\"모든 플러그인이 서버 운영에 큰 도움이 되었습니다. 안정적이고 유용한 기능들로 가득한 최고의 플러그인입니다.\""
  },
  {
    profile: "https://discord.com/assets/2ccd8ae8b2379360.png",
    nickname: "Deleted User",
    service: "외주 서비스 (봇, 플러그인)",
    rating: 5,
    title: "90만원대 플러그인/봇 외주",
    content: "\"고객 응대, 버그 수정, 플러그인/봇 퀄리티, 전문성 모두 만점입니다.\""
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Page = () => {
    return (
        <motion.div 
            initial="initial"
            animate="animate"
            className="container mx-auto p-5 mt-16 min-h-screen"
        >
            <motion.section 
                variants={fadeInUp}
                className="text-center space-y-4 mb-16"
            >
                <div className="flex justify-center mb-5">
                    <Image
                        src="https://cdn.nillpoe.xyz/images/Starly2_2.png"
                        alt="스탈리 로고"
                        width={64}
                        height={64}
                        quality={100}
                        className="w-16 h-16"
                    />
                </div>
                <h1 className="text-5xl max-sm:text-4xl font-bold">
                    대한민국 최고의
                    <br/>
                    <span className="text-starly">플러그인</span> 개발팀
                </h1>
                <p className="text-lg text-neutral-300">
                    7000명 이상의 고객이 증명하는 전문 개발팀
                </p>
                <div className="flex max-sm:flex-col justify-center gap-4 mt-8">
                    <Link 
                        href="/starly/archive"
                        className="max-sm:w-full justify-center px-6 py-3 bg-starly hover:bg-starly/95 hover:text-black text-black rounded-lg transition-colors"
                    >
                        💽 스탈리 아카이브
                    </Link>
                    <Link 
                        href="https://discord.gg/TF8jqSJjCG"
                        className="max-sm:w-full justify-center px-6 py-3 bg-discord hover:bg-discord/95 hover:text-neutral-100/85 text-white rounded-lg transition-colors"
                    >
                        <svg className="inline-block w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                        </svg>
                        디스코드
                    </Link>
                </div>
            </motion.section>
            <motion.section 
                variants={staggerContainer}
                className="grid grid-cols-3 max-md:grid-cols-1 gap-8 text-center my-24"
            >
                {[['7000+', '누적 고객'], ['2년+', '서비스 기간'], ['160+', '프로젝트']].map(([number, text], i) => (
                    <motion.div 
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        className="space-y-2"
                    >
                        <div className="text-4xl font-bold">{number}</div>
                        <div className="text-neutral-400">{text}</div>
                    </motion.div>
                ))}
            </motion.section>
            <motion.section 
                variants={fadeInUp}
                className="my-24 space-y-5"
            >
                <h2 className="text-2xl font-bold text-center">홍보 영상</h2>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/cr2otHZ8Rxs"
                            title="스탈리 소개 영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/bXVKzzS2XHY"
                            title="스탈리 소개 영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
                <p className="text-center text-sm text-neutral-400">
                    ⓒ 예유페, 모든 권리 보유
                </p>
            </motion.section>
            <motion.section 
                variants={fadeInUp}
                className="my-24 space-y-5"
            >
                <h2 className="text-2xl font-bold text-center">시연 영상</h2>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/pMUhif4Etrk"
                            title="스탈리 시연 영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900/30 backdrop-blur-sm">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/W9q6rJAUCNY"
                            title="스탈리 시연 영상"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </motion.section>
            <motion.section 
                variants={staggerContainer}
                className="my-24 space-y-5"
            >
                <motion.h2 
                    variants={fadeInUp}
                    className="text-2xl font-bold text-center"
                >
                    구매 후기
                </motion.h2>
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className={cn("flex flex-col p-8 bg-neutral-900/30 backdrop-blur-sm rounded-2xl", 
                            index >= 3 && "max-sm:hidden")}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src={review.profile}
                                    alt="프로필 이미지"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-semibold">{review.nickname}</p>
                                    <span className="flex text-yellow-400">
                                        {Array.from({ length: review.rating }, () => "★")}
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-bold mb-2">{review.title}</h3>
                            <p className="text-sm text-gray-300 whitespace-pre-line">{review.content}</p>
                        </motion.div>
                    ))}
                </div>
                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className="text-xs text-gray-500 mt-4 text-center"
                >
                    * 실제 사용자 리뷰를 바탕으로 AI가 재구성하였습니다.
                </motion.p>
            </motion.section>
            <Separator className="sm:w-[calc(100%-2rem)] sm:mx-4 mt-6"/>
            <motion.footer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.8, delay: 0.7}}
                className="py-4 sm:p-4 h-full flex flex-col justify-end"
            >
                <div className="w-full flex items-center justify-between">
                    <p className="text-neutral-400 font-bold">스탈리 ⓒ {new Date().getFullYear()}, 모든 권리 보유.</p>
                    <p className="text-neutral-400 font-normal">STARLY.KR</p>
                </div>
            </motion.footer>
        </motion.div>
    );
};

export default Page;