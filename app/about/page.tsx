import { Container } from '../../components';
import SiteConfig from '../../config/index.json' assert { type: 'json' };

export const metadata = {
  title: `About Me | ${SiteConfig.site.siteName}`,
  description: SiteConfig.site.siteDescription,
};

/**
 * About page `/about`
 */

export default function About() {
  return (
    <Container width="narrow">
      {/* Content goes here */}
      <header className="pt-12 pb-4">
        <h1 className="text-3xl font-bold mb-6 md:text-4xl font-display">
          About Me 🧘🏾‍♂️
        </h1>
      </header>
      <div className="flex text-accent-4">
        <div>
          <p className="mb-4">
            Sara is a graphic designer currently based in Vienna.
          </p>
          <p>She likes to explore new technologies and is starting to code.</p>
        </div>
      </div>
    </Container>
  );
}
