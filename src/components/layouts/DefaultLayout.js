import Header from './Header';
import Nav from './Nav';

function DefaultLayout({ children }) {
  return (
    <div className="w-full font-nanum-regular h-screen">
      <Header />
      <div className="flex h-full">
        <Nav />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
