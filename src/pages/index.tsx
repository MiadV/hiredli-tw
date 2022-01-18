import { BasicLayout } from '@/Layouts/BasicLayout';
// import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <p>Index Page</p>
    </>
  );
}

Home.defaultProps = {
  layoutProps: {
    meta: {
      title: 'Find Jobs | Vacancies & Career opportunities',
    },
    Layout: BasicLayout,
  },
};
