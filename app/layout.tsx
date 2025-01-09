import LayoutWrapper from "../components/reusableComponents/layoutWrapper"
import ThemeAppProvider from "../lib/MUIutils/themeAppProvider"

export const metadata = {
  title: 'Placeholder',
  description: 'Placeholder',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    google: "index,follow"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`/favicon.ico`} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body style={{ margin: 0 }}>
        <ThemeAppProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeAppProvider>
      </body>
    </html >
  )
}