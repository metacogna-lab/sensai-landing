"use client";

import dynamic from 'next/dynamic';

const NeuralBackground = dynamic(
  () => import('./ui/flow-field-background'),
  { ssr: false }
);

export default function NeuralBackgroundWrapper() {
  return <NeuralBackground />;
}
