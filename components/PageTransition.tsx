'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition Component
 * Provides elegant fade and slide transitions between pages in Next.js 15
 * 
 * Usage:
 * import PageTransition from './components/PageTransition';
 * 
 * // Wrap your page content
 * <PageTransition>
 *   <YourPageContent />
 * </PageTransition>
 */

const PageTransition = ({ 
  children, 
  duration = 500,
  type = 'fade-slide',
  className = ''
}) => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    // Handle route changes
    if (pathname !== currentPath) {
      setIsVisible(false);
      
      const timer = setTimeout(() => {
        setCurrentPath(pathname);
        setIsVisible(true);
      }, duration / 2);

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [pathname, currentPath, duration]);

  const getTransitionStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      willChange: 'transform, opacity',
    };

    switch (type) {
      case 'fade':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
        };
      
      case 'fade-slide':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        };
      
      case 'slide-left':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0px)' : 'translateX(-30px)',
        };
      
      case 'slide-right':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0px)' : 'translateX(30px)',
        };
      
      case 'scale-fade':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        };
      
      case 'elegant':
        return {
          ...baseStyles,
          opacity: isVisible ? 1 : 0,
          transform: isVisible 
            ? 'translateY(0px) scale(1)' 
            : 'translateY(30px) scale(0.98)',
          filter: isVisible ? 'blur(0px)' : 'blur(1px)',
        };
      
      default:
        return baseStyles;
    }
  };

  return (
    <div 
      style={getTransitionStyles()}
      className={className}
    >
      {children}
    </div>
  );
};

/**
 * Higher-order component for automatic page transitions
 * Use this to wrap your page components for consistent transitions
 */
export const withPageTransition = (WrappedComponent, options = {}) => {
  return function TransitionedPage(props) {
    return (
      <PageTransition {...options}>
        <WrappedComponent {...props} />
      </PageTransition>
    );
  };
};

/**
 * Custom hook for programmatic transitions
 * Useful for triggering transitions based on user interactions
 */
export const usePageTransition = (duration = 500) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = (callback) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (callback) callback();
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, duration / 2);
    }, duration / 2);
  };

  return { isTransitioning, triggerTransition };
};

/**
 * Loading transition component for async operations
 */
export const LoadingTransition = ({ 
  isLoading, 
  children, 
  loader = null,
  duration = 300 
}) => {
  const [showContent, setShowContent] = useState(!isLoading);

  useEffect(() => {
    if (isLoading) {
      setShowContent(false);
    } else {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, duration / 2);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, duration]);

  return (
    <div style={{ position: 'relative', minHeight: '100px' }}>
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(10px)',
          transition: `all ${duration}ms ease-out`,
        }}
      >
        {children}
      </div>
      
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isLoading ? 1 : 0,
            transition: `opacity ${duration}ms ease-out`,
          }}
        >
          {loader || <div>Loading...</div>}
        </div>
      )}
    </div>
  );
};

export default PageTransition;