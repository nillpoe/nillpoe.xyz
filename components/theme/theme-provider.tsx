"use client";

import React from "react";
import {useEffect, useState} from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function ThemeProvider({children, ...props}: React.ComponentProps<typeof NextThemesProvider>) {
    const [isMount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (!isMount) {
        return null;
    }

    return <NextThemesProvider {...props}
                               attribute="class"
                               forcedTheme="dark">
        {children}
    </NextThemesProvider>;
}