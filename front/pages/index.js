import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>미니 프로젝트 홈</title>
      </Head>
      <div>미니 프로젝트</div>
    </div>
  );
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
