import { z } from 'zod';

import { router, publicProcedure } from '../trpc';

export const exampleRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string().nullish() }).nullish()).query(({ input }) => {
    return {
      greeting: `Hello ${input?.text ?? 'world'}`,
    };
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  create: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.example.create({ data: { text: input } });
  }),
});
