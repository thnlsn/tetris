import { useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = () => {
  const [stage, useStage] = useState(createStage());
};

// Returning needed values in an array
return [stage, setStage];
