import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const CONTENT_DIR = path.join(process.cwd(), 'content/blogs');

export const CATEGORIES = [
  { id: 'classical-ml', name: 'Classical-ML', slug: 'classical-ml' },
  { id: 'deep-learning', name: 'Deep Learning', slug: 'deep-learning' },
  { id: 'nlp', name: 'Natural Language Processing', slug: 'nlp' },
  { id: 'llm', name: 'Large Language Models', slug: 'llm' },
];

// Get all blog posts (called at build time)
export function getAllPosts() {
  const posts = [];

  CATEGORIES.forEach(category => {
    const categoryDir = path.join(CONTENT_DIR, category.slug);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir);
      files.forEach(file => {
        if (file.endsWith('.md')) {
          const filePath = path.join(categoryDir, file);
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContents);
          posts.push({
            ...data,
            category: category.slug,
            categoryName: category.name,
            content,
            fileName: file,
          });
        }
      });
    }
  });

  // Sort by category order first, then by post order within category
  return posts.sort((a, b) => {
    const catIndexA = CATEGORIES.findIndex(c => c.slug === a.category);
    const catIndexB = CATEGORIES.findIndex(c => c.slug === b.category);
    if (catIndexA !== catIndexB) return catIndexA - catIndexB;
    return (a.order || 0) - (b.order || 0);
  });
}

// Get single post by slug
export async function getPostBySlug(slug) {
  const allPosts = getAllPosts();
  const postIndex = allPosts.findIndex(p => p.slug === slug);
  const post = allPosts[postIndex];

  if (!post) return null;

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(post.content);

  return {
    ...post,
    contentHtml: processedContent.toString(),
    prevPost: postIndex > 0 ? allPosts[postIndex - 1] : null,
    nextPost: postIndex < allPosts.length - 1 ? allPosts[postIndex + 1] : null,
    currentIndex: postIndex + 1,
    totalPosts: allPosts.length,
  };
}

// Get posts grouped by category
export function getPostsByCategory() {
  const allPosts = getAllPosts();

  return CATEGORIES.map(category => ({
    ...category,
    posts: allPosts
      .filter(p => p.category === category.slug)
      .sort((a, b) => (a.order || 0) - (b.order || 0)),
  }));
}

// Generate static paths for all posts
export function getAllPostSlugs() {
  return getAllPosts().map(post => ({
    slug: post.slug
  }));
}

// Extract headings for TOC
export function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    });
  }

  return headings;
}

// Get first post for redirect
export function getFirstPost() {
  const allPosts = getAllPosts();
  return allPosts.length > 0 ? allPosts[0] : null;
}
