export function ButtonLeft() {
  return (
    <button
      className="absolute top-1/2 left-0 h-10"
      onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
      disabled={currentSlide === 0}
    >
      <ArrowLeft />
    </button>
  )
}
