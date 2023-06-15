import { Suspense } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../Utils/Theme';
// import { Layout } from '../Layout/Layout';
// import { GlobalStyle } from '../Utils/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box, Spinner } from '@chakra-ui/react';
import bgImage from '../../image/pexels-roberto-lee-cortes-11402369.jpg';
import { Footer } from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Box
      h="100vh"
      bgImage={bgImage}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        maxW="1080px"
        my="0px"
        mx="auto"
        py="0px"
        px="16px"
        textAlign="center"
      >
        <AppBar />
        <Suspense fallback={<Spinner size="xl" />}>
          <Outlet />
        </Suspense>
        <Footer />
      </Box>
    </Box>
    // </ThemeProvider>
  );
};

export default SharedLayout;