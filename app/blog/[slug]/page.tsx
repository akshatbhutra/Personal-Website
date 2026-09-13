import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <article>
      <h1 className="font-display font-medium text-3xl mb-2">{post.title}</h1>
      <p className="text-sm text-muted mb-8 font-mono">
        {post.date} · {post.readingTime}
      </p>
      <div className="prose prose-neutral max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
