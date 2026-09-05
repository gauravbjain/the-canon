import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Canon — a hundred books of nonfiction",
    template: "%s — The Canon",
  },
  description:
    "Long-form summaries of the hundred nonfiction books that have mattered most: the core idea, how the argument runs, where it is contested, and what to read next.",
};

const ISSUE_DATE = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>

        <header className="masthead">
          <div className="masthead-rule-top" />
          <div className="wrap masthead-inner">
            <p className="masthead-side masthead-side-left">
              <span className="masthead-date">{ISSUE_DATE}</span>
            </p>
            <Link href="/" className="nameplate">
              The Canon
            </Link>
            <p className="masthead-side masthead-side-right">
              <span className="masthead-tag">Nonfiction, summarised properly</span>
            </p>
          </div>
          <div className="masthead-rule-bottom" />
        </header>

        <main id="main">{children}</main>

        <footer className="site">
          <div className="wrap footer-inner">
            <div className="footer-brand">
              <p className="footer-name">The Canon</p>
              <p className="footer-line">
                One hundred works of nonfiction, each given the core idea, the
                argument, the objections, and the onward reading.
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-head">Sources</p>
              <p className="footer-line">
                Modern Library 100 Best Nonfiction · The Guardian&rsquo;s 100
                Best Nonfiction Books · aggregate critical rankings
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-head">Jackets</p>
              <p className="footer-line">
                Cover images from the Open Library covers service, resolved at
                build time.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
