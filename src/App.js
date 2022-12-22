const Recipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Boil {drinkers} cups of milk.</li>
      <li>Add {2 * drinkers} spoons of masala spices.</li>
      <li>Remove from heat, and add {drinkers} spoons of tea.</li>
    </ol>
  )
}

const Cup = ({ guest }) => {
  return <h5>Tea cup for gues #{guest}</h5>;
}

const TeaGathering = () => {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />)
  }

  return cups;
}

const App = () => {
  return (
    <section>
      <h1>Spiced chai recipe.</h1>
      <h2>For one</h2>
      <Recipe drinkers={1} />
      <h2>For a gathering.</h2>
      <Recipe drinkers={4} />
      <h2>Tea cup for guest.</h2>
      <TeaGathering />
    </section> 
  );
}

export default App;
