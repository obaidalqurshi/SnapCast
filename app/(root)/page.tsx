import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import { getAllVideos } from '@/lib/actions/video'
import React from 'react'

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(query, filter, Number(page) || 1);

  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public library' />
      <h1 className='text-2xl font-karla'> Welcome to Loom Clone</h1>
      <section className='video-grid'>
        {videos?.length > 0 ? (
          <section className='video-grid'>
            {videos[0].video.title}
          </section>
        ) : (<div>empty</div>)}
      </section>
    </main>
  )
}

export default Page