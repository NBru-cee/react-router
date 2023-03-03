const About = () => {
    return (
        <main className="About">
            <h2>About</h2>
            <p
                style={{
                    margin: "1rem",
                }}
            >
                Create React App doesn’t handle backend logic or databases; it
                just creates a frontend build pipeline, so you can use it with
                any backend you want. Under the hood, it uses Babel and webpack,
                but you don’t need to know anything about them. When you’re
                ready to deploy to production, running npm run build will create
                an optimized build of your app in the build folder. You can
                learn more about Create React App from its README and the User
                Guide. Next.js Next.js is a popular and lightweight framework
                for static and server‑rendered applications built with React. It
                includes styling and routing solutions out of the box, and
                assumes that you’re using Node.js as the server environment.
                Learn Next.js from its official guide. Gatsby Gatsby is the best
                way to create static websites with React. It lets you use React
                components, but outputs pre-rendered HTML and CSS to guarantee
                the fastest load time. Learn Gatsby from its official guide and
                a gallery of starter kits.
            </p>
        </main>
    );
};

export default About;
