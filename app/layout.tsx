import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ThemeProvider } from '@/components/themes-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Script from 'next/script';
import { CommandDialogDemo } from '@/components/command-dialog-demo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
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
					<main className='container mx-auto flex min-h-screen flex-col px-4 md:px-8 py-4 gap-4 antialiased'>
						<nav className="flex justify-end gap-4">
							<CommandDialogDemo hideOnHomePage />
							<ModeToggle />
						</nav>
						{children}
					</main>
				</ThemeProvider>
				<TailwindIndicator />
			</body>
		</html>
	);
}

