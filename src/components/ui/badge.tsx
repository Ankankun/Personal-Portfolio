import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        categoryMajor: "border-transparent bg-amber-100 text-amber-800 font-semibold",
        categoryMinor: "border-transparent bg-stone-200 text-stone-700 font-semibold",
        statusCompleted: "border-transparent bg-green-100 text-green-800 font-semibold",
        statusOngoing: "border-transparent bg-blue-100 text-blue-900 font-semibold",
        tech: "border-transparent bg-stone-100 text-primary font-medium rounded-md",
        logCategory: "border-transparent bg-primary/10 text-primary font-medium text-[0.7rem] px-2 py-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
