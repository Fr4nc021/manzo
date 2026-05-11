export default function GlassSurface({
  children,
  className = "",
  width,
  height,
  borderRadius = 16,
  blur = 14,
  backgroundOpacity = 0.35,
  saturation = 1.6,
  brightness = 1,
  padding = "16px",
}) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        padding,
        borderRadius,
        background: `rgba(255, 255, 255, ${backgroundOpacity})`,
        backdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </div>
  );
}
