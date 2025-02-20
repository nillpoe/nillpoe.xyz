import Link from "@/components/ui/link";
import React from "react";

interface SocialProps {
    github?: boolean;
    website?: boolean;
    email?: boolean;
}

const Links = ({github = false, website = false}: SocialProps) => {
    return (
        <div className="w-full mt-2 grid grid-cols-2 gap-4 text-neutral-100/85 sm:grid-cols-3">
            {github && (
                <div>
                    <p>깃허브</p>
                    <Link target="_blank" href="https://github.com/nillpoe">@nillpoe</Link>
                </div>
            )}
            {website && (
                <div>
                    <p>웹사이트</p>
                    <Link target="_blank"
                          href={`https://${process.env.NEXT_PUBLIC_DOMAIN}`}>{process.env.NEXT_PUBLIC_DOMAIN}</Link>
                </div>
            )}
        </div>
    );
};

export default Links;