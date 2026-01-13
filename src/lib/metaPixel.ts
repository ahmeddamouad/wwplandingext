// Meta (Facebook) Pixel tracking utilities
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

let isInitialized = false;

/**
 * Initialize Meta Pixel with the configured Pixel ID
 * Safe to call multiple times - will only initialize once
 */
export function initMetaPixel(): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;

  // Skip if no Pixel ID configured
  if (!pixelId) {
    console.warn('Meta Pixel ID not configured');
    return;
  }

  // Prevent duplicate initialization
  if (isInitialized) {
    return;
  }

  // Check if already loaded by external script
  if (window.fbq) {
    isInitialized = true;
    return;
  }

  // Initialize Meta Pixel
  try {
    /* eslint-disable */
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    /* eslint-enable */

    window.fbq?.('init', pixelId);
    isInitialized = true;
    console.log('Meta Pixel initialized:', pixelId);
  } catch (error) {
    console.error('Failed to initialize Meta Pixel:', error);
  }
}

/**
 * Track a PageView event
 */
export function trackPageView(): void {
  if (!isInitialized || !window.fbq) {
    return;
  }

  try {
    window.fbq('track', 'PageView');
  } catch (error) {
    console.error('Failed to track PageView:', error);
  }
}

/**
 * Track a Lead event (form submission)
 */
export function trackLead(): void {
  if (!isInitialized || !window.fbq) {
    return;
  }

  try {
    window.fbq('track', 'Lead');
    console.log('Meta Pixel: Lead event tracked');
  } catch (error) {
    console.error('Failed to track Lead:', error);
  }
}
