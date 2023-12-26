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
        uri: 'https://www.govsomaliland.online/article/history',
      },
      {
        name: 'Constitution',
        uri: 'https://www.govsomaliland.online/article/constitution',
      },
      {name: 'Flag', uri: 'https://www.govsomaliland.online/article/flag'},
      {
        name: 'National Symbols',
        uri: 'https://www.govsomaliland.online/article/national-symbols',
      },
      {
        name: 'Maps & Regions',
        uri: 'https://www.govsomaliland.online/article/maps-and-regions',
      },
      {
        name: 'People & Culture',
        uri: 'https://www.govsomaliland.online/article/people-and-culture',
      },
      {
        name: 'The Economy',
        uri: 'https://www.govsomaliland.online/article/the-economy',
      },
    ],
  },
  {
    sectionTitle: 'The Government',
    routes: [
      {name: 'Presidency', uri: 'https://presidency.govsomaliland.org/'},
      {
        name: 'Ministries',
        uri: 'https://www.govsomaliland.org/article/departments',
      },
      {
        name: 'Agencies',
        uri: 'https://www.govsomaliland.org/article/somaliland-agencies',
      },
      {name: 'House of Representatives', uri: 'https://hor.govsomaliland.org/'},
      {name: 'House of Elders', uri: 'https://hoe.govsomaliland.org/'},
      {name: 'Attorney General Office', uri: 'https://ag.govsomaliland.org/'},
      {name: 'Courts', uri: 'https://courts.govsomaliland.org/'},
    ],
  },
  {
    sectionTitle: 'Online Services',
    routes: [
      {
        name: 'National ID',
        uri: 'https://www.govsomaliland.online/article/national-id-application-form',
      },
      {
        name: 'Property Registration',
        uri: 'https://www.govsomaliland.online/article/online-property-registration',
      },
      {
        name: 'Building Permit',
        uri: 'https://www.govsomaliland.online/article/building-permit',
      },
      {
        name: 'Property & Tax',
        uri: 'https://www.govsomaliland.online/article/taxes-for-land-and-residential-house',
      },
      {
        name: 'Building Permit Tax',
        uri: 'https://www.govsomaliland.online/article/building-permit-tax',
      },
      {
        name: 'Tax on Property Transfer',
        uri: 'https://www.govsomaliland.online/article/tax-on-transfer-of-property',
      },
      {
        name: 'Land Registration',
        uri: 'https://www.govsomaliland.online/article/online-land-registration',
      },
      {
        name: 'Land Tax',
        uri: 'https://www.govsomaliland.online/article/land-tax',
      },
      {
        name: 'Tax on Land Transfer',
        uri: 'https://www.govsomaliland.online/article/tax-on-transfer-of-land',
      },
      {
        name: 'Business Registration',
        uri: 'https://www.govsomaliland.online/article/business-registration',
      },
      {
        name: 'Business Tax',
        uri: 'https://www.govsomaliland.online/article/business-tax',
      },
      {
        name: 'Birth Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-birth-certificate',
      },
      {
        name: 'Birth Certificate Foreign',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-birth-certificate-foreign',
      },
      {
        name: 'Marriage Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-marriage-certificate',
      },
      {
        name: 'Divorce Certificate',
        uri: 'https://www.govsomaliland.online/article/divorce-certificate',
      },
      {
        name: 'Death Certificate',
        uri: 'https://www.govsomaliland.online/article/issue-of-a-death-certificate',
      },
      {
        name: 'Public Complaints',
        uri: 'https://www.govsomaliland.online/article/public-complaints',
      },
    ],
  },
  {
    sectionTitle: 'Publications',
    routes: [
      {
        name: 'legislations',
        uri: 'https://www.govsomaliland.online/articles/legislations ',
      },
      {
        name: 'Regulations',
        uri: 'https://www.govsomaliland.online/articles/regulations',
      },
      {
        name: 'Policies',
        uri: 'https://www.govsomaliland.online/articles/policies',
      },
      {
        name: 'Strategics',
        uri: 'https://www.govsomaliland.online/articles/strategics',
      },
      {
        name: 'Guidelines',
        uri: 'https://www.govsomaliland.online/articles/guidelines',
      },
      {
        name: 'Reports',
        uri: 'https://www.govsomaliland.online/articles/reports',
      },
      {
        name: 'Researches',
        uri: 'https://www.govsomaliland.online/articles/researches',
      },
    ],
  },
  {
    sectionTitle: 'Media',
    routes: [
      {
        name: 'News',
        uri: 'https://www.govsomaliland.online/articles/news-media',
      },
      {
        name: 'Press Releases',
        uri: 'https://www.govsomaliland.online/articles/press-releases',
      },
      {name: 'Events', uri: 'https://www.govsomaliland.online/articles/events'},
      {
        name: 'Gallery',
        uri: 'https://www.govsomaliland.online/articles/gallery',
      },
    ],
  },
];

export default drawerData;
