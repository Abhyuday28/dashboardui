interface ArcProgressBarProps {
  progress: number
  label: string
  className?: string
}

export function ArcProgressBar({ progress, label, className = "" }: ArcProgressBarProps) {
  // Configuration for horizontal layout
  const size = 200
  const strokeWidth = 1
  const radius = 100
  const center = size / 2

  // Calculate angles for semi-circle (180 degrees)
  const startAngle = -180 // Start from top
  const endAngle = 0 // End at bottom right
  const totalAngle = endAngle - startAngle

  // Number of tick marks
  const tickCount = 46
  const tickLength = 20
  const tickRadius = radius + 30

  // Calculate progress angle
  const progressAngle = (progress / 100) * totalAngle

  // Generate tick marks
  const ticks = []
  for (let i = 0; i <= tickCount; i++) {
    const angle = startAngle + (i / tickCount) * totalAngle
    const angleRad = (angle * Math.PI) / 180

    const x1 = center + (tickRadius - tickLength) * Math.cos(angleRad)
    const y1 = center + (tickRadius - tickLength) * Math.sin(angleRad)
    const x2 = center + tickRadius * Math.cos(angleRad)
    const y2 = center + tickRadius * Math.sin(angleRad)

    const isActive = angle <= startAngle + progressAngle

    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? "#374151" : "#e5e7eb"}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />,
    )
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg width={size} height={size * 0.5} className="overflow-visible">
          {ticks}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl font-semibold text-gray-900 mt-11 mb-1">{progress}%</div>
          <div className="text-sm text-gray-600 font-medium">{label}</div>
        </div>
      </div>
    </div>
  )
}
