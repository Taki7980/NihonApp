/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,
      images: {
            domains: ["randomuser.me", "firebasestorage.googleapis.com", "web-japan.org",
                  "images.unsplash.com",
                  "as1.ftcdn.net"
            ],
      }
}

module.exports = nextConfig