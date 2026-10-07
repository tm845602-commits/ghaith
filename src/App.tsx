import { FormEvent, useEffect, useState } from "react"
import ghaithLogo from "./assets/ghaith-logo.jpg"

const photos = {
  hero: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&w=1800&q=88",
  about:
    "https://images.unsplash.com/photo-1680759291470-9c10abc59668?auto=format&fit=crop&w=1200&q=85",
  activity1:
    "https://images.unsplash.com/photo-1680759291155-09a4ce89bc12?auto=format&fit=crop&w=900&q=85",
  activity2:
    "https://images.unsplash.com/photo-1666886573440-16ac24f89e31?auto=format&fit=crop&w=900&q=85",
  activity3:
    "https://images.unsplash.com/photo-1621353880594-70b5fd44ecb3?auto=format&fit=crop&w=900&q=85",
  story:
    "https://images.unsplash.com/photo-1677682693111-c7c6a60c362a?auto=format&fit=crop&w=1400&q=85",
  team1:
    "https://images.unsplash.com/photo-1666887360369-1901f341fdad?auto=format&fit=crop&w=700&q=85",
  team2:
    "https://images.unsplash.com/photo-1769072610024-5b8a50f05c73?auto=format&fit=crop&w=700&q=85",
  team3:
    "https://images.unsplash.com/photo-1704453961898-38a07a700128?auto=format&fit=crop&w=700&q=85",
  gallery1:
    "https://images.unsplash.com/photo-1680759291200-50a477d721e0?auto=format&fit=crop&w=1000&q=85",
  gallery2:
    "https://images.unsplash.com/photo-1551191003-9262a720b971?auto=format&fit=crop&w=1000&q=85",
  gallery3:
    "https://images.unsplash.com/photo-1666886573590-5815157da865?auto=format&fit=crop&w=900&q=85",
  gallery4:
    "https://images.unsplash.com/photo-1592392821486-71f028a00581?auto=format&fit=crop&w=1000&q=85",
}

type IconName = "arrow" | "heart" | "medical" | "awareness" | "support" | "training" | "research" | "mail" | "phone" | "pin" | "menu" | "close" | "check"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
    ),
    medical: (
      <>
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    awareness: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    support: (
      <>
        <path d="M12 21s-7-4.4-7-11a7 7 0 0 1 14 0c0 6.6-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    training: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V17c3 2 9 2 12 0v-5.5" />
      </>
    ),
    research: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m15 15 6 6M10 7v6M7 10h6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={`logo ${light ? "logo-light" : ""}`}
      aria-label="Ghaith Charity Organization home"
    >
      <span className="logo-image">
        <img src={ghaithLogo} alt="Ghaith Charity Convoy" />
      </span>
    </a>
  )
}

function ButtonLink({
  children,
  href,
  secondary = false,
}: {
  children: React.ReactNode
  href: string
  secondary?: boolean
}) {
  return (
    <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>
      {children}
      <Icon name="arrow" size={18} />
    </a>
  )
}

