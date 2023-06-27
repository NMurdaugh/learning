function SearchBox(handleSearch: any) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Kittens"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox