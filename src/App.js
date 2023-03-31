import './App.css';
import CommonUlList from './components/commonList'
import CommonOlList from './components/commonOrderedList'
import TableList from './components/tableList'
import FilteredList from './components/filteredList'
import CollapsedList from './components/collapsedList'

function App() {
  return (
    <div className='padding-20'>
      <label>Algunos listados tipicos.</label>
      <div className='mt-3'></div>
      <CommonUlList/>
      <CommonOlList />
      <TableList />
      <FilteredList />
      <CollapsedList />
    </div>
  );
}

export default App;
