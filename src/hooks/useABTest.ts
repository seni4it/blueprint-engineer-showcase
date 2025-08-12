import { useEffect, useState } from 'react';
import { abTesting, type Variant } from '@/lib/ab-testing';
import { analytics } from '@/lib/analytics';

interface UseABTestOptions {
  experimentId: string;
  trackImpression?: boolean;
}

export function useABTest({ experimentId, trackImpression = true }: UseABTestOptions): {
  variant: Variant;
  setVariant: (variant: Variant) => void;
  trackConversion: (action: string, value?: number) => void;
} {
  const [variant, setVariantState] = useState<Variant>(abTesting.getVariant());
  
  useEffect(() => {
    // Track impression
    if (trackImpression) {
      analytics.trackExperimentImpression(experimentId, variant);
    }
  }, [experimentId, variant, trackImpression]);
  
  const setVariant = (newVariant: Variant) => {
    abTesting.setVariant(newVariant);
    setVariantState(newVariant);
  };
  
  const trackConversion = (action: string, value?: number) => {
    analytics.trackConversion(action, variant, value);
  };
  
  return {
    variant,
    setVariant,
    trackConversion,
  };
}