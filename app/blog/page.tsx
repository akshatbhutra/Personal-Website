import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — Akshat Bhutra",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="font-display font-medium text-3xl mb-8">Blog</h1>

      {posts.length === 0 && (
        <p className="text-muted">Nothing published yet — check back soon.</p>
      )}

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-line pb-8">
            <Link
              href={`/blog/${post.slug}`}
              className="link-underline text-ink font-medium text-lg block mb-1"
            >
              {post.title}
            </Link>
            <p className="text-sm text-muted mb-2 font-mono">
              {post.date} · {post.readingTime}
            </p>
            <p className="text-muted">{post.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
