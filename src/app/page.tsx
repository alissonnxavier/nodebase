
import { useTRPC } from '@/trpc/client';
import { dehydrate, HydrationBoundary, useQuery } from '@tanstack/react-query';
import { trpc, getQueryClient } from '@/trpc/server';
import React, { Suspense } from 'react'
import { Client } from './client';

export const Page = async () => {

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div>Loading client...</div>}>
          <Client />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  )
};

export default Page;
