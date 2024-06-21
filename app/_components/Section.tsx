export default function Section({id, title, children}: {id: string; title?: string; children: React.ReactNode}) {
  return (
    <section id={id} className="flex flex-col gap-4 px-8 pt-12 pb-24 xl:px-16 border-b border-black/10 border-dashed last:border-b-0 animate">
      {title && <h2 className="text-4xl sm:text-5xl font-light pb-4">{title}</h2>}
      <div className="max-w-[50rem] flex flex-col gap-6 text-lg font-light">
        {children}
      </div>
    </section>
  )
}
