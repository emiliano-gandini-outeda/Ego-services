import type { LightbulbIcon as LucideProps } from "lucide-react"

export function DiscordIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
      <path d="M7.5 16.5c3.5 1 5.5 1 9 0" />
      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
      <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
    </svg>
  )
}
