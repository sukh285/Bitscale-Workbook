const COLUMN_WIDTH = 220; 

export const GRID_COLUMNS = [
  // 1. Sno
  { 
    id: 'id', 
    label: '', 
    width: 80, 
    pinned: true,
    type: 'index' 
  },

  // 2. Imported Data
  { 
    id: 'importedData', 
    label: 'Imported Data', 
    width: COLUMN_WIDTH, 
    pinned: true,
    type: 'entity',
    icon: 'text', 
    loading: false // renders Play button
  },

  // 3. Last Updated
  { 
    id: 'updatedAt', 
    label: 'Last Updated At', 
    width: COLUMN_WIDTH, 
    type: 'text',
    icon: 'calendar',
    loading: false
  },

  // 4. Company Name
  { 
    id: 'company', 
    label: 'Company Name', 
    width: COLUMN_WIDTH, 
    type: 'company',
    icon: 'text',
    loading: false
  },

  // 5. Website
  { 
    id: 'website', 
    label: 'Company Website', 
    width: COLUMN_WIDTH, 
    type: 'link',
    icon: 'text',
    loading: false
  },

  // 6. LinkedIn
  { 
    id: 'linkedin', 
    label: 'LinkedIn Job URL', 
    width: COLUMN_WIDTH, 
    type: 'link',
    icon: 'text',
    loading: false
  },

  // 7. Email Waterfall
  { 
    id: 'emailWaterfall', 
    label: 'Email Waterfall', 
    width: COLUMN_WIDTH, 
    type: 'waterfall',
    icon: 'mail',
    loading: true // DEMO: Renders Spinner
  },

  // 8. Email Address
  { 
    id: 'emailAddress', 
    label: 'Email Address', 
    width: COLUMN_WIDTH, 
    type: 'text',
    icon: 'text', // The 'f' icon
    loading: true // DEMO: Renders Spinner
  },

  // 9. ICP Status
  { 
    id: 'icpStatus', 
    label: 'Find ICP', 
    width: COLUMN_WIDTH, 
    type: 'tag',
    icon: 'sparkles', // AI Icon
    loading: false
  },

  // 10. Enrich Company 1
  { 
    id: 'enrichCompany', 
    label: 'Enrich Company', 
    width: COLUMN_WIDTH, 
    type: 'status_text',
    icon: 'database', // Yellow database icon
    loading: false
  },

  // 11. Phone Waterfall
  { 
    id: 'phoneWaterfall', 
    label: 'Phone Waterfall', 
    width: COLUMN_WIDTH, 
    type: 'error_text',
    icon: 'phone',
    loading: false
  },

  // 12. Enrich Company 2
  { 
    id: 'enrichCompany2', 
    label: 'Enrich Company - 2', 
    width: COLUMN_WIDTH, 
    type: 'status_text',
    icon: 'database',
    loading: false
  },

  // 13. Link Scrapper
  { 
    id: 'linkScrapper', 
    label: 'Link Scrapper (2)', 
    width: COLUMN_WIDTH, 
    type: 'text',
    icon: 'text',
    loading: false
  },
  
  // 14. Add New Column
  {
    id: 'addNew',
    label: '+ Add New Column',
    width: COLUMN_WIDTH,
    type: 'add_new',
    isHeaderOnly: true
  }
];