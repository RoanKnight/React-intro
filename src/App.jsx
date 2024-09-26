import ModuleTitle from './components/ModuleTitle.jsx';
import Counter from './components/Counter.jsx';
import NameLengths from './components/NameLengths.jsx';

export default function App() {

  return (
    <div>
      <ModuleTitle title="Front-End Development" />
      <ModuleTitle title="Advanced Javscript" />

      <NameLengths name="Johnny" age={25} occupation={{ title:"Lecturer", years: 7}}/>
      <NameLengths name="Gillian" age={34} occupation={{ title:"Engineer", years: 2}}/>
      <NameLengths name="Jordan" age={41} occupation={{ title:"Scientist", years: 11}}/>

      {/* <Counter /> */}
    </div>
  );
}