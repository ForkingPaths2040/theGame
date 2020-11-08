import React, {useState} from 'react'
import './App.css';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="app-container">
    <form className="form">
        <DatePicker
          selected={selected}
          onChange={date => setSelected(date)}
          isClearable
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="MM/DD/YYYY"
      />
      </form>
      </div>
  );
}

export default App;
