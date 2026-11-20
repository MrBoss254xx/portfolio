import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, X, Menu, Palette, Monitor, Clapperboard, Laptop, ChevronLeft, ChevronRight, Mail, MessageCircle, Instagram } from 'lucide-react';

type GalleryImage = { src: string; alt: string; label: string };
type Project = {
  id: string;
  title: string;
  type: string;
  year: string;
  color: string;
  mark: string;
  headline: string;
  description: string;
  contribution: string;
  images?: GalleryImage[];
  videos?: { src: string; title: string }[];
};

const projects: Project[] = [
  {
    id: '01', title: 'Destiny Best Supermarket', type: 'Retail campaigns', year: '2026',
    color: 'project-green', mark: 'DESTINY', headline: 'EVERYDAY OFFERS.',
    description: 'Promotional artwork and campaign content for a supermarket serving Kiserian and nearby communities. The work includes offer-led graphics, seasonal messaging and social content designed for everyday shoppers.',
    contribution: 'Campaign artwork · Social media content · In-store communication',
    images: [
      { src: '/resources/destiny-supermarket/black-4.png', alt: 'Destiny Best Black November promotional artwork', label: 'Black November campaign' },
      { src: '/resources/destiny-supermarket/3-liters.png', alt: 'Destiny Best three-litre product promotion', label: 'Product offer' },
      { src: '/resources/destiny-supermarket/destiny.png', alt: 'Destiny Best supermarket brand artwork', label: 'Brand artwork' },
      { src: '/resources/destiny-supermarket/supermarket-poster.jpeg', alt: 'Destiny Best supermarket promotional poster', label: 'Retail poster' },
      { src: '/resources/destiny-supermarket/product-cutout.png', alt: 'Product cutout artwork for Destiny Best', label: 'Product visual' },
      { src: '/resources/destiny-supermarket/bei-poa-1.png', alt: 'Bei Poa Kila Kitu Kila Siku campaign artwork', label: 'Everyday value campaign' },
      { src: '/resources/destiny-supermarket/supermarket-poster-2.jpeg', alt: 'Destiny Best supermarket poster design', label: 'Retail poster' },
      { src: '/resources/destiny-supermarket/mashujaa-day.png', alt: 'Destiny Best Mashujaa Day campaign artwork', label: 'Mashujaa Day' },
      { src: '/resources/destiny-supermarket/bei-poa.png', alt: 'Bei Poa Kila Kitu Kila Siku promotional artwork', label: 'Everyday value campaign' },
      { src: '/resources/destiny-supermarket/september-campaign.png', alt: 'Destiny Best September campaign graphic', label: 'Seasonal campaign' },
      { src: '/resources/destiny-supermarket/supermarket-visual.jpeg', alt: 'Destiny Best supermarket visual artwork', label: 'Campaign visual' },
      { src: '/resources/destiny-supermarket/black-5.png', alt: 'Destiny Best Black November promotional artwork', label: 'Black November campaign' },
      { src: '/resources/destiny-supermarket/rinsun-offer.png', alt: 'Rinsun sunflower oil supermarket offer artwork', label: 'Rinsun product offer' },
      { src: '/resources/destiny-supermarket/customer-service-week.png', alt: 'Destiny Best Customer Service Week artwork', label: 'Customer Service Week' },
      { src: '/resources/destiny-supermarket/broiler-chicken.png', alt: 'Destiny Best broiler chicken offer artwork', label: 'Product promotion' },
    ],
  },
  {
    id: '02', title: 'GuruTech Studios', type: 'Studio identity & design', year: '2026',
    color: 'project-orange', mark: 'GURUTECH', headline: 'CREATE WITHOUT LIMITS.',
    description: 'The identity for my own creative practice, bringing graphic design, video editing and practical ICT support together. This gallery brings together the studio mark and selected visual design exercises developed through the practice.',
    contribution: 'Identity development · Graphic design · Digital content',
    images: [
      { src: '/resources/gurutech/gurutech-logo.png', alt: 'GuruTech Studios logo', label: 'Studio identity' },
      { src: '/resources/gurutech/sunkissed.png', alt: 'Sunkissed graphic design artwork', label: 'Graphic design' },
      { src: '/resources/gurutech/whatsapp-artwork-31-oct.jpeg', alt: 'Graphic design artwork created in October', label: 'Promotional artwork' },
      { src: '/resources/gurutech/focus.png', alt: 'Focus graphic design artwork', label: 'Visual study' },
      { src: '/resources/gurutech/whatsapp-artwork-29-oct-a.jpeg', alt: 'Graphic design artwork from October 29', label: 'Graphic design' },
      { src: '/resources/gurutech/whatsapp-artwork-29-oct-b.jpeg', alt: 'Graphic design artwork from October 29', label: 'Graphic design' },
      { src: '/resources/gurutech/whatsapp-artwork-29-oct-c.jpeg', alt: 'Graphic design artwork from October 29', label: 'Graphic design' },
      { src: '/resources/gurutech/whatsapp-artwork-29-oct-d.jpeg', alt: 'Graphic design artwork from October 29', label: 'Graphic design' },
      { src: '/resources/gurutech/whatsapp-artwork-29-oct-e.jpeg', alt: 'Graphic design artwork from October 29', label: 'Graphic design' },
    ],
  },
  {
    id: '03', title: 'Destiny Meat Palace', type: 'Food & hospitality', year: '2026',
    color: 'project-peach', mark: 'MEAT PALACE', headline: 'GOOD FOOD. GOOD COMPANY.',
    description: 'Promotional concepts for a local food destination. The creative direction keeps the food front and centre, using familiar local cues and a relaxed, welcoming tone.',
    contribution: 'Promotional graphics · Social campaign concepts',
    images: [
      { src: '/resources/destiny-meat-palace/product-cutout.png', alt: 'Food product visual for Destiny Meat Palace', label: 'Food visual' },
      { src: '/resources/destiny-meat-palace/kes-140.png', alt: 'Destiny Meat Palace price promotion artwork', label: 'Price promotion' },
      { src: '/resources/destiny-meat-palace/destiny-pork-city-logo.png', alt: 'Destiny Pork City logo', label: 'Restaurant identity' },
      { src: '/resources/destiny-meat-palace/untitled-design-5.png', alt: 'Destiny Meat Palace promotional design', label: 'Promotional artwork' },
    ],
  },
  {
    id: '04', title: 'Visual experiments', type: 'Video & motion studies', year: '2025—26',
    color: 'project-lilac', mark: 'STUDIES / 04', headline: 'TYPE. FORM. IDEAS.',
    description: 'A selection of short-form video and motion work. These pieces explore pacing, composition and visual storytelling across retail and promotional content.',
    contribution: 'Video editing · Motion graphics · Colour and pacing',
    videos: [
      { src: '/resources/visual-experiments/sunday-special.mp4', title: 'Sunday Special' },
      { src: '/resources/visual-experiments/destiny-best.mp4', title: 'Destiny Best' },
      { src: '/resources/visual-experiments/supermarket.mp4', title: 'Supermarket' },
    ],
  },
];

const services = [
  { icon: Palette, title: 'Graphic design', text: 'Posters, flyers, promotional artwork and social media graphics.' },
  { icon: Monitor, title: 'Brand identity', text: 'Logo concepts, visual direction and consistent brand materials.' },
  { icon: Clapperboard, title: 'Video & motion', text: 'Video editing, simple motion graphics and colour grading.' },
  { icon: Laptop, title: 'ICT support', text: 'Computer setup, software installation, troubleshooting and remote help.' },
];

function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactNote, setContactNote] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => { setActiveImage(0); }, [selected?.id]);

  useEffect(() => {
    if (!selected?.images || selected.images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % selected.images!.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [selected?.id, selected?.images?.length]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (selected.images?.length && event.key === 'ArrowRight') setActiveImage((current) => (current + 1) % selected.images!.length);
      if (selected.images?.length && event.key === 'ArrowLeft') setActiveImage((current) => (current - 1 + selected.images!.length) % selected.images!.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ryan Maina home">
          <span className="brand-name">Ryan<span className="brand-dot">.</span></span>
          <small>DESIGN & DIGITAL</small>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'site-nav nav-open' : 'site-nav'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-button" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><i /> INDEPENDENT DESIGNER & DIGITAL CREATIVE</span>
          <h1>Ideas made<br />to <span>stand out.</span></h1>
          <p className="hero-description">I help businesses and people bring their ideas to life through graphic design, visual identity, video and practical tech support.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">Explore my work <ArrowUpRight size={17} /></a>
            <a className="text-button" href="#about">A little about me <ArrowRight size={16} /></a>
          </div>
          <div className="hero-footnote"><span>BASED IN KENYA</span><b>·</b><span>DESIGN / VIDEO / ICT</span></div>
        </div>
        <div className="hero-visual" aria-label="A selection of design work and creative tools">
          <div className="visual-sun" />
          <div className="visual-label label-one">IDEAS<br />IN PROGRESS</div>
          <div className="visual-card card-main">
            <div className="mini-top"><span>RM / 2026</span><span>01—04</span></div>
            <div className="mini-word">MAKE<br /><em>IT</em><br />MATTER<span>.</span></div>
            <div className="mini-bottom"><span>DESIGN & DIGITAL</span><b>↗</b></div>
          </div>
          <div className="visual-card card-green"><span className="card-green-mark">G.</span><small>CREATE WITHOUT LIMITS</small></div>
          <div className="visual-card card-orange"><span>GOOD<br />IDEAS<br />GROW.</span><b>✳</b></div>
          <div className="visual-chip chip-one">✳</div>
          <div className="visual-chip chip-two">↗</div>
          <div className="visual-label label-two">A CREATIVE<br />PRACTICE</div>
        </div>
      </section>

      <section className="intro-strip">
        <p>Good design should be clear, useful and hard to ignore.</p>
        <span>SCROLL TO SEE WHAT I DO <b>↓</b></span>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><span className="section-kicker">01 / SELECTED WORK</span><h2>A FEW THINGS<br />I'VE <span>WORKED ON.</span></h2></div>
          <p>A mix of campaign work, studio projects and personal experiments. Open a project to explore the work.</p>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <button className="work-card" key={project.id} onClick={() => setSelected(project)} aria-label={`Open ${project.title} project`}>
              <div className={`work-art ${project.color} ${project.images?.length ? 'has-cover' : 'motion-cover'}`}>
                {project.images?.[0] && <img className="work-cover" src={project.images[0].src} alt="" loading="lazy" draggable={false} />}
                <div className="work-art-overlay" />
                <div className="work-art-head"><span>{project.mark}</span><span>{project.id} / {project.year}</span></div>
                <div className="work-art-title"><b>{project.headline}</b></div>
                <div className="work-art-foot"><span>RYAN MAINA</span><span>VIEW PROJECT ↗</span></div>
                {!project.images?.length && <i className="art-decoration">▶</i>}
              </div>
              <div className="work-card-meta"><div><span>{project.type}</span><h3>{project.title}</h3></div><i><ArrowUpRight size={19} /></i></div>
            </button>
          ))}
        </div>
        <p className="work-disclaimer">A selection of current work and independent studies. More finished pieces will be added as the portfolio grows.</p>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-inner">
          <div className="about-heading"><span className="section-kicker">02 / A LITTLE ABOUT ME</span><h2>DESIGNER BY<br />INTEREST. <span>PROBLEM-<br />SOLVER BY NATURE.</span></h2></div>
          <div className="about-body">
            <div className="about-portrait"><img src="/resources/about/ryan-maina-portrait.png" alt="Portrait of Ryan Maina" draggable={false} /></div>
            <div className="about-text">
              <p className="about-lead">I'm Ryan — a graphic designer with an ICT background and a soft spot for figuring things out.</p>
              <p>I enjoy turning ideas into visual work, from campaign graphics and brand materials to short-form video. I also work on the technical side: setting up computers, troubleshooting everyday issues and helping people get back to work.</p>
              <p>I'm building GuruTech Studios around that mix. I'm still learning, experimenting and getting better with every project — and that's part of the fun.</p>
              <a className="inline-link" href="#contact">Have something in mind? <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section section-wrap" id="services">
        <div className="section-heading services-heading">
          <div><span className="section-kicker">03 / WHAT I CAN HELP WITH</span><h2>WHAT I <span>DO.</span></h2></div>
          <p>Creative work and hands-on technical support, depending on what you need.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className="service-card" key={title}>
              <div className="service-card-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.7} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div><span className="section-kicker">04 / GET IN TOUCH</span><h2>HAVE AN IDEA?<br /><span>LET'S TALK.</span></h2></div>
          <div className="contact-copy">
            <p>Whether it's a design project, a video or a tech issue, tell me what you have in mind. We can take it from there.</p>
            <button className="primary-button contact-button" onClick={() => setContactNote(!contactNote)}>Start a conversation <ArrowUpRight size={17} /></button>
            {contactNote && (
              <div className="contact-options" aria-label="Choose how to contact Ryan">
                <a className="contact-option" href="https://mail.google.com/mail/?view=cm&fs=1&to=ryanmaina384%40gmail.com" target="_self">
                  <span className="contact-option-icon"><Mail size={18} /></span>
                  <span><b>Email</b><small>ryanmaina384@gmail.com</small></span><ArrowUpRight size={16} />
                </a>
                <a className="contact-option" href="https://wa.me/254116283435?text=Hi%20Ryan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect." target="_self">
                  <span className="contact-option-icon"><MessageCircle size={18} /></span>
                  <span><b>WhatsApp</b><small>+254 116 283 435</small></span><ArrowUpRight size={16} />
                </a>
                <a className="contact-option" href="https://ig.me/m/gurutechstudios" target="_self">
                  <span className="contact-option-icon"><Instagram size={18} /></span>
                  <span><b>Instagram</b><small>@gurutechstudios</small></span><ArrowUpRight size={16} />
                </a>
                <small className="contact-note">Choose a channel to open a direct message or email composer in this tab. Use your browser's Back button to return to the portfolio.</small>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-name">Ryan<span className="brand-dot">.</span></span><small>DESIGN & DIGITAL</small></a>
        <span>© 2026 RYAN MAINA</span><a href="#home">BACK TO TOP ↑</a>
      </footer>

      {selected && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project"><X size={21} /></button>
            <span className="section-kicker">PROJECT {selected.id} / {selected.year}</span>
            <small className="modal-type">{selected.type}</small>
            <h2>{selected.title}</h2>
            <p className="modal-description">{selected.description}</p>
            <div className="modal-contribution"><span>MY CONTRIBUTION</span><b>{selected.contribution}</b></div>
            {selected.images?.length ? (
              <section className="modal-gallery" aria-label={`${selected.title} image gallery`}>
                <div className="gallery-heading"><span>SELECTED VISUALS</span><span>{String(activeImage + 1).padStart(2, '0')} / {String(selected.images.length).padStart(2, '0')}</span></div>
                <div className="gallery-stage" onContextMenu={(event) => event.preventDefault()}>
                  <img key={selected.images[activeImage].src} className="gallery-image" src={selected.images[activeImage].src} alt={selected.images[activeImage].alt} draggable={false} />
                  <button className="gallery-arrow gallery-prev" onClick={() => setActiveImage((current) => (current - 1 + selected.images!.length) % selected.images!.length)} aria-label="Previous image"><ChevronLeft size={24} /></button>
                  <button className="gallery-arrow gallery-next" onClick={() => setActiveImage((current) => (current + 1) % selected.images!.length)} aria-label="Next image"><ChevronRight size={24} /></button>
                </div>
                <div className="gallery-caption"><span>{selected.images[activeImage].label}</span><span>Auto-advances every 2 seconds</span></div>
                <div className="gallery-progress"><i key={activeImage} /></div>
              </section>
            ) : null}
            {selected.videos?.length ? (
              <section className="modal-video-gallery" aria-label="Video and motion gallery">
                <div className="gallery-heading"><span>VIDEO & MOTION</span><span>{selected.videos.length} SHORT CLIPS</span></div>
                <div className="video-grid">
                  {selected.videos.map((video) => (
                    <article className="video-item" key={video.src}>
                      <video src={video.src} controls playsInline preload="metadata" controlsList="nodownload" disablePictureInPicture onContextMenu={(event) => event.preventDefault()}>
                        Your browser does not support the video element.
                      </video>
                      <span>{video.title}</span>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      )}
    </main>
  );
}

export default App;