import { trpc } from '../utils/trpc';

export const ShowExamples = () => {
  const examples = trpc.example.getAll.useQuery();

  if (!examples.data) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {examples.data.map((example) => (
          <li key={example.id}>{example.text}</li>
        ))}
      </ul>
    </div>
  );
};
