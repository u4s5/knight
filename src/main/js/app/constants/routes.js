// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const request = () => `/${publicPath}/request`;

// Index route
export const manage = () => `/${publicPath}/manage`;

// Index control1
export const control1 = () => `/${publicPath}/control1`;

// Index control2
export const control2 = () => `/${publicPath}/control2`;

// Index upload
export const upload = () => `/${publicPath}/upload`;
