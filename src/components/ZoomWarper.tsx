export const ZoomWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full origin-center scale-150 animate-zoom-in">
      {children}
    </div>
  );
};
