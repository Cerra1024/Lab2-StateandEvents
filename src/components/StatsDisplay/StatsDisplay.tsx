import type { StatsDisplayProps } from '../../types/index';

function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
  return (
    <section>
      <h2>Stats</h2>

      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>

      {showReadingTime && (
        <p>Reading Time: {stats.readingTime.toFixed(2)} minutes</p>
      )}
    </section>
  );
}

export default StatsDisplay;
