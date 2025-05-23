import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButtton from './components/TabButton.jsx';

function App() {

  function handleSelect(){
    console.log("Hello World!--selected");
}
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtton onSelect={handleSelect}>Components</TabButtton>
            <TabButtton onSelect={handleSelect}>JSX</TabButtton>
            <TabButtton onSelect={handleSelect}>Props</TabButtton>
            <TabButtton onSelect={handleSelect}>State</TabButtton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
