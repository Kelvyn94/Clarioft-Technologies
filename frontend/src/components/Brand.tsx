import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  href?: string;
  variant?: "dark" | "light";
  className?: string;
};

export default function Brand({
  href = "/",
  variant = "dark",
  className = "",
}: BrandProps) {
  return (
    <Link
      href={href}
      className={`brand ${variant === "light" ? "brand-light" : ""} ${className}`}
      aria-label="Clarioft Technologies home"
    >
      <Image
        src="/brand/clarioft-mark.svg"
        alt=""
        width={35}
        height={35}
        priority
        className="brand-image"
      />
      <span className="brand-copy">
        <strong>clarioft</strong>
        <small>TECHNOLOGIES</small>
      </span>
    </Link>
  );
}
