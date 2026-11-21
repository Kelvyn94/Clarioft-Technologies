import Link from "next/link";
import Brand from "@/components/Brand";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand variant="light" />

            <p>
              Building practical digital systems that help businesses
              operate smarter, work better and grow with confidence.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Explore</h3>
              <Link href="/about">About us</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/projects">Projects</Link>
            </div>

            <div>
              <h3>Get in touch</h3>
              <Link href="/contact">Start a conversation</Link>
              <a href="mailto:hello@clarioft.com">Email us</a>
              <span>Kenya · Working globally</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clarioft Technologies.</span>
          <span>Technology built around your business.</span>
        </div>
      </div>
    </footer>
  );
}
