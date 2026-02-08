import { LucideIcon, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeaturePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: LucideIcon
    text?: string
    containerClassName?: string
}

export function FeaturePlaceholder({
    icon: Icon = ImageIcon,
    text = "Image Placeholder",
    className,
    containerClassName,
    ...props
}: FeaturePlaceholderProps) {
    return (
        <div className={cn("relative overflow-hidden bg-muted/30 group", containerClassName)}>
            <div className={cn("absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5", className)} />

            {/* Abstract Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105">
                    <div className="rounded-full bg-background/50 p-4 shadow-sm backdrop-blur-sm ring-1 ring-border/50">
                        <Icon className="h-8 w-8 text-muted-foreground/50" />
                    </div>
                    {text && (
                        <span className="font-medium text-muted-foreground/70 tracking-wide text-sm uppercase">
                            {text}
                        </span>
                    )}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
            <div className="absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-secondary/10 blur-3xl transition-all duration-500 group-hover:bg-secondary/20" />
        </div>
    )
}
