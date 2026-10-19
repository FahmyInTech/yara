export default function SprocketDivider() {
  return (
    <div className="py-10 lg:py-14" aria-hidden="true">
      <div className="sprocket-divider mx-auto max-w-6xl px-6 lg:px-10">
        <div className="sprocket-divider__line" />
        <div className="sprocket-divider__marks">
          <span className="sprocket-divider__mark" />
          <span className="sprocket-divider__mark" />
          <span className="sprocket-divider__mark" />
          <span className="sprocket-divider__mark" />
          <span className="sprocket-divider__mark" />
        </div>
        <div className="sprocket-divider__line" />
      </div>
    </div>
  )
}
