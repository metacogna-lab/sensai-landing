"use client";

export default function Error() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-ink text-center flex-col gap-4">
      <h2 className="text-2xl font-bold font-display">Something went wrong</h2>
      <p>Please try again later.</p>
    </div>
  );
}
