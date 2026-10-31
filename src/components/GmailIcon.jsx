import React from 'react';

/**
 * Official Google Workspace Gmail Logo Vector Icon (2020 - Present)
 * Perfectly matches Google's official design specifications and colors:
 * - Left Leg: Blue (#4285F4)
 * - Right Leg: Green (#34A853)
 * - Top Right Fold: Yellow (#FBBC04)
 * - Center V: Red (#EA4335)
 * - Top Left Fold: Dark Red (#C5221F)
 */
export const GmailIcon = ({ className = 'w-5 h-4', ...props }) => {
  return (
    <svg
      viewBox="0 49.4 512 399.42"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gmail Logo"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        {/* Left Flap / Leg (Blue) */}
        <path
          fill="#4285f4"
          d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
        />

        {/* Right Flap / Leg (Green) */}
        <path
          fill="#34a853"
          d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
        />

        {/* Top Right Fold (Yellow) */}
        <path
          fill="#fbbc04"
          d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
        />

        {/* Center Front Envelope V (Red) */}
        <path
          fill="#ea4335"
          d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
        />

        {/* Top Left Fold (Dark Red Shadow) */}
        <path
          fill="#c5221f"
          d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
        />
      </g>
    </svg>
  );
};

export default GmailIcon;
