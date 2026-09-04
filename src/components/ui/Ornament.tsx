interface OrnamentProps {
  className?: string;
}

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament__diamond" />
    </div>
  );
}
