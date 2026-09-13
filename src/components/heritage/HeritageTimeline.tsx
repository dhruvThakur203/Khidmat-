import {
  getPublishedHeritageEvidence,
  getPublishedHeritageMilestones,
} from '../../data/heritage';
import { siteConfig } from '../../data/site';
import './HeritageTimeline.css';

export function HeritageTimeline() {
  const milestones = getPublishedHeritageMilestones();
  const evidence = getPublishedHeritageEvidence();

  if (milestones.length === 0 && evidence.length === 0) {
    return null;
  }

  return (
    <section className="section section--cream heritage-timeline" aria-labelledby="heritage-timeline-heading">
      <div className="container">
        <p className="eyebrow">Our heritage</p>
        <h2 className="display-md" id="heritage-timeline-heading">
          Khidmat Since {siteConfig.since}
        </h2>

        {milestones.length > 0 && (
          <ol className="heritage-timeline__milestones">
            {milestones.map((milestone) => (
              <li key={milestone.id} className="heritage-timeline__milestone">
                {milestone.year && (
                  <span className="heritage-timeline__year">{milestone.year}</span>
                )}
                <div>
                  <h3 className="heritage-timeline__title">{milestone.title}</h3>
                  <p className="body-lg">{milestone.description}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {evidence.length > 0 && (
          <div className="heritage-timeline__evidence">
            {evidence.map((item) => (
              <article key={item.id} className="heritage-timeline__evidence-card">
                {item.image && (
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="heritage-timeline__evidence-image"
                  />
                )}
                <div>
                  <p className="heritage-timeline__evidence-type">{item.type}</p>
                  <h3 className="heritage-timeline__title">{item.title}</h3>
                  <p className="body-lg">{item.description}</p>
                  {item.sourceLabel && (
                    <p className="heritage-timeline__source">{item.sourceLabel}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
