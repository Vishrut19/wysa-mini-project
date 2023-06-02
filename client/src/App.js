import { useState } from 'react';
import './App.css';

import onboardingElements from './constants/onboarding-elements';

function App() {
  const [pointer, setPointer] = useState(0);
  const [userId, setUserId] = useState(null);

  let CurrentElement = onboardingElements.elements[pointer];

  const incrementPointer = (id) => {
    setUserId(id);
    setPointer((prevPointer) => prevPointer + 1);
  };

  return (
    <>
      <CurrentElement showNext={incrementPointer} userId={userId} />
    </>
  );
}

export default App;
