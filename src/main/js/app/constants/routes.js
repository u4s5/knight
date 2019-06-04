// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const request = () => `/${publicPath}/request`;

// Index route
export const manage = () => `/${publicPath}/manage`;

// Index control
export const control = () => `/${publicPath}/control`;

// Index upload
export const upload = () => `/${publicPath}/upload`;
