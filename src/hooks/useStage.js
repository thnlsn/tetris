import { useState } from 'react';
import { createStage } from '../gameHelpers';

export const useStage = () => {
  const [stage, useStage] = useState(createStage());
};

return [stage, setStage];
