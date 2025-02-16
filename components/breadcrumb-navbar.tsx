"use client";

import {
    Breadcrumb,
    BreadcrumbItem as BreadcrumbItem2,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link2 from "next/link";
import Image from "next/image";
import React from "react";

export interface NavbarProps {
    items: BreadcrumbItem[];
}

export type BreadcrumbItem = {
    icon?: string;
    iconAlt?: string;
    text: string;
    url: string;
    className?: string;
    separatorClassName?: string;
};

const Navbar = ({items}: NavbarProps) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-30 h-[45px] w-full flex justify-between items-center pl-2.5 pr-3 backdrop-blur-md border-b border-neutral-500/50">
            <div className="flex items-center">
                <Breadcrumb className="ml-2">
                    <BreadcrumbList className="gap-1">
                        {items.map((item, index) => (
                            <>
                                <BreadcrumbItem2 className={item.className} key={`item-${index}`}>
                                    <BreadcrumbLink className="text-white" asChild>
                                        <Link2 href={item.url} className="flex items-center gap-1">
                                            {item.icon && (
                                                <Image alt={item.iconAlt!} src={item.icon}
                                                       width={16} height={16}
                                                       className="h-4 w-4"/>
                                            )}
                                            <span>{item.text}</span>
                                        </Link2>
                                    </BreadcrumbLink>
                                </BreadcrumbItem2>
                                {index < items.length - 1 && (
                                    <BreadcrumbSeparator className={item.separatorClassName} key={`separator-${index}`}>
                                        /
                                    </BreadcrumbSeparator>
                                )}
                            </>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </nav>
    );
};

export default Navbar;