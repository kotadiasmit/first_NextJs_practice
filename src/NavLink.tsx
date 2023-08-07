"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
}

export function NavLink({
  href,
  exact = false,
  children,
  className = "",
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = !exact ? pathname === href : pathname.startsWith(href);
  // console.log(href);
  // console.log(pathname);
  // console.log(pathname.startsWith(href));
  // console.log(isActive);
  if (isActive) {
    className += " active";
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
