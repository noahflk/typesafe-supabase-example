import { useState } from 'react';

import { trpc } from '../utils/trpc';

export const AddExample = () => {
  const addExample = trpc.example.create.useMutation();
  const utils = trpc.useContext();

  const [text, setText] = useState('');

  return (
    <div>
      <input placeholder="name" value={text} onChange={(event) => setText(event.target.value)} />
      <button
        onClick={() => {
          addExample.mutate(text, {
            onSuccess: () => {
              utils.example.getAll.invalidate();
              setText('');
            },
          });
        }}
        disabled={addExample.isLoading}
      >
        Create
      </button>
      {addExample.isLoading && <p>Saving...</p>}
    </div>
  );
};
