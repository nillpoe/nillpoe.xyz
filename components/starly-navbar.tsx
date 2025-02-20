"use client";

import {usePathname} from "next/navigation";
import Navbar, {BreadcrumbItem} from "@/components/breadcrumb-navbar";

const StarlyNavbar = () => {
    const pathname = usePathname();

    const breadcrumbItems: BreadcrumbItem[] = [
        {
            text: "💫 풀스택 개발자, 호예준 포트폴리오",
            url: "/",
            className: "max-sm:hidden",
            separatorClassName: "max-sm:hidden"
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

    return <Navbar items={breadcrumbItems}/>;
};

export default StarlyNavbar