import { Suspense, memo, ComponentType } from 'react';

export const CW = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = memo((props: P) => (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
					{/* need to add loader here */}
          Loading...
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  ));
  
  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
