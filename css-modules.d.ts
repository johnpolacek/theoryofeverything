declare module "*.css" {
  const content: Record<string, never>;
  export default content;
}

declare module "katex/dist/katex.min.css" {
  const content: Record<string, never>;
  export default content;
}
