"use client";

import Navbar, {BreadcrumbItem} from "@/components/breadcrumb-navbar";

const VerchaseNavbar = () => {
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            text: "💫 풀스택 개발자, 호예준 포트폴리오",
            url: "/",
            className: "max-xl:hidden",
            separatorClassName: "max-xl:hidden"
        },
        {
            icon: "https://cdn.nillpoe.xyz/images/Verchase.png",
            iconAlt: "벌체이스 로고",
            text: "벌체이스",
            url: "/verchase"
        }
    ];

    return <Navbar items={breadcrumbItems}/>;
};

export default VerchaseNavbar