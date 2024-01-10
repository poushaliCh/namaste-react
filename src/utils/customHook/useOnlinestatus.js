import { useEffect, useState } from 'react';

const useOnlinestatus = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlinestatus(false);
    });
    window.addEventListener('online', () => {
      setOnlinestatus(true);
    });
  }, []);

  //boolean value
  return onlinestatus;
};
export default useOnlinestatus;
