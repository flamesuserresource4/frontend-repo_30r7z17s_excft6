export default function Mechanism() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10" id="analysis">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Connection layer → Data layer</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            Profiles concentrate identity, relationships, and activity — a persistent social graph that captures who users are and how they relate. (profiles)
          </li>
          <li>
            Sharing tools (feed posts, photos, reactions) and Messenger capture attention rhythms, interests, and relational ties through continuous interaction logs. (sharing, Messenger)
          </li>
          <li>
            These signals are normalized into structured attributes and affinities that can be scored, segmented, and predicted across the network.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Market layer → Commodification</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>
            Business Pages formalize organizations as first-class actors in the social graph, letting them amass followers and interactions that mirror user behavior. (Business Pages)
          </li>
          <li>
            The advertising system sells targeted reach against the user graph, translating identity and engagement signals into addressable audiences and priced impressions. (Advertising)
          </li>
          <li>
            Revenue scales with precision and volume of targeting; therefore incentives favor deeper data capture, broader integration, and algorithmic optimization of attention.
          </li>
        </ul>
      </div>
    </section>
  );
}
