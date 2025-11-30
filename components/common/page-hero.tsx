interface PageHeroProps {
  title: string
  description: string
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="px-6 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
