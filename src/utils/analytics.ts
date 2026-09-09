export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...data
    });
  } else {
    // Fallback or dev log
    console.log(`[Analytics Event]: ${eventName}`, data);
  }
};
