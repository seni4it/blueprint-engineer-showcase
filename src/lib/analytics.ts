declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export class Analytics {
  private static instance: Analytics;
  private initialized = false;
  
  private constructor() {}
  
  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }
  
  /**
   * Initialize Google Analytics
   */
  init(measurementId: string): void {
    if (this.initialized) return;
    
    // Add gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    
    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    
    this.initialized = true;
  }
  
  /**
   * Track experiment impression
   */
  trackExperimentImpression(experimentId: string, variant: string): void {
    if (!window.gtag) {
      console.log('[Analytics] Experiment impression:', { experimentId, variant });
      return;
    }
    
    window.gtag('event', 'experiment_impression', {
      experiment_id: experimentId,
      variant_id: variant,
    });
  }
  
  /**
   * Track conversion event
   */
  trackConversion(action: string, variant: string, value?: number): void {
    if (!window.gtag) {
      console.log('[Analytics] Conversion:', { action, variant, value });
      return;
    }
    
    window.gtag('event', 'conversion', {
      event_category: 'engagement',
      event_label: action,
      value: variant,
      ...(value !== undefined && { currency: 'USD', transaction_value: value })
    });
  }
  
  /**
   * Track custom event
   */
  trackEvent(eventName: string, parameters?: Record<string, any>): void {
    if (!window.gtag) {
      console.log('[Analytics] Event:', eventName, parameters);
      return;
    }
    
    window.gtag('event', eventName, parameters);
  }
  
  /**
   * Track page view
   */
  trackPageView(path?: string): void {
    if (!window.gtag) {
      console.log('[Analytics] Page view:', path || window.location.pathname);
      return;
    }
    
    window.gtag('event', 'page_view', {
      page_path: path || window.location.pathname,
    });
  }
}

export const analytics = Analytics.getInstance();