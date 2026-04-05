# Quick Reference

## Color Variables
| Token | Hex | Use |
|-------|-----|-----|
| forest | #3D6B4F | Primary CTA, icons, accents |
| forest-dark | #2A4D38 | Hover states |
| forest-deep | #1A3325 | Dark sections bg |
| terracotta | #C67B5C | Warm accent |
| olive | #6B7B3C | Secondary accent |
| earth-50 | #FAF7F2 | Light bg |
| earth-900 | #4A3520 | Body text |
| cream | #FAF7F2 | Text on dark |

## AnimatedSection directions
`"up"` `"left"` `"right"` `"scale"` + optional `delay` (seconds)

## MagneticButton
- Pass `href` → renders `<a>`
- No `href` → renders `<button>`
- Add `className` for all styling

## Component prop reference
```ts
TextReveal: { text, className?, as?, delay? }
Counter: { value, suffix?, duration?, className? }
ParallaxSection: { children, className?, speed? } // speed default 0.3
AnimatedSection: { children, className?, delay?, direction? }
```
