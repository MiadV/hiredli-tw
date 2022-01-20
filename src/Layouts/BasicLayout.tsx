import { Footer } from '@/components/Footer';

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};
