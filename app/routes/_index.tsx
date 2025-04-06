import * as React from "react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

export default function Index() {
  return (
    <React.Fragment>
      <h1>Testing</h1>
    </React.Fragment>
  );
}
