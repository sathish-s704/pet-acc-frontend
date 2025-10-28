// Utility helpers for API and asset URLs
export const API_BASE = import.meta.env.VITE_API_URL || '/api';

// Backend root without the /api suffix (used for serving uploaded assets)
export const BACKEND_URL = (import.meta.env.VITE_API_URL || '').replace(/\/api\/?$/, '') || '';

export const getAssetUrl = (path) => {
  if (!path) return '';
  // If already an absolute URL, return as-is
  if (typeof path === 'string' && path.startsWith('http')) return path;
  // Normalize backslashes to forward slashes
  const cleanPath = path.replace(/\\/g, '/');
  // Ensure BACKEND_URL does not end with a slash
  const base = BACKEND_URL.replace(/\/$/, '');
  return base ? `${base}/${cleanPath.replace(/^\/+/, '')}` : cleanPath;
};

export default {
  API_BASE,
  BACKEND_URL,
  getAssetUrl,
};
