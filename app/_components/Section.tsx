export default function Section({ id, title, children, variant }: { id: string; title?: string; children: React.ReactNode; variant?: "note" }) {
  const isNote = variant === "note"
  return (
    <section id={id} className={`flex flex-col gap-4 px-8 pt-12 pb-24 lg:px-16 border-b border-black/10 ${isNote ? "border-solid bg-black/5" : "border-dashed"} last:border-b-0 animate`}>
      {title && <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light pb-4 ${isNote ? "italic text-black/70" : ""}`}>{title}</h2>}
      <div className={`max-w-[50rem] flex flex-col gap-6 text-lg ${isNote ? "text-black/70 italic" : "text-black/80"}`}>{children}</div>
    </section>
  )
}
