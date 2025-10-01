// Get path from URL
const path = window.location.pathname.split("/").filter(Boolean);
const id = path[path.length - 1]; // e.g., "12345"

debug.log(id);
