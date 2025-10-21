// deno-lint-ignore-file no-explicit-any require-await
import { fromPromise } from "xstate";

export function promise_logic_from_unary<
  T extends (arg: any) => Promise<any>,
>(fn: T) {
  return fromPromise<Awaited<ReturnType<T>>, Parameters<T>[0]>(
    async ({ input }) => {
      return fn(input);
    },
  );
}
