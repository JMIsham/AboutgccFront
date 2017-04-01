import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';
import { Flag, Segment } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react';


const AboutPage = () => {
  return (
    <div>
      <h1 className="alt-header">About</h1>
      <h2>
        this is an about page of AboutGCC
      </h2>

            <Flag name='ae' />
            <Flag name='france' />
            <Flag name='myanmar' />

        <Label as='a' image>
            Joe
        </Label>

    </div>
  );
};

export default AboutPage;
