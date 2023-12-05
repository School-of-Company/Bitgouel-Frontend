/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ["common", "api"],

    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`,
            },
        ]
    },
}

module.exports = nextConfig
