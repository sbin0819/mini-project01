import axios from 'axios';
import { fetchAddr } from './api/nyt';
import DataList from '../components/StaticProps/DataList';

function About({ data }) {
  return (
    <>
      <h1>Example - Static Props</h1>
      <DataList data={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(fetchAddr);
  const data = res.data.results.lists;
  return {
    props: {
      data,
    },
  };
}

export default About;
