import BackButton from '../components/BackButton';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative">
      <div
        className="absolute top-5 left-5 px-4 py-2"
      >
        <BackButton destination="/" />
      </div>
      <h1 className="text-4xl">404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
