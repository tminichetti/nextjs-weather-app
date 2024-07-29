import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ThemeProvider } from '@/components/themes-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Script from 'next/script';
import { CommandDialogDemo } from '@/components/command-dialog-demo';
import { CodeIcon, HeartIcon } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Weather Forecast',
	description: 'Weather forecast with current conditions, wind, air quality, and what to expect for the next 3 days.',
};

export const dynamic = "force-dynamic"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`} strategy="beforeInteractive" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className='container mx-auto flex min-h-screen flex-col p-4 md:px-8 gap-4 antialiased'>
						<nav className="flex justify-end gap-4">
							<CommandDialogDemo hideOnHomePage />
							<ModeToggle />
						</nav>
						{children}
					</main>
					<footer className="py-4">
						<div
							className="group flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
							aria-hidden={true}
						>
							<CodeIcon className="h-5 w-5" />
							<span>with</span>
							<HeartIcon className="h-4 w-4 group-hover:text-red-500" />
							<span>in Ajaccio</span>
						</div>
					</footer>
				</ThemeProvider>
				<TailwindIndicator />
			</body>
		</html>
	);
}

