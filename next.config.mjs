/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{ hostname: "curious-gecko-276.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
