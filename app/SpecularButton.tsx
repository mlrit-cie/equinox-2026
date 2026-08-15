'use client';
import { useRef, useEffect } from 'react';
import './SpecularButton.css';

/* Specular highlight done without the `ogl` dependency (the package can't be
   installed in this environment). A single absolutely-positioned radial/
   conic gradient tracks the pointer and fades in with proximity, reproducing
   the same edge-light effect. Props match the React Bits SpecularButton so
   call sites don't change. */

const SpecularButton = (
  {
    children = 'Get Started',
    size = 'lg',
    radius = 18,
    tint = '#ffffff',
    tintOpacity = 0,
    blur = 0,
    textColor = '#f5f5f5',
    lineColor = '#ffffff',
    baseColor = '#525252',
    intensity = 1,
    shineSize = 10,
    shineFade = 40,
    thickness = 1,
    speed = 0.35,
    followMouse = true,
    proximity = 250,
    autoAnimate = false,
    disabled = false,
    onClick = () => {},
  } = {}
) => {
  const btnRef = useRef(null);
  const fxRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const fx = fxRef.current;
    if (!btn || !fx) return;

    let proximityT = 0;
    let raf = 0;
    let idle = 0;
    let last = performance.now();

    const onMove = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const dist = Math.hypot(dx, dy);

      const px = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 100;
      const py = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100;
      fx.style.setProperty('--sb-x', `${px}%`);
      fx.style.setProperty('--sb-y', `${py}%`);

      const t = Math.max(0, 1 - dist / Math.max(proximity, 1));
      proximityT = t * t * (3 - 2 * t);
    };
    window.addEventListener('pointermove', onMove);

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      idle += speed * dt;
      const target = autoAnimate ? 1 : proximityT;
      const cur = parseFloat(fx.style.getPropertyValue('--sb-bright') || '0');
      const next = cur + (target - cur) * (1 - Math.exp(-dt * 8));
      fx.style.setProperty('--sb-bright', next.toFixed(3));
      if (!autoAnimate) {
        fx.style.setProperty('--sb-idle', `${(idle % (Math.PI * 2)).toFixed(3)}rad`);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, [proximity, speed, autoAnimate]);

  const rgba = (hex: string, a: number) => {
    const h = hex.replace('#', '');
    const n = parseInt(
      h.length === 3
        ? h.split('').map((c) => c + c).join('')
        : h,
      16
    );
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  return (
    <button
      ref={btnRef}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`specular-button specular-button--${size}`}
      style={{
        '--sb-radius': `${radius}px`,
        '--sb-tint': tint,
        '--sb-tint-opacity': tintOpacity,
        '--sb-blur': `${blur}px`,
        '--sb-text-color': textColor,
        '--sb-line': rgba(lineColor, Math.max(0.15, Math.min(1, intensity))),
        '--sb-base': rgba(baseColor, 0.45),
        '--sb-bright': '0',
        '--sb-idle': '0rad',
      } as React.CSSProperties}
    >
      <span ref={fxRef} className="specular-button__fx" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </button>
  );
};

export default SpecularButton;
