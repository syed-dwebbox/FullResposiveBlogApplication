import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './Components/Header';
import FeaturedPost from './Components/FeaturedPost';
import { featuredPosts, sidebar } from './data/Data';
import PostCard from './Components/PostCard';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Container>
      <Header/>
      <FeaturedPost/>
      <br />
      <Grid container spacing={4} >
        {featuredPosts.map((post) => (
           <PostCard post={post} key={post.title} />
        ))}
      </Grid>
      <Grid container spacing={5} className='mainGrid'>
       <Main  title='From the Firehouse' />
       <Sidebar title={sidebar.title}
       description = {sidebar.description}
       archives={sidebar.archives}
       social={sidebar.social}
        />
      </Grid>
    </Container>
    <Footer title='Footer' description='Design and Developed by Syed Maaz Using MUI' />
    </>

  );
}

export default App;
