import type { SVGProps } from "react";

/**
 * Inverter: a wall unit carrying a sine wave. Drawn on the same 24px grid, round caps and
 * joins as the lucide icons used across the page, so the icon set stays consistent.
 */
export function InverterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="3" width="16" height="15" rx="2.5" />
      <path d="M8 10.5c1-2.6 2.7-2.6 4 0s3 2.6 4 0" />
      <path d="M9 18v3" />
      <path d="M15 18v3" />
    </svg>
  );
}
