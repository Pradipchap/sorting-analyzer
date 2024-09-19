import { Dispatch, MutableRefObject, SetStateAction } from "react";

export default async function quickSort(
  array: number[],
  start: number,
  end: number,
  containerRef: MutableRefObject<HTMLDivElement | null>,
  setIsSorting: Dispatch<SetStateAction<boolean>>
) {
  // Call the helper function to sort the array
  await quickSortHelper(array, start, end, containerRef);
  // setNumbers([...array]); // Update the state after sorting
  console.log("QuickSort complete:", array);
  setIsSorting(false);
  return array;
}

async function quickSortHelper(
  array: number[],
  left: number,
  right: number,
  containerRef: MutableRefObject<HTMLDivElement | null>
) {
  if (left < right) {
    const pivot = left;
    let i = left;
    let j = right;
    if (!containerRef.current) return;
    const childrens = containerRef?.current.children;

    while (i < j) {
      // Move i to the right while elements are less than or equal to pivot
      while (array[i] <= array[pivot] && i < j) {
        i++;
      }
      // Move j to the left while elements are greater than the pivot
      while (array[j] > array[pivot]) {
        j--;
      }

      if (i < j) {
        // Swap elements i and j with DOM manipulation
        const iElement = childrens[i] as HTMLElement;
        const jElement = childrens[j] as HTMLElement;

        const iLeft = iElement.getBoundingClientRect().left;
        const jLeft = jElement.getBoundingClientRect().left;

        // Apply transitions for visual swapping
        iElement.style.transition = "transform 0.3s ease";
        jElement.style.transition = "transform 0.3s ease";

        iElement.style.transform = `translateX(${jLeft - iLeft}px)`;
        jElement.style.transform = `translateX(${iLeft - jLeft}px)`;

        // Swap the elements in the array
        // console.log(array[i], array[j]);
        console.log("array", array);
        [array[i], array[j]] = [array[j], array[i]];

        // Wait for transition to complete
        await sleep(iElement);
        await sleep(jElement);
      }
    }

    // Swap pivot with j
    const pivotElement = childrens[pivot] as HTMLElement;
    const jElement = childrens[j] as HTMLElement;

    const pivotLeft = pivotElement.getBoundingClientRect().left;
    const jLeft = jElement.getBoundingClientRect().left;

    pivotElement.style.transition = "transform 0.3s ease";
    jElement.style.transition = "transform 0.3s ease";

    pivotElement.style.transform = `translateX(${jLeft - pivotLeft}px)`;
    jElement.style.transform = `translateX(${pivotLeft - jLeft}px)`;

    // Swap pivot with element at j in the array
    console.log("array", array);
    [array[pivot], array[j]] = [array[j], array[pivot]];

    // Wait for transition to complete
    await sleep(pivotElement);
    await sleep(jElement);

    // Recursively sort the left and right parts
    await quickSortHelper(array, left, j - 1, containerRef); // Sort left part
    await quickSortHelper(array, j + 1, right, containerRef); // Sort right part
  }
}

async function sleep(element: HTMLElement) {
  return new Promise<void>((resolve) => {
    // console.log("Element sleeping:", element);
    function handleTransitionEnd() {
      // console.log("Transition ended for element:", element);
      element.style.transform = ""; // Reset the transform
      resolve(); // Resolve the promise when the transition ends
      element.removeEventListener("transitionend", handleTransitionEnd); // Cleanup the event listener
    }

    element.addEventListener("transitionend", handleTransitionEnd);
  });
}
