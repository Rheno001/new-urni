type IconProps = {
  className?: string
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 6.5V17.5L17 12L8 6.5Z" fill="currentColor" />
    </svg>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 4.5C5 4.22 5.22 4 5.5 4H8.38C8.66 4 8.89 4.22 8.96 4.49L9.8 8.64C9.86 8.92 9.7 9.2 9.43 9.35L8.12 10.18C8.57 11.24 9.3 12.26 10.28 13.24C11.26 14.22 12.28 14.95 13.34 15.4L14.17 14.09C14.32 13.82 14.6 13.66 14.88 13.72L19.03 14.56C19.3 14.63 19.52 14.86 19.52 15.14V18.02C19.52 18.3 19.3 18.52 19.02 18.52H17.5C11.98 18.52 7.48 14.02 7.48 8.5V6.98C7.48 6.7 7.7 6.48 7.98 6.48H10.86C11.14 6.48 11.37 6.71 11.44 6.99L12.3 11.12C12.38 11.48 12.25 11.86 11.92 12.09L10.28 13.13C10.89 14.17 11.72 15.1 12.74 15.8L13.82 14.78C14.08 14.52 14.48 14.42 14.82 14.53L18.96 15.4C19.3 15.5 19.52 15.81 19.52 16.16V18.01C19.52 18.65 18.99 19.18 18.35 19.18H17.89C12.11 19.18 7.48 14.55 7.48 8.77V7.96C7.48 6.68 6.41 5.5 5.13 5.5H5V4.5Z" fill="currentColor" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21C15.333 17.667 18 14.7 18 11.5C18 7.91 15.314 5 12 5C8.686 5 6 7.91 6 11.5C6 14.7 8.667 17.667 12 21Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}
