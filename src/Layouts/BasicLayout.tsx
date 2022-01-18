import { Footer } from '@/components/Footer';

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <>
      <main className="bg-slate-500  max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
        {children}
      </main>
      <Footer />
    </>
  );
};
