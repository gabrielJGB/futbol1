import { useLocation } from 'preact-iso';
import { useEffect } from 'preact/hooks';

const RedirectHome = () => {

  const { route } = useLocation();

  useEffect(() => {
    const now = new Date();
    const yyyymmdd = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
    route(`/${yyyymmdd}`, true); 
    
  }, []);

  return null;
};

export default RedirectHome;
