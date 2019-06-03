// Get public path
const publicPath = process.env.ASSET_PATH;

// Index route
export const index = () => `/${publicPath}/`;

// Index route
export const request = () => `/${publicPath}/request`;

// Index route
export const manage = () => `/${publicPath}/manage`;

// Index websocket
export const webSocket = () => `/${publicPath}/websocket`;

// Index upload
export const upload = () => `/${publicPath}/upload`;
