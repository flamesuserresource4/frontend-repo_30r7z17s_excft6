export default function Thesis() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Facebook’s dual engine: connection and commodification</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          The same architecture that enables profiles, sharing, and instant messaging to scale human connection also structures users as marketable inventory. By fusing identity graphs with engagement surfaces and a business-facing ad marketplace, Facebook converts social signals into targeted advertising commodities. Privacy crises are not aberrations but outcomes of a model that financially depends on maximizing data extraction and addressable targeting.
        </p>
      </div>
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      </div>
    </section>
  );
}
