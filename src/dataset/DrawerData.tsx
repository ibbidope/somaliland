interface Route {
  name: string;
  uri?: string;
}

interface DrawerSection {
  sectionTitle?: string;
  routes: Route[];
}

const drawerData: DrawerSection[] = [
  {
    sectionTitle: 'About Somaliland',
    routes: [
      {
        name: 'History',
        uri: 'https://www.govsomaliland.online/article/history/?apple=1',
      },
      {
        name: 'Constitution',
        uri: 'https://www.govsomaliland.online/article/constitution/?apple=1',
      },
      {
        name: 'Flag',
        uri: 'https://www.govsomaliland.online/article/flag/?apple=1',
      },
      {
        name: 'National Symbols',
        uri: 'https://www.govsomaliland.online/article/national-symbols/?apple=1',
      },
      {
        name: 'Maps & Regions',
        uri: 'https://www.govsomaliland.online/article/maps-and-regions/?apple=1',
      },
      {
        name: 'People & Culture',
        uri: 'https://www.govsomaliland.online/article/people-and-culture/?apple=1',
      },
      {
        name: 'The Economy',
        uri: 'https://www.govsomaliland.online/article/the-economy/?apple=1',
      },
    ],
  },
  {
    sectionTitle: 'The Government',
    routes: [
      {
        name: 'Presidency',
        uri: 'https://presidency.govsomaliland.org//?apple=1',
      },
      {
        name: 'Ministries',
        uri: 'https://www.govsomaliland.org/article/departments/?apple=1',
      },
      {
        name: 'Agencies',
        uri: 'https://www.govsomaliland.org/article/somaliland-agencies/?apple=1',
      },
      {
        name: 'House of Representatives',
        uri: 'https://hor.govsomaliland.org/?apple=1',
      },
      {name: 'House of Elders', uri: 'https://hoe.govsomaliland.org/?apple=1'},
      {
        name: 'Attorney General Office',
        uri: 'https://ag.govsomaliland.org/?apple=1',
      },
      {name: 'Courts', uri: 'https://courts.govsomaliland.org/?apple=1'},
    ],
  },
  {
    sectionTitle: 'Online Services',
    routes: [
      {
        name: 'National ID',
        uri: 'https://www.govsomaliland.online/article/national-id-application-form/?apple=1',
      },
      {
        name: 'Property Registration',
        uri: 'https://www.govsomaliland.online/article/online-property-registration/?apple=1',
      },
      {
        name: 'Building Permit',
        uri: 'https://www.govsomaliland.online/article/building-permit/?apple=1',
      },
      {
        name: 'Property & Tax',
        uri: 'https://www.govsomaliland.online/article/taxes-for-land-and-residential-house/?apple=1',
      },
      {
        name: 'Building Permit Tax',
        uri: 'https://www.govsomaliland.online/article/building-permit-tax/?apple=1',
      },
      {
        name: 'Tax on Property Transfer',
        uri: 'https://www.govsomaliland.online/article/tax-on-transfer-of-property/?apple=1',
      },
      {
        name: 'Land Registration',
        uri: 'https://www.govsomaliland.online/article/online-land-registration/?apple=1',
      },
      {
        name: 'Land Tax',
        uri: 'https://www.govsomaliland.online/article/land-tax/?apple=1',
      },
      {
        name: 'Tax on Land Transfer',
        uri: 'https://www.govsomaliland.online/article/tax-on-transfer-of-land/?apple=1',
      },
      {
        name: 'Business Registration',
        uri: 'https://www.govsomaliland.online/article/business-registration/?apple=1',
      },
      {
        name: 'Business Tax',
        uri: 'https://www.govsomaliland.online/article/business-tax/?apple=1',
      },
      {
        name: 'Birth Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-birth-certificate/?apple=1',
      },
      {
        name: 'Birth Certificate Foreign',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-birth-certificate-foreign/?apple=1',
      },
      {
        name: 'Marriage Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-marriage-certificate/?apple=1',
      },
      {
        name: 'Divorce Certificate',
        uri: 'https://www.govsomaliland.online/article/divorce-certificate/?apple=1',
      },
      {
        name: 'Death Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-death-certificate/?apple=1',
      },
      {
        name: 'Public Complaints',
        uri: 'https://www.govsomaliland.online/article/public-complaints/?apple=1',
      },
    ],
  },
  {
    sectionTitle: 'Publications',
    routes: [
      {
        name: 'legislations',
        uri: 'https://www.govsomaliland.online/articles/legislations/?apple=1',
      },
      {
        name: 'Regulations',
        uri: 'https://www.govsomaliland.online/articles/regulations/?apple=1',
      },
      {
        name: 'Policies',
        uri: 'https://www.govsomaliland.online/articles/policies/?apple=1',
      },
      {
        name: 'Strategics',
        uri: 'https://www.govsomaliland.online/articles/strategics/?apple=1',
      },
      {
        name: 'Guidelines',
        uri: 'https://www.govsomaliland.online/articles/guidelines/?apple=1',
      },
      {
        name: 'Reports',
        uri: 'https://www.govsomaliland.online/articles/reports/?apple=1',
      },
      {
        name: 'Researches',
        uri: 'https://www.govsomaliland.online/articles/researches/?apple=1',
      },
    ],
  },
  {
    sectionTitle: 'Media',
    routes: [
      {
        name: 'News',
        uri: 'https://www.govsomaliland.online/articles/news-media/?apple=1',
      },
      {
        name: 'Press Releases',
        uri: 'https://www.govsomaliland.online/articles/press-releases/?apple=1',
      },
      {
        name: 'Events',
        uri: 'https://www.govsomaliland.online/articles/events/?apple=1',
      },
      {
        name: 'Gallery',
        uri: 'https://www.govsomaliland.online/articles/gallery/?apple=1',
      },
    ],
  },
];

export default drawerData;
