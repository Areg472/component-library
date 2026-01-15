"use client";

import { ReactNode, useState } from "react";

export function DocSidebar({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  );
}

export function DocSidebarItem({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <a href={href}>{children}</a>
    </div>
  );
}

export function DocSidebarGroup({
  title,
  children,
  defaultOpen = false,
  className,
  titleClassName,
  contentClassName,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button onClick={() => setIsOpen(!isOpen)} className={titleClassName}>
        {title}
        <svg
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
}

export function DocSidebarHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <h4 className={className}>{text}</h4>;
}
