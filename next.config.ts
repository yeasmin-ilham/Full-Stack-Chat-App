import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "valiant-partridge-243.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;
