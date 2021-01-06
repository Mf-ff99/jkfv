import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      console.log(history.location)
      let hash = history.location.hash
      if(hash !== '#cameracar' && hash !== '#underwater' && hash !== '#3D' && hash !== '#photoboats' && hash !== '#cranes' && hash !== '#skunkwords' && hash !== '#aerials' && hash !== '#lenses' && hash !== '#crew' ){
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);