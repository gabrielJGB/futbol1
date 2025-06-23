import { useLocation } from 'preact-iso';
import { useEffect } from 'preact/hooks';

const RedirectHome = () => {

  const { route } = useLocation();

  useEffect(() => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, '');
    route(`/${yyyymmdd}`, true); 
    
  }, []);

  return null;
};

export default RedirectHome;
