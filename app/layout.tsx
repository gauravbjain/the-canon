import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Canon — nonfiction worth the time",
    template: "%s — The Canon",
  },
  description:
    "Deep summaries of the hundred nonfiction books that have mattered most, and what each one connects to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="masthead">
          <div className="wrap masthead-inner">
            <Link href="/" className="wordmark">
              The <span>Canon</span>
            </Link>
            <p className="masthead-note">Nonfiction, summarised properly</p>
          </div>
        </header>
        {children}
        <footer className="site">
          <div className="wrap">
            <p>
              A working library. Each entry is a long-form summary — the core
              idea, the argument, where it is contested, and what to read next.
            </p>
            <p>
              Built from the Modern Library 100 Best Nonfiction, the Guardian&rsquo;s
              100 Best Nonfiction Books, and aggregate critical rankings.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
