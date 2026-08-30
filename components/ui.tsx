import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`page-container ${className}`}>{children}</div>;
}

export function NarrowContainer({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`page-container-narrow ${className}`}>{children}</div>;
}

export function Section({
  id,
  tint = false,
  className = "",
  children,
}: {
  id: string;
  tint?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section ${tint ? "section-tint" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function BlockTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={`block-title ${className}`}>{children}</h3>;
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`lead ${className}`}>{children}</p>;
}

export function Card({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <article className={`card ${className}`} {...rest}>
      {children}
    </article>
  );
}

export function MiniCard({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  return (
    <div className={`mini-card ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function Badge({
  variant,
  children,
}: {
  variant: "official" | "free" | "hands" | "newbie";
  children: ReactNode;
}) {
  const cls =
    variant === "official"
      ? "b-official"
      : variant === "free"
        ? "b-free"
        : variant === "hands"
          ? "b-hands"
          : "b-newbie";
  return <span className={`badge ${cls}`}>{children}</span>;
}

export function Badges({ children }: { children: ReactNode }) {
  return <div className="badges">{children}</div>;
}

export function Btn({
  variant = "primary",
  large = false,
  className = "",
  children,
  ...rest
}: {
  variant?: "primary" | "outline";
  large?: boolean;
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${
    large ? "btn-lg" : ""
  } ${className}`;
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
}

export function NoteBox({
  warn = false,
  children,
}: {
  warn?: boolean;
  children: ReactNode;
}) {
  return <div className={`note-box ${warn ? "note-warn" : ""}`}>{children}</div>;
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="check-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`flow-arrow ${className}`} aria-hidden="true">
      <svg
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7h15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m11 1 6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`flow-flag ${className}`} aria-hidden="true">
      <svg
        width="14"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="1.5" width="1.8" height="13" rx="0.9" fill="#161616" />
        <rect x="4.8" y="2.5" width="7.6" height="3.2" fill="#E63312" />
        <rect x="4.8" y="5.7" width="7.6" height="3.2" fill="#FFFFFF" />
      </svg>
    </span>
  );
}