import { GetStaticProps } from 'next';

import { PostData } from '../@types/posts';
import getAllPosts from '../data/posts/getAllPosts';

import * as S from '../styles/pages/home';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper/styles';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { SITE_NAME } from '../config/appConfig';

type IHomeProps = {
  posts: PostData[];
};

const Home = ({ posts }: IHomeProps) => {
  const description =
    'Sou um jovem curioso interessado por tecnologia e jogos, sempre estou atrás de aprender algo novo, sendo conhecido ou não. Hoje estudo desenvolvimento front end.';

  return (
    <>
      <SEO
        title={SITE_NAME}
        imageUrl="https://res.cloudinary.com/dtrpgm9iw/image/upload/v1618320115/me_hiawnu.jpg"
        description={description}
        url="/"
      />
      <main>
        <Header home />
        <Wrapper maxWidth={140}>
          <S.HomeStart>
            <S.TextBox>
              <p>Olá, me chamo</p>
              <h1>Guilherme Victor</h1>
              <p>{description}</p>
            </S.TextBox>
            <figure>
              <img src="me.jpg" alt="Guilherme Victor" />
            </figure>
          </S.HomeStart>
          <S.LastPosts>
            <b>Últimas publicações</b>
            <ul>
              {posts.map(post => (
                <PostCard
                  id={post.id}
                  description={post.content}
                  title={post.title}
                  createdAt={post.created_at}
                  key={post.id}
                />
              ))}
            </ul>
          </S.LastPosts>
          <Footer />
        </Wrapper>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('_sort=created_at:desc');

  return {
    props: {
      posts,
    },
  };
};

export default Home;
