// src/lib/mockData.js

const USERS = ["Mike Braham", "Alex Johnson", "Sarah Thompson", "David Lee", "Emily Carter", "James Smith", "Laura White", "Chris Brown"];
const COMPANIES = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "TED", logo: "https://logo.clearbit.com/ted.com" },
  { name: "Unilever", logo: "https://logo.clearbit.com/unilever.com" }
];

// Helper to get random array item
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to generate random date
const getRandomDate = () => {
    const start = new Date(2024, 9, 1); // Oct 2024
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

export const generateMockData = (count = 2000) => {
  return Array.from({ length: count }, (_, index) => {
    const isCompanyType = Math.random() > 0.5;
    const company = getRandom(COMPANIES);
    const user = getRandom(USERS);

    // 7. Email Waterfall States
    const emailWaterfallState = getRandom(['found', 'found', 'found', 'missing', 'loading', 'queued', 'pending', 'error']); 
    // 8. Email Address Logic (Empty if loading/missing)
    let emailAddr = "";
    if (emailWaterfallState === 'found') emailAddr = `contact@${company.name.toLowerCase()}.com`;
    else if (emailWaterfallState === 'loading') emailAddr = "loading";

    // 10. Enrich Company States
    const enrichStatus = getRandom(['success', 'error', 'access_denied']);

    return {
      // 1. S No.
      id: index + 1,
      
      // 2. Imported Data (Polymorphic: User or Company)
      importedData: {
        type: isCompanyType ? 'company' : 'user',
        value: isCompanyType ? company.name : user
      },

      // 3. Last Updated At
      updatedAt: getRandomDate(),

      // 4. Company Name
      company: {
        name: company.name,
        logo: company.logo
      },

      // 5. Company Website
      website: `https://www.${company.name.toLowerCase()}.com`,

      // 6. LinkedIn Job URL
      linkedin: `https://www.linkedin.com/company/${company.name.toLowerCase()}`,

      // 7. Email Waterfall (Complex Object)
      emailWaterfall: {
        state: emailWaterfallState,
        label: emailWaterfallState === 'found' ? 'Email Found' 
             : emailWaterfallState === 'missing' ? 'Run condition not met' 
             : emailWaterfallState === 'error' ? 'No email' 
             : emailWaterfallState // 'loading', 'queued', 'pending'
      },

      // 8. Email Address
      emailAddress: emailAddr,

      // 9. Find ICP
      icpStatus: getRandom(['ICP', 'NON-ICP', 'ICP']), // Bias towards ICP

      // 10. Enrich Company
      enrichCompany: enrichStatus === 'error' 
        ? { state: 'error', value: 'An error occurred. Try again' }
        : { state: 'success', value: 'Bitscale Evaluation - Account...' },

      // 11. Phone Waterfall
      phoneWaterfall: {
        state: 'error',
        value: 'Your credits are exhausted. Please try again.'
      },

      // 12. Enrich Company 2
      enrichCompany2: {
        state: 'access_denied',
        value: 'Access Denied'
      },

      // 13. Link Scrapper (Empty)
      linkScrapper: "" 
    };
  });
};