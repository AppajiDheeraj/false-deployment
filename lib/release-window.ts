export function getReleaseWindow() {
  if (process.env.NODE_ENV !== 'production') {
    return 'local-preview';
  }

  const releaseWindow = process.env.NEXT_PUBLIC_RELEASE_WINDOW;

  if (!releaseWindow) {
    throw new Error('Missing NEXT_PUBLIC_RELEASE_WINDOW in production builds.');
  }

  return releaseWindow;
}