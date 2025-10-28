import './globals.css'

export const metadata = {
  title: 'Thompson & Associates | Experienced Legal Counsel',
  description: 'Premier law firm providing exceptional legal services in corporate law, litigation, estate planning, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
