import Link from "@/components/ui/link";
import React from "react";

interface SocialProps {
    discord?: boolean;
    telegram?: boolean;
    email?: boolean;
}

const Social = ({discord = false, telegram = false, email = false}: SocialProps) => {
    return (
        <div className="w-full mt-2 grid grid-cols-2 gap-4 text-neutral-100/85 sm:grid-cols-3">
            {discord && (
                <div>
                    <p>디스코드</p>
                    <Link target="_blank" href="https://discord.com/users/1102166553027432488">@nillpoe</Link>
                </div>
            )}
            {telegram && (
                <div>
                    <p>텔레그램</p>
                    <Link target="_blank" href="https://t.me/nillpoe">@nillpoe</Link>
                </div>
            )}
            {email && (
                <div>
                    <p>이메일</p>
                    <Link target="_blank" href="mailto:hello@nillpoe.xyz">hello@nillpoe.xyz</Link>
                </div>
            )}
        </div>
    );
};

export default Social;