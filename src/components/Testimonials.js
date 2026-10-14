const testimonials = [
  { video: '/test1.mp4', width: 478, height: 850, poster: '/images/testimonial-1.jpg', name: 'Amy Barrier', role: 'Business owner', text: 'This trading group completely changed my approach. The daily ideas are clear, actionable, and profitable!' },
  { video: '/test2.mp4', width: 480, height: 848, poster: '/images/testimonial-2.jpg', name: 'Luke Meecham', role: 'Mechanic', text: 'Finally found a community that delivers real value. No BS, just solid trading setups every day.' },
  { video: '/test3.mp4', width: 480, height: 848, poster: '/images/testimonial-3.jpg', name: 'Mueez Ahmed', role: 'Finance broker', text: 'I was always sceptical of trading but honestly this is a game changer.' }
];
export default function Testimonials() {
  return <section id="results" className="section results-section marble"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">From our members</p><h2>Real people.<br /><em>In their own words.</em></h2></div><p>Meet the members behind the stories. Hear their experiences, directly from them.</p></div>
    <div className="testimonials-grid">{testimonials.map(item => <article className="testimonial" key={item.name}><div className="testimonial-video"><video src={item.video} width={item.width} height={item.height} controls playsInline preload="none" poster={item.poster} aria-label={`${item.name}'s testimonial`} /></div><div className="testimonial-body"><span className="quote-mark" aria-hidden="true">“</span><blockquote>{item.text}</blockquote><div className="member"><span className="member-initials" aria-hidden="true">{item.name.split(' ').map(n => n[0]).join('')}</span><div><h3>{item.name}</h3><p>{item.role}</p></div></div></div></article>)}</div>
    <div className="community-values">{[['Market insight', 'Expert analysis to help you understand the setup.'], ['Trading mindset', 'Build discipline and learn to manage risk.'], ['Shared progress', 'Learn alongside a supportive trading community.']].map(([title, text]) => <div key={title}><span aria-hidden="true">✦</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
  </div></section>;
}
