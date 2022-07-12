import { useCallback } from 'react';
import { useState } from 'react';

const useSubsets = (defaultArray) => {
  const [subsets, setSubsets] = useState(defaultArray);

  const getSubsets = useCallback((array, walkTime) => {
    const [lowerLimit, upperLimit] = [walkTime * 0.97, walkTime * 1.03];

    function recursivelyFindSubsets(index = 0, sum = 0, subset = []) {
      if (sum < upperLimit && sum > lowerLimit) {
        result.push(subset);
        return;
      }
      if (index === array.length) {
        return;
      }
      if (sum + array[index].audio_length_sec <= walkTime) {
        recursivelyFindSubsets(
          index + 1,
          sum + array[index].audio_length_sec,
          subset.concat(array[index])
        );
      }
      recursivelyFindSubsets(index + 1, sum, subset);
    }

    const result = [];
    recursivelyFindSubsets();
    setSubsets(result);
  }, []);

  return [subsets, getSubsets];
};

export default useSubsets;
