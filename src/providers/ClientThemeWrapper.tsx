'use client';

import { ThemeProvider } from 'next-themes';

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
}
