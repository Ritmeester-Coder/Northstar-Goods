function AboutPage() {
  return (
    <section className="section">
      <div className="page-heading narrow">
        <p className="eyebrow">Our story</p>

        <h1>About Us</h1>

        <p>
          Northstar Goods was created for people who appreciate thoughtful
          design, dependable quality, and everyday essentials that bring calm,
          clarity, and purpose to modern life.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>What we curate</h2>

          <p>
            We select products that blend function, timeless aesthetics, and
            durable materials. Every item is chosen to feel useful, refined,
            and ready for daily use.
          </p>
        </article>

        <article className="about-card">
          <h2>How we work</h2>

          <p>
            We collaborate with trusted makers and reliable manufacturers who
            value craftsmanship, consistency, and honest quality at a fair
            price.
          </p>
        </article>

        <article className="about-card wide">
          <h2>Why Northstar</h2>

          <p>
            In a world of excess, we believe fewer better things make a bigger
            difference. Northstar Goods exists to help people buy with
            intention and live with simplicity.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;