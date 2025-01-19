'use client';

export default function Error({ error }: { error: Error }) {
  console.log('error.message', error.message);
  return (
    <div>
      <h1 className="p-6 text-center text-3xl text-red-500">
        Something went wrong in [local]
      </h1>
    </div>
  );
}
