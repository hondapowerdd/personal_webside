export default function HomePage() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', color: '#111827', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
    <div style={{ maxWidth: '40rem', width: '100%', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hi, I'm William Meng</h1>
    <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
    I'm a software developer passionate about building cool things on the web.
    Currently exploring React, Next.js, and whatever else catches my eye.
    </p>

    <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Contact Me</h2>
    <p>Email: <a href="mailto:you@example.com" style={{ color: '#3b82f6', textDecoration: 'none' }}>william.meng@mail.utoronto.ca</a></p>
    <p>GitHub: <a href="https://github.com/yourusername" style={{ color: '#3b82f6', textDecoration: 'none' }}>@hondapowerdd</a></p>
    </div>
    </div>
    </main>
);
}
