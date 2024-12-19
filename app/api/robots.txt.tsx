import React from 'react'

import { NextPageContext } from 'next';

const crawlableRobotsTxt = `User-agent: *
Allow: /
Allow: /*.js
Allow: /*.css 

Sitemap: http://localhost:3000/sitemap.xml
`;

class Robots extends React.Component {
  public static async getInitialProps({ res }: NextPageContext) {
    if (res) {
      res.setHeader('Content-Type', 'text/plain');
      res.write(crawlableRobotsTxt);
      res.end();
    }
  }
}

export default Robots;