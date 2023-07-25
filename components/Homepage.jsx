import React, { useState } from 'react';

function Homepage() {
  const [selectedItem, setSelectedItem] = useState('');
  const [dynamicField, setDynamicField] = useState('');

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleDynamicFieldChange = (event) => {
    setDynamicField(event.target.value);
  };

  const renderDynamicField = () => {
    if (selectedItem === 'option1') {
      return (
        <div>
          <label>
            EnterLocation
          </label>
        <input
          type="text"
          value={dynamicField}
          onChange={handleDynamicFieldChange}
          placeholder="Enter option 1 details"
          />
          </div>
      );
    } else if (selectedItem === 'option2') {
      // Render another type of field for option 2
    } else if (selectedItem === 'option3') {
      // Render another type of field for option 3
    }

    return null;
  };

  return (
    <form>
      <label htmlFor="item">Select an item:</label>
      <select id="item" value={selectedItem} onChange={handleItemChange}>
        <option value="">Select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {renderDynamicField()}
    </form>
  );
}

export default Homepage;
