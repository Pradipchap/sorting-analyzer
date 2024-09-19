"use client";

import { Slider } from "@/components/ui/slider";
import { PlayIcon } from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import quickSort from "@/hooks/quickSort";

function getNumbers(range = 50) {
  return Array.from(
    { length: range },
    () => Math.floor(Math.random() * range) + 1
  );
}

export default function Page({ params }: { params: { id: string } }) {
  const [isSorting, setIsSorting] = useState(false);
  const [noOfItems, setNoOfItems] = useState(5);
  const [numbers, setNumbers] = useState<number[]>(getNumbers(5));

  const containerRef = useRef<HTMLDivElement | null>(null);

  function handleValueChange(numbers: number[]) {
    const x = getNumbers(numbers[0]);
    console.log(x);
    setNumbers(x);
  }

  async function handleSort() {
    const x = await quickSort(
      numbers,
      0,
      numbers.length - 1,
      containerRef,
      setIsSorting
    );
    console.log("x", x);
    // setNumbers(await x);
  }

  return (
    <div className="flex flex-col text-center px-5 h-[calc(100vh-56px)]">
      <Card className="!border-none shadow-none">
        <CardHeader className="flex flex-grow-0 flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-3 sm:py-4">
            <CardTitle>{params.id}</CardTitle>
            <div className="flex w-full items-center justify-between">
              <div className="grid min-w-32 w-96 grid-cols-4 text-lg font-medium items-center justify-center gap-3">
                <p className="col-span-2 w-max">Elements</p>
                <p className="col-span-1 w-max">{noOfItems}</p>
                <Slider
                  className="col-span-3"
                  defaultValue={[100]}
                  max={200}
                  min={2}
                  step={10}
                  onValueChange={(numbers) => {
                    setNoOfItems(numbers[0]);
                  }}
                  onValueCommit={handleValueChange}
                />
              </div>
              <Button className="w-max" onClick={handleSort}>
                <PlayIcon className="mr-2 h-4 w-4" />
                Run
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent
          ref={containerRef}
          className="h-[30rem] relative w-full gap-[0.5px] items-end flex"
        >
          {numbers.map((item, index) => {
            return (
              <div
                style={{
                  height: (function () {
                    const x = Math.floor((item / noOfItems) * 100);
                    return x + "%";
                  })(),
                  width: (function () {
                    const x = Math.floor((1 / noOfItems) * 100);
                    return x + "%";
                  })(),
                  left: (function () {
                    const x = Math.floor((1 / noOfItems) * 100 * index);
                    return x + "%";
                  })(),
                }}
                className="flex-1 bottom-0 bg-red-600"
              >
                {item}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
