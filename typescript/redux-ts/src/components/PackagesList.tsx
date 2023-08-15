import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const PackagesList = () => {
  const [term, setTerm] = useState('');
  const { searchPackages } = useActions();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchPackages(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default PackagesList;