function SectionHead({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string
  title: string
  body?: string
  light?: boolean
}) {
  return (
    <div className={`section-head ${light ? "section-head-light" : ""}`}>
      <span className="eyebrow">
        <i />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}

const navItems = [
  ["About", "about"],
  ["Programs", "programs"],
  ["Impact", "impact"],
  ["Activities", "activities"],
  ["Team", "team"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
]

const programs: { icon: IconName title: string text: string }[] = [
  {
    icon: "medical",
    title: "Medical Services",
    text: "Bringing essential health services closer to communities in need.",
  },
  {
    icon: "awareness",
    title: "Health Awareness",
    text: "Sharing practical knowledge that helps communities protect their health.",
  },
  {
    icon: "support",
    title: "Humanitarian Support",
    text: "Responding with dignity, care and people-centered assistance.",
  },
  {
    icon: "training",
    title: "Training & Capacity Building",
    text: "Equipping volunteers and professionals to serve more effectively.",
  },
  {
    icon: "research",
    title: "Research & Education",
    text: "Supporting learning that strengthens humanitarian health outcomes.",
  },
]

const stats = [
  ["09+", "Medical Convoys"],
  ["500+", "Beneficiaries"],
  ["60+", "Medical Professionals"],
  ["50+", "Volunteers"],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [arabic, setArabic] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [formStatus, setFormStatus] = useState<"idle" | "error" | "success">(
    "idle",
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setFormStatus("error")
      form.reportValidity()
      return
    }
    setFormStatus("success")
    form.reset()
  }

  return (
    <div id="top" className="site" dir={arabic ? "rtl" : "ltr"}>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo light={!scrolled} />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="language"
              onClick={() => setArabic(!arabic)}
              aria-label="Switch language"
            >
              <span className={arabic ? "" : "active"}>EN</span>
              <i />
              <span className={arabic ? "active" : ""}>AR</span>
            </button>
            <a className="nav-cta" href="#contact">
              Get Involved
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-head">
          <Logo light />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon name="close" size={26} />
          </button>
        </div>
        <nav>
          {navItems.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {label}
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-foot">
          <p>Together, We Bring Hope.</p>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            [Official Email]
          </a>
        </div>
      </div>

      <main>
        <section className="hero">
          <img
            src={photos.hero}
            alt="Doctor speaking with a young patient during a community health visit"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-kicker">GHAITH CHARITY ORGANIZATION</span>
            <h1>
              Together, We
              <br />
              Bring <em>Hope.</em>
            </h1>
            <p className="hero-arabic" lang="ar">
              معاً نصنع الأمل
            </p>
            <p className="hero-copy">
              Serving communities through compassionate medical care,
              humanitarian action and the belief that every person deserves to
              be seen.
            </p>
            <div className="hero-buttons">
              <ButtonLink href="#programs">Explore Our Work</ButtonLink>
              <ButtonLink href="#contact" secondary>
                Get Involved
              </ButtonLink>
            </div>
          </div>
          <div className="scroll-cue">
            <span>SCROLL TO DISCOVER</span>
            <i />
          </div>
        </section>

        <section
          className="stat-strip"
          aria-label="Impact statistics placeholders"
        >
          <div className="placeholder-note">
            Replace with official verified statistics
          </div>
          <div className="stat-grid">
            {stats.map(([number, label]) => (
              <div className="stat" key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
                <small>[Official Statistic]</small>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img
                src={photos.about}
                alt="Medical volunteers working together in the field"
              />
              <div className="image-caption">
                <span>01</span>
                <p>
                  Care begins
                  <br />
                  with presence.
                </p>
              </div>
            </div>
            <div className="about-content">
              <SectionHead eyebrow="ABOUT GHAITH" title="Who We Are" />
              <p className="lead">
                Ghaith is a humanitarian and medical nonprofit committed to
                serving people with dignity, compassion and practical care.
              </p>
              <div className="principles">
                <article>
                  <span>01</span>
                  <div>
                    <h3>Our Mission</h3>
                    <p>
                      To connect compassionate action with communities who need
                      it most.
                    </p>
                  </div>
                </article>
                <article>
                  <span>02</span>
                  <div>
                    <h3>Our Vision</h3>
                    <p>
                      A future where quality care and human dignity are within
                      everyone’s reach.
                    </p>
                  </div>
                </article>
                <article>
                  <span>03</span>
                  <div>
                    <h3>Our Values</h3>
                    <p>Compassion · Integrity · Service · Community · Impact</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="section programs">
          <div className="section-row">
            <SectionHead
              eyebrow="OUR PROGRAMS"
              title="What We Do"
              body="Focused programs designed around real community needs and lasting, human-centered impact."
            />
            <span className="section-index">02 / 07</span>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => (
              <article
                className={`program-card ${index === 0 ? "featured" : ""}`}
                key={program.title}
              >
                <div className="program-top">
                  <span className="program-icon">
                    <Icon name={program.icon} size={26} />
                  </span>
                  <small>0{index + 1}</small>
                </div>
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                </div>
                <a
                  href="#contact"
                  aria-label={`Learn more about ${program.title}`}
                >
                  <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="impact section">
          <div className="impact-copy">
            <SectionHead eyebrow="MEASURABLE CHANGE" title="Our Impact" light />
            <p>
              Every number represents a person, a family and a community.
              Official figures will be published after verification.
            </p>
            <div className="impact-stats">
              {stats.map(([number, label]) => (
                <div key={label}>
                  <strong>{number}</strong>
                  <span>
                    {label}
                    <small>[Official Statistic]</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="section activities">
          <div className="section-row">
            <SectionHead
              eyebrow="LATEST ACTIVITIES"
              title="Our Work in the Field"
            />
            <a className="text-link" href="#gallery">
              View all activities <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="activity-grid">
            {[photos.activity1, photos.activity2, photos.activity3].map(
              (photo, index) => (
                <article className="activity-card" key={photo}>
                  <div className="activity-image">
                    <img
                      src={photo}
                      alt={`Humanitarian field activity placeholder ${index + 1}`}
                    />
                    <span>FIELD NOTE 0{index + 1}</span>
                  </div>
                  <div className="activity-meta">
                    <span>[Official Location]</span>
                    <span>[Official Date]</span>
                  </div>
                  <h3>
                    {index === 0
                      ? "Ghaith Medical Convoy"
                      : index === 1
                        ? "Community Health Visit"
                        : "Volunteer Awareness Session"}
                  </h3>
                  <p>
                    [Official activity description to be added after
                    verification.]
                  </p>
                  <a href="#contact">
                    Read field note <Icon name="arrow" size={17} />
                  </a>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="story">
          <div className="story-image">
            <img
              src={photos.story}
              alt="Mother and child receiving medical care"
            />
          </div>
          <div className="story-content">
            <span className="story-number">04</span>
            <SectionHead
              eyebrow="FEATURED STORY"
              title="Every Journey Begins With a Need."
              light
            />
            <blockquote>
              “We begin by listening. Then, together, we find the most
              meaningful way forward.”
            </blockquote>
            <p>
              This space is reserved for an official story from the field,
              shared with informed consent and verified by the Ghaith team.
            </p>
            <a className="story-link" href="#contact">
              Read Our Story <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section id="team" className="section team">
          <div className="section-row">
            <SectionHead
              eyebrow="OUR PEOPLE"
              title="The People Behind Ghaith"
              body="A collective of professionals and volunteers united by service."
            />
            <div className="team-tabs">
              <button className="active">Leadership</button>
              <button>Medical Team</button>
              <button>Core Team</button>
            </div>
          </div>
          <div className="team-grid">
            {[photos.team1, photos.team2, photos.team3].map((photo, index) => (
              <article className="team-card" key={photo}>
                <div>
                  <img
                    src={photo}
                    alt={`Team member placeholder ${index + 1}`}
                  />
                  <span>0{index + 1}</span>
                </div>
                <h3>[Team Member Name]</h3>
                <p>[Official Position]</p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section-row">
            <SectionHead
              eyebrow="FIELD GALLERY"
              title="Moments From the Field"
            />
            <p className="gallery-intro">
              A visual record of care, commitment and community.
            </p>
          </div>
          <div className="gallery-grid">
            {[
              photos.gallery1,
              photos.gallery2,
              photos.gallery3,
              photos.gallery4,
            ].map((photo, index) => (
              <button
                className={`gallery-item gallery-${index + 1}`}
                onClick={() => setLightbox(photo)}
                key={photo}
                aria-label={`Open field gallery image ${index + 1}`}
              >
                <img src={photo} alt={`Field gallery moment ${index + 1}`} />
                <span>
                  <b>0{index + 1}</b>
                  <em>View moment</em>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-info">
            <SectionHead eyebrow="CONTACT US" title="Let’s Connect" />
            <p>
              Have a question, an idea or a desire to help? We would be glad to
              hear from you.
            </p>
            <div className="contact-list">
              <div>
                <i>
                  <Icon name="mail" />
                </i>
                <span>
                  Email us
                  <a href="mailto:official@email.com">[Official Email]</a>
                </span>
              </div>
              <div>
                <i>
                  <Icon name="phone" />
                </i>
                <span>
                  Call us<a href="tel:+00000000000">[Official Phone]</a>
                </span>
              </div>
              <div>
                <i>
                  <Icon name="pin" />
                </i>
                <span>
                  Find us<b>[Official Location]</b>
                </span>
              </div>
            </div>
            <div className="social-row">
              <span>FOLLOW GHAITH</span>
              <a href="#contact">IG</a>
              <a href="#contact">FB</a>
              <a href="#contact">LI</a>
            </div>
          </div>
          <form
            className={`contact-form ${formStatus}`}
            onSubmit={submitForm}
            noValidate
          >
            <div className="form-row">
              <label>
                Full Name
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                Email Address
                <input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone <span>Optional</span>
                <input name="phone" type="tel" placeholder="+000 000 000 000" />
              </label>
              <label>
                Subject
                <input name="subject" placeholder="How can we help?" required />
              </label>
            </div>
            <label>
              Message
              <textarea
                name="message"
                placeholder="Tell us a little more..."
                rows={5}
                required
              />
            </label>
            {formStatus === "error" && (
              <p className="form-message form-error">
                Please complete all required fields correctly.
              </p>
            )}
            {formStatus === "success" && (
              <p className="form-message form-success">
                <Icon name="check" size={18} /> Message ready. Connect this form
                to the organization’s official endpoint.
              </p>
            )}
            <button className="submit-button" type="submit">
              Send Message <Icon name="arrow" />
            </button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>
              Compassionate medical care and humanitarian action, grounded in
              dignity.
            </p>
            <strong>Together, We Bring Hope.</strong>
          </div>
          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              {navItems.slice(0, 4).map(([label, id]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <span>CONNECT</span>
              {navItems.slice(4).map(([label, id]) => (
                <a href={`#${id}`} key={id}>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <span>CONTACT</span>
              <a href="#contact">[Official Email]</a>
              <a href="#contact">[Official Phone]</a>
              <a href="#contact">[Official Location]</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Ghaith Charity Organization. All rights
            reserved.
          </span>
          <span>منظمة قافلة غيث الخيرية</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} aria-label="Close gallery">
            <Icon name="close" size={26} />
          </button>
          <img src={lightbox} alt="Expanded field gallery view" />
        </div>
      )}
    </div>
  )
}

export default App
