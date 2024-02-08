import { ProductDataModel } from '../../models';

export const PRODUCT_LIST: ProductDataModel[] = [
  {
    type: 'primary',
    title: 'Media',
    description: 'Enhance paid and earned media campaigns, from auditing to creation & campaign management',
    products: [
      {
        id: 'search',
        title: 'Search',
        description:
          'A platform for SEO experts, that helps track your keywords ranking and online visibility on the search engine. As well as allowing users to analyse their SEO strategy and efforts. Previously: MyPoseo',
        buttonText: 'Request access',
        productSlides:
          'https://docs.google.com/presentation/d/109TXmMz7XuJgVeXn_tYRUYeUZvR88NYL/edit?usp=sharing&ouid=108377238227713570661&rtpof=true&sd=true',
        accessSend: false,
        image: '../../../../assets/images/filler-1.png',
        role: 'ROLE_MEDIA_SEARCH',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'monitor',
        title: 'Monitor',
        description:
          'An automated early warning system that continually checks for performance anomalies and critical areas of media spend, that could result in downtime or waste spend. Previously: Safety Net',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1eRWdcqX3C3PgdCfpfo-5oEIaZBbU5XPHwV3VWHK8i2s/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-2.png',
        role: 'ROLE_MEDIA_MONITOR',
        isRequest: false,
        isBeta: true
      },
      {
        id: 'automate',
        title: 'Automate',
        description:
          'Allowing clients to automate search and display campaign creation, whilst also optimising workflows. Previously: Magpie',
        buttonText: 'Request access',
        productSlides: '',
        accessSend: false,
        image: '../../../../assets/images/filler-3.png',
        role: 'ROLE_MEDIA_AUTOMATE',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'bidding',
        title: 'Bidding',
        description:
          'A tool that enables advanced algorithmic bidding strategies customised to your clients objectives. Previously: Custom Bidding',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1j1tX4vyc0Dte2q6hwLMpDqEakYaO5xd-uV3xzLo6zSM/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-4.png',
        role: 'ROLE_MEDIA_BIDDING',
        isRequest: false,
        isBeta: false
      }
    ]
  },
  {
    type: 'accent',
    title: 'Creative suite',
    description: 'Deliver all our creative services with increased scale, efficiency and transparency',
    products: [
      {
        id: 'community',
        title: 'Community',
        description:
          'A proprietary freelancer management platform used primarily by the language teams l to acquire freelancers, source them for projects and manage their details/capabilities. Previously: Content Place',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1wTZeXvkQcPI0C6vTCRboIp7nLX-nNbSMIhxdNv7O0DM/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-5.png',
        role: 'ROLE_CREATIVE_COMMUNITY',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'workflow',
        title: 'Workflow',
        description:
          'A marketing operations tool that supports the online submission of briefs and content approval, aimed to simplfy communications between JF and the client. Previously: VIVID',
        redirect: 'https://acme.dev.vivid.systems/#/sso',
        buttonText: 'Log in',
        productSlides:
          'https://docs.google.com/presentation/d/1SHJ46IsGOmv0SLLVKifT36FMFk0R0R43/edit?usp=sharing&ouid=108377238227713570661&rtpof=true&sd=true',
        accessSend: false,
        image: '../../../../assets/images/filler-6.png',
        role: 'ROLE_CREATIVE_WORKFLOW',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'scribe',
        title: 'Scribe',
        description:
          'A proprietary workflow management platform to manage the creation and localisation of editorial content via distributed teams of freelancers. Previously: Quill Cloud',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1bGN1wSGd0ngV0Fd9gymxy9YpMbC7YCiE8aYnZARahKg/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-7.png',
        role: 'ROLE_CREATIVE_SCRIBE',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'display',
        title: 'Display',
        description:
          'Templated ad creator that allows users to alter, update and resize ads based on pre-agreed parameters. Previously: LiveAds',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1gBtOc_U2KgtDQQ0_EiTKx9xvzGa1P5PRWRL7QHYCJzE/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-8.png',
        role: 'ROLE_CREATIVE_DISPLAY',
        isRequest: false,
        isBeta: false
      }
    ]
  },
  {
    type: 'secondary',
    title: 'Data',
    description: 'Turn digital marketing data  into business-ready insights',
    products: [
      {
        id: 'dataprep',
        title: 'Dataprep',
        description:
          'Data extraction and transformation tool, allowing clients to turn raw data from multiple sources into clean business-ready datasets. Previously: Reeport Dataprep',
        buttonText: 'Request access',
        productSlides:
          'https://docs.google.com/presentation/d/1XnoHVt9lq1eJSrwMT9twr1bgqAKJW4fg/edit?usp=sharing&ouid=108377238227713570661&rtpof=true&sd=true',
        accessSend: false,
        image: '../../../../assets/images/filler-9.png',
        role: 'ROLE_DATA_DATAPREP',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'dataviz',
        title: 'Dataviz',
        description:
          'Centralised reporting tool, used by large organisations to create and automate detailed marketing analyses in multiple formats, at scale. Previously: Reeport Dataviz',
        buttonText: 'Request access',
        productSlides:
          'https://docs.google.com/presentation/d/1XnoHVt9lq1eJSrwMT9twr1bgqAKJW4fg/edit?usp=sharing&ouid=108377238227713570661&rtpof=true&sd=true',
        accessSend: false,
        image: '../../../../assets/images/filler-10.png',
        role: 'ROLE_DATA_DATAVIZ',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'iq',
        title: 'IQ',
        description:
          "Jellyfish's proprietary system of analysis that evaluates clients digital footprint. The tool benchmarks clients against their competitors, using 12 key business performance metrics. Previously: JIQ",
        buttonText: 'Request access',
        productSlides: '',
        accessSend: false,
        image: '../../../../assets/images/filler-11.png',
        role: 'ROLE_DATA_IQ',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'track',
        title: 'Track',
        description:
          'Jellyfish’s proprietary system for standardising and optimising the generation of GA4 tracking plans and monitoring. Previously: Albatross',
        buttonText: 'Request access',
        productSlides: 'https://docs.google.com/presentation/d/1fnwUohQVIVAhNmhmdxfWuBTW5PjFZT04UsHEr2GCR-I/edit?usp=sharing',
        accessSend: false,
        image: '../../../../assets/images/filler-12.png',
        role: 'ROLE_DATA_TRACK',
        isRequest: false,
        isBeta: false
      }
    ]
  },
  {
    type: 'warn',
    title: 'Commerce',
    description: 'Accelerate growth on eCommerce platforms',
    products: [
      {
        id: 'retail_analytics',
        title: 'Retail Analytics',
        description:
          'Analytics tool that allows brands to track conversion, visability, SEO and Market share on Amazon to strategically increase their ROI. Previously: Seelk',
        buttonText: 'Request access',
        productSlides:
          'https://docs.google.com/presentation/d/1iJS60akY2Ncg_FOTAvDmKldfnc0S85hR/edit?usp=sharing&ouid=108377238227713570661&rtpof=true&sd=true',
        accessSend: false,
        image: '../../../../assets/images/filler-13.png',
        role: 'ROLE_COMMERCE_RETAIL_ANALYTICS',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'retail_media',
        title: 'Retail Media',
        description: 'A platform that automated the build and optimisation of retail-media campaigns. Previously: Retail-Media Builder',
        buttonText: 'Request access',
        productSlides: '',
        accessSend: false,
        image: '../../../../assets/images/filler-14.png',
        role: 'ROLE_COMMERCE_RETAIL_MEDIA',
        isRequest: false,
        isBeta: false
      },
      {
        id: 'shopping',
        title: 'Shopping',
        description:
          'Data-driven shopping feed optimisation platform to maximise customers sales performance. Previously: Data Driven Shopping',
        buttonText: 'Request access',
        productSlides: '',
        accessSend: false,
        image: '../../../../assets/images/filler-15.png',
        role: 'ROLE_COMMERCE_SHOPPING',
        isRequest: false,
        isBeta: false
      }
    ]
  }
];
