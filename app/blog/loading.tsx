import React from "react";

function loading() {
  return (
    <main className="min-h-screen bg-stone-50 px-5 py-8 text-slate-950 dark:bg-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-8 sm:py-10">
          <div className="h-3 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-5 h-10 w-64 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-4 w-full max-w-md animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="min-h-64 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="h-9 w-9 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="mt-10 h-6 w-4/5 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
              <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
              <div className="mt-3 h-4 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default loading;
