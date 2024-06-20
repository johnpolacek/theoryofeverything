export default function Section({id, title, children}: {id: string; title: string; children: React.ReactNode}) {
  return (
    <section id={id} className="flex flex-col gap-4 px-8 pt-12 pb-24 border-b border-black/10 border-dashed">
      <h2 className="text-5xl font-light pb-4">{title}</h2>
      <div className="max-w-4xl flex flex-col gap-6 text-lg font-light">
        {children}
      </div>
    </section>
  )
}
