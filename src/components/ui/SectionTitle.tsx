interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      {badge && (
        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold text-stone-900 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}