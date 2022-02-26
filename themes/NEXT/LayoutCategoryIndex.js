import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import LayoutBase from './LayoutBase'
import Link from 'next/link'

export const LayoutCategoryIndex = ({
  tags,
  allPosts,
  categories,
  postCount,
  latestPosts
}) => {
  const { locale } = useGlobal()
  const meta = {
    title: `${locale.COMMON.CATEGORY} | ${BLOG.TITLE}`,
    description: BLOG.DESCRIPTION,
    type: 'website'
  }
  return <LayoutBase meta={meta} totalPosts={allPosts} tags={tags} postCount={postCount} latestPosts={latestPosts}>
    <div className='bg-white dark:bg-gray-700 px-10 py-10 shadow'>
      <div className='dark:text-gray-200 mb-5'>
        <i className='mr-4 fas faTh' />{locale.COMMON.CATEGORY}:
      </div>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {Object.keys(categories).map(category => {
          return <Link key={category} href={`/category/${category}`} passHref>
            <div
              className={'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
              <i className='mr-4 fas fa-folder' />{category}({categories[category]})
            </div>
          </Link>
        })}
      </div>
    </div>
  </LayoutBase>
}
