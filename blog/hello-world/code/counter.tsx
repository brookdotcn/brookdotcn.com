"use client";

import { useState, type FC, type JSX } from "react";
import { Button } from "@/components/ui/button";

const Counter: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="w-24 text-center text-2xl">{count}</p>
      <Button variant="default" onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </Button>
      <Button
        variant="outline"
        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
      >
        Dec
      </Button>
      <Button variant="destructive" onClick={() => setCount(0)}>
        Del
      </Button>
    </div>
  );
};

export default Counter;
