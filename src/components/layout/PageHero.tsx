export function PageHero({
  title,
  kicker,
  lede,
}: {
  title: string;
  kicker?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-navy">
      <img
        src="/images/campus-main.webp"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="mt-2 max-w-3xl font-display text-3xl font-semibold text-paper sm:text-4xl">{title}</h1>
        {lede ? <p className="mt-3 max-w-2xl text-gold-soft/90">{lede}</p> : null}
      </div>
    </section>
  );
}
