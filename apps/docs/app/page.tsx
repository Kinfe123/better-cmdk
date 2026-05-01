import Link from "next/link";

const title = "better cmdk";
const description = "A beautiful command palette component for React, built on cmdk and Radix UI. Styled with Tailwind CSS v4 using the shadcn/ui design system.";

export default function HomePage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href="/docs">Open docs</Link>
    </main>
  );
}
