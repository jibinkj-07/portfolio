import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: ['192.168.1.186'],
    
    // Optimise images
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default nextConfig;
