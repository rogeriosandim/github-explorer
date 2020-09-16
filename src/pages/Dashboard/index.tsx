import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore Github repositories</Title>

      <Form action=''>
        <input placeholder='Type the repository name' />
        <button type='submit'>Search</button>
      </Form>

      <Repositories>
        <a href='Test'>
          <img
            src='https://avatars2.githubusercontent.com/u/12728533?s=460&u=6eec90d75219f95f584736404f3f3c4314c12a28&v=4'
            alt='Rogerio Sandim'
          />

          <div>
            <strong>rogeriosandim/mockup-udacity-project</strong>
            <p>
              This is the first project that I've done during the Web Front-End
              Foundations Nanodegree Program at Udacity
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
