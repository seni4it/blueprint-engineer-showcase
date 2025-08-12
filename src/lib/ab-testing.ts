export type Variant = 'A' | 'B';

interface ABTestConfig {
  experimentId: string;
  variants: Variant[];
  defaultVariant?: Variant;
}

export class ABTesting {
  private static instance: ABTesting;
  private variant: Variant | null = null;
  
  private constructor() {}
  
  static getInstance(): ABTesting {
    if (!ABTesting.instance) {
      ABTesting.instance = new ABTesting();
    }
    return ABTesting.instance;
  }
  
  /**
   * Get the current variant for the user
   * Priority: URL param > localStorage > random assignment
   */
  getVariant(): Variant {
    if (this.variant) return this.variant;
    
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const forced = urlParams.get('variant');
    
    if (forced && ['A', 'B'].includes(forced.toUpperCase())) {
      const variant = forced.toUpperCase() as Variant;
      localStorage.setItem('ab-variant', variant);
      this.variant = variant;
      return variant;
    }
    
    // Check localStorage
    const stored = localStorage.getItem('ab-variant') as Variant | null;
    if (stored && ['A', 'B'].includes(stored)) {
      this.variant = stored;
      return stored;
    }
    
    // Random assignment
    const variant: Variant = Math.random() > 0.5 ? 'A' : 'B';
    localStorage.setItem('ab-variant', variant);
    this.variant = variant;
    return variant;
  }
  
  /**
   * Force a specific variant (useful for testing)
   */
  setVariant(variant: Variant): void {
    this.variant = variant;
    localStorage.setItem('ab-variant', variant);
    
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('variant', variant);
    window.history.replaceState({}, '', url.toString());
  }
  
  /**
   * Clear variant selection
   */
  clearVariant(): void {
    this.variant = null;
    localStorage.removeItem('ab-variant');
    
    // Remove from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('variant');
    window.history.replaceState({}, '', url.toString());
  }
}

export const abTesting = ABTesting.getInstance();