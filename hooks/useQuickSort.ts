import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

interface props {
  data: number[];
  isSorting: boolean;
  setIsSorting: Dispatch<SetStateAction<boolean>>;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  setData: Dispatch<SetStateAction<number[]>>;
}
export default function useQuickSort({
  data,
  containerRef,
  isSorting,
  setIsSorting,
  setData,
}: props) {
  useEffect(() => {
    async function partition(array: number[], low: number, high: number) {
      if (!containerRef.current) return 0;
      console.log("first");
      const childrenElements = containerRef.current.children;
      const pivot = array[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
          i += 1;

          let q = array[i];
          array[i] = array[j];
          array[j] = q;
          console.log("array", array);
        }
        // setData(array);
      }
      let p = array[i + 1];
      array[i + 1] = array[high];
      array[high] = p;
      // setData(array);
      return i + 1;
    }

    async function quicksort(array: number[], low = 0, high: number) {
      if (high === undefined) high = array.length - 1;

      if (low < high) {
        let pivot_index = await partition(array, low, high);
        quicksort(array, low, pivot_index - 1);
        quicksort(array, pivot_index + 1, high);
      }
    }

    if (isSorting && containerRef.current) {
      const copiedArray = [...data];
      quicksort(copiedArray, 0, copiedArray.length - 1);
      console.log(data, copiedArray);
      setData(copiedArray);
    }
  }, [isSorting, containerRef]);
}

function sleep(delay = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {}, delay);
  });
}
