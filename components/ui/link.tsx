import React from "react";
import Link2 from "next/link";
import {cn} from "@/lib/utils";
import {ArrowUpRight} from "lucide-react";

const Link = ({href, target, children, className}: {
    href: string,
    target?: string,
    children?: React.ReactNode | undefined,
    className?: string
}) => (
    <Link2 href={href} target={target}
           className={cn("flex w-fit text-blue-400/90 hover:text-blue-400", className)}>
        {children}
        <ArrowUpRight className="ml-0.5 w-3.5 h-3.5"/>
    </Link2>
);

export default Link;