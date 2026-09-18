import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build a plain static site into `out/` so GitHub Pages can host it.
  output: "export",
  // GitHub Pages has no image server, so images are served as-is.
  images: { unoptimized: true },
  // Write /contact/index.html rather than /contact.html, so plain static
  // servers (and GitHub Pages) resolve /contact without a 404.
  trailingSlash: true,
};

export default nextConfig;
