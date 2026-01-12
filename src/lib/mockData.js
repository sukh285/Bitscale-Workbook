// src/lib/mockData.js

const NAMES = ["Mike Braham", "Alex Johnson", "Sarah Thompson", "David Lee", "Emily Carter", "James Smith", "Laura White", "Chris Brown", "Jessica Green", "Daniel Harris"];
const COMPANIES = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "TED", logo: "https://logo.clearbit.com/ted.com" },
  { name: "Unilever", logo: "https://logo.clearbit.com/unilever.com" }
];
const STATUSES = ["found", "missing", "pending"];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomDate = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
};

export const generateMockData = (count = 2000) => {
  return Array.from({ length: count }, (_, index) => {
    const company = getRandom(COMPANIES);
    const status = Math.random() > 0.3 ? "found" : "missing"; // Bias towards found

    return {
      id: index + 1,
      name: getRandom(NAMES),
      designation: "Software Engineer", // Placeholder
      updatedAt: getRandomDate(),
      company: company.name,
      companyLogo: company.logo,
      companyWebsite: `https://www.${company.name.toLowerCase()}.com`,
      linkedin: `https://www.linkedin.com/company/${company.name.toLowerCase()}`,
      emailStatus: status, // 'found' or 'missing'
    };
  });
};