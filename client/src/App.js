import React, {useState} from 'react'
import './App.css';
import DatePicker from 'react-date-picker'

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="App">
      <form>
        <DatePicker
          selected={selected}
          onChange={date => setSelected(date)}
          isClearable
          showYearDropdown
          scrollableMonthYearDropdown
        />
      </form>
    </div>
  );
}

export default App;
