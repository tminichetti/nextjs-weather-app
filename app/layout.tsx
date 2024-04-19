import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { ThemeProvider } from '@/components/themes-provider';
import { ModeToggle } from '@/components/ui/mode-toggle';

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
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className='container mx-auto flex min-h-screen flex-col px-4 md:px-8 py-4 gap-4 antialiased'>
						<nav className="flex justify-end">
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

