import SiteDetailsContainer from "@/components/site-details/SiteDetailsContainer";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function SiteDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-stone-50">
      <SiteDetailsContainer id={id} />
    </main>
  );
}