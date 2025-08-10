import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Aaroh Sharma - Full Stack Developer',
	description:
		'Hi, I am Aaroh Sharma, a senior at UT Austin with a passion for full stack development and building impactful projects. Explore my portfolio to see my work and skills in action.',
	keywords: [
		'Full Stack Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Distributed Systems',
		'Embedded Systems',
        'Cloud Computing',
		'DevOps',
		'Aaroh Sharma',
		'Node.js',
		'Python',
		'Java',
        'C',
        'C++',
        'React',
        'Angular',
        'C#',
        'ModBus Protocol',
        'Typescript',
        'HTML',
        'CSS',
        'SCSS',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Aaroh Sharma' }],
	creator: 'Aaroh Sharma',
	openGraph: {
		title: 'Aaroh Sharma - Full Stack Developer Portfolio',
		description: 'Student and Full Stack Developer specializing in building robust and scalable systems. Explore my projects and technical expertise.',
		url: 'https://aaroh.sh',
		siteName: 'Aaroh Sharma - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Aaroh Sharma - Full Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aaroh Sharma - Full Stack Developer',
		description: 'Student and Full Stack Developer specializing in building robust and scalable systems. Explore my projects and technical expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
