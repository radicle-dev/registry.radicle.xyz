
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/config',
  component: ComponentCreator('/docs/config'),
  exact: true,
  
},
{
  path: '/docs/design',
  component: ComponentCreator('/docs/design'),
  exact: true,
  
},
{
  path: '/docs/docs',
  component: ComponentCreator('/docs/docs'),
  exact: true,
  
},
{
  path: '/docs/faq',
  component: ComponentCreator('/docs/faq'),
  exact: true,
  
},
{
  path: '/docs/guides',
  component: ComponentCreator('/docs/guides'),
  exact: true,
  
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro'),
  exact: true,
  
},
{
  path: '/docs/linux',
  component: ComponentCreator('/docs/linux'),
  exact: true,
  
},
{
  path: '/docs/mac',
  component: ComponentCreator('/docs/mac'),
  exact: true,
  
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx'),
  exact: true,
  
},
{
  path: '/docs/mine',
  component: ComponentCreator('/docs/mine'),
  exact: true,
  
},
{
  path: '/docs/node',
  component: ComponentCreator('/docs/node'),
  exact: true,
  
},
{
  path: '/docs/overview',
  component: ComponentCreator('/docs/overview'),
  exact: true,
  
},
{
  path: '/docs/p2p',
  component: ComponentCreator('/docs/p2p'),
  exact: true,
  
},
{
  path: '/docs/quickstart',
  component: ComponentCreator('/docs/quickstart'),
  exact: true,
  
},
{
  path: '/docs/requirements',
  component: ComponentCreator('/docs/requirements'),
  exact: true,
  
},
{
  path: '/docs/token',
  component: ComponentCreator('/docs/token'),
  exact: true,
  
},
{
  path: '/docs/whitepaper',
  component: ComponentCreator('/docs/whitepaper'),
  exact: true,
  
},
{
  path: '/docs/windows',
  component: ComponentCreator('/docs/windows'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
