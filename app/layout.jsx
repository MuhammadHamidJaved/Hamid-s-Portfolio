import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import './styles.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Muhammad Hamid Javed - ML Student & Developer',
  description: 'Muhammad Hamid Javed - ML Student & Full Stack Developer. Specialized in Machine Learning, Web Development, and Mobile App Development.',
  keywords: 'Muhammad Hamid Javed, Machine Learning, Web Developer, React, Python, Portfolio',
  author: 'Muhammad Hamid Javed',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
