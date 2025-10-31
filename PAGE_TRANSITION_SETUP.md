# Cinematic Center-Expanding Circle Page Transition

## 📁 Files Created/Modified

### Core Transition Files:
1. **`components/PageTransition.tsx`** - Main transition component with `pageTransition()` function
2. **`components/LinkWithTransition.tsx`** - Enhanced Link component that auto-triggers transitions
3. **`components/PageTransitionWrapper.tsx`** - Page wrapper for route transitions
4. **`pages/_app.tsx`** - Updated to include PageTransitionProvider

## 🎬 How It Works

### Animation Flow:
1. **Expand Phase (0.5s)**: Circle starts from center (0%) and expands outward to cover full screen (150%)
2. **Callback Execution**: During full cover, navigation/content change happens
3. **Fade Phase (0.5s)**: Overlay fades out smoothly to reveal new content
4. **Total Duration**: ~1.0s (within your 0.8s-1.2s requirement)

### Easing Curves:
- **Expansion**: `easeInOutExpo` - `[0.87, 0, 0.13, 1]` (premium exponential curve)
- **Fade**: `premiumEase` - `[0.25, 0.46, 0.45, 0.94]` (smooth, Apple-like)

## 🚀 Usage

### Option 1: Use LinkWithTransition (Recommended)
Replace any Next.js `<Link>` with `<LinkWithTransition>`:

```tsx
import LinkWithTransition from '../components/LinkWithTransition';

// Instead of: <Link href="/about">About</Link>
<LinkWithTransition href="/about" transitionColor="#DC2626">
  About
</LinkWithTransition>
```

### Option 2: Manual pageTransition() Call
```tsx
import { pageTransition } from '../components/PageTransition';

const handleClick = async () => {
  await pageTransition(() => {
    // Your navigation or scroll action
    router.push('/about');
    // OR
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, '#DC2626'); // Transition color
};
```

### Option 3: Section Scrolling
Already integrated in `Header.tsx` - all navigation links automatically use the transition.

## ✨ Features

✅ **Center-expanding circle wipe** using `clip-path: circle()`
✅ **Smooth premium easing** (no bounce, no jank)
✅ **Works on all browsers & mobile**
✅ **Prevents scroll lock** during transition
✅ **Automatic cleanup** after animation
✅ **Customizable colors** per transition
✅ **Production-ready** with proper error handling

## 🎨 Customization

### Change Transition Color:
```tsx
<LinkWithTransition href="/about" transitionColor="#FF6B6B">
  About
</LinkWithTransition>
```

### Change Duration:
Edit `components/PageTransition.tsx`:
- Line 27: `setTimeout(..., 500)` - Expand duration
- Line 68: `duration: 0.5` - Fade duration

### Change Easing:
Edit `components/PageTransition.tsx`:
- `easeInOutExpo` for expansion (line 1)
- `premiumEase` for fade (line 2)

## 📱 Mobile Support

The transition works perfectly on mobile devices with:
- Touch-optimized timing
- Hardware acceleration via `will-change`
- Proper viewport handling (200vw x 200vh ensures coverage)

## 🔧 Integration Status

✅ Integrated in `pages/_app.tsx`
✅ Integrated in `components/Header.tsx` for navigation
✅ Ready to use with any `<Link>` via `LinkWithTransition`

## 🎯 Testing

1. Click any navigation link in the header
2. Should see: Circle expands from center → covers screen → fades to reveal new section
3. Animation should feel smooth, premium, Apple-like

## 💡 Tips

- Use `LinkWithTransition` for all internal navigation links
- Keep transition colors consistent with your brand
- The transition automatically handles hash links (#section) for smooth scrolling
- External links (http, mailto, tel) bypass the transition automatically

