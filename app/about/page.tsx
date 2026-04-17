

const team = [
  { name: "Placeholder Name", role: "Founder & Head of Heat", initial: "P" },
  { name: "Placeholder Name", role: "Head of Flavor Development", initial: "P" },
  { name: "Placeholder Name", role: "Operations & Logistics", initial: "P" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--brand-accent) 0%, var(--brand-primary) 100%)" }}
      >
        <p className="text-5xl mb-4">🌶️</p>
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "var(--brand-cream)" }}>
          About Mr. Chili Boi
        </h1>
        <p className="font-body text-lg max-w-xl mx-auto" style={{ color: "rgba(255,253,240,0.8)" }}>
          A story about heat, crunch, and a guy who just really loved spicy nuts.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Brand story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-5" style={{ color: "var(--brand-dark)" }}>
              Our Story
            </h2>
            <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
              <p>
                Placeholder brand story. Mr. Chili Boi started in a small kitchen
                with a big idea: what if your favorite snack also packed some
                serious heat? The founder had been experimenting with chili blends
                for years, combining traditional recipes with modern flavor science.
              </p>
              <p>
                After months of testing and feedback from friends, family, and
                anyone willing to give honest feedback, the first official batch was
                sold out of the back of a car at a local market. Word spread fast.
                People kept coming back.
              </p>
              <p>
                Today, Mr. Chili Boi ships across the country. The recipes are
                still made in small batches, the ingredients are still premium, and
                the heat is still very real.
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center justify-center aspect-square"
            style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}
          >
            <div className="text-center">
              <p className="text-7xl mb-3">🌶️</p>
              <p className="font-heading font-bold text-lg" style={{ color: "var(--brand-primary)" }}>
                Brand photo placeholder
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div
          className="rounded-2xl p-8 text-center mb-16"
          style={{ background: "var(--brand-primary)" }}
        >
          <p className="text-4xl mb-4">🎯</p>
          <h2 className="font-heading font-bold text-2xl mb-4" style={{ color: "var(--brand-cream)" }}>
            Our Mission
          </h2>
          <p className="font-body text-base max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,253,240,0.85)" }}>
            To make the most flavorful, boldest, and most satisfying chili-infused
            nuts on the market. No artificial junk. No compromise on quality. Just
            real heat, real crunch, and real flavor in every bag.
          </p>
        </div>

        {/* Team */}
        <div>
          <h2 className="font-heading font-bold text-3xl mb-8 text-center" style={{ color: "var(--brand-dark)" }}>
            The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl"
                style={{ border: "1px solid var(--brand-border)", background: "white" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold"
                  style={{ background: "var(--brand-muted)", color: "var(--brand-primary)" }}
                >
                  {member.initial}
                </div>
                <p className="font-heading font-semibold text-base" style={{ color: "var(--brand-dark)" }}>
                  {member.name}
                </p>
                <p className="font-body text-sm mt-1" style={{ color: "var(--brand-text-muted)" }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-xs mt-6 italic" style={{ color: "var(--brand-text-muted)" }}>
            Placeholder team section. Real names and photos added once confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}
