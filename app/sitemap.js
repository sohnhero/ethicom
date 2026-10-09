export default function sitemap() {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [{ url: origin, changeFrequency: "monthly", priority: 1 }];
}
