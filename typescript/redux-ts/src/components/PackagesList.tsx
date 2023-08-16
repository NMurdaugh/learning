import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';
import { RootState } from '../state';

const PackagesList = () => {
  const [term, setTerm] = useState('');
  const { searchPackages } = useActions();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.packages
  );

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
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data?.map((name) => <div key={name}>{name}</div>)}
      {!error && !loading && !data && <h3>No results found for {term}</h3>}
    </div>
  );
};

export default PackagesList;
