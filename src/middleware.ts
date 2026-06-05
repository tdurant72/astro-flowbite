import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Check for Accept: text/markdown
  const acceptHeader = context.request.headers.get("Accept") || "";
  
  if (acceptHeader.includes("text/markdown") && response.status === 200) {
    const html = await response.text();
    
    // Simple HTML to Markdown conversion logic
    // In a production app, you might use 'turndown'
    let markdown = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Remove scripts
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")   // Remove styles
      .replace(/<header\b[^>]*>([\s\S]*?)<\/header>/gi, "# $1\n\n")      // Header to H1
      .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n")
      .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n")
      .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n")
      .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, "$1\n\n")
      .replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, "$1\n")
      .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n")
      .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
      .replace(/<strong\b[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<em\b[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
      .replace(/<[^>]*>/g, ""); // Strip remaining tags

    // Basic cleaning of multiple newlines and entities
    markdown = markdown
      .replace(/\n{3,}/g, "\n\n")
      .replace(/&nbsp;/g, " ")
      .trim();

    const tokenCount = Math.ceil(markdown.length / 4); // Approximation

    return new Response(markdown, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "x-markdown-tokens": tokenCount.toString()
      }
    });
  }

  return response;
});
