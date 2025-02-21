"use client";

import {usePathname} from "next/navigation";
import Navbar, {BreadcrumbItem} from "@/components/breadcrumb-navbar";
import Link from "@/components/ui/link";

const StarlyNavbar = () => {
    const pathname = usePathname();

    const breadcrumbItems: BreadcrumbItem[] = [
        {
            text: "💫 풀스택 개발자, 호예준 포트폴리오",
            url: "/"
        },
        {
            icon: "https://cdn.nillpoe.xyz/images/Starly2_2.png",
            iconAlt: "스탈리 로고",
            text: "스탈리",
            url: "/starly"
        }
    ];

    if (pathname === "/starly/closed") {
        breadcrumbItems.push(
            {
                text: "📣 서비스 종료",
                url: "/starly/closed"
            }
        );
    } else if (pathname === "/starly/archive") {
        breadcrumbItems.push(
            {
                text: "💽 스탈리 아카이브",
                url: "/starly/archive"
            }
        );
    }

    return <Navbar items={breadcrumbItems}>
        {pathname === "/starly" && (
            <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-1 mt-1.5">
                    <p className="flex justify-center items-center space-x-1.5 text-red-500 font-medium text-center">
                        <span>🚨 서비스가 종료되었습니다.</span>
                        <Link href="/starly/closed" className="underline">공지사항</Link>
                    </p>
            </div>
        )}
    </Navbar>;
};

export default StarlyNavbar