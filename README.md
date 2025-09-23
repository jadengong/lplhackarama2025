# SmartShopper (Finance Dashboard)

SmartShopper is a simple React app that demonstrates a shopping insights dashboard with search, a landing page, and a static search results page including a historical price chart.

## Features
- **Search**: Client-side suggestions with keyboard navigation and ARIA support.
- **Landing**: Basic marketing/intro page.
- **Results**: Static product details, price comparison table, and a Chart.js line chart.

## Getting Started

From the monorepo root (`lplhackarama2025`), the app lives in `finance-dashboard/`.

### Install
```bash
# From repo root
cd finance-dashboard
npm install
```

### Run (development)
```bash
npm start
```

### Windows PowerShell notes
PowerShell does not support `&&` like some shells. Use one of the following instead:
```powershell
Set-Location finance-dashboard; npm start
# or from repo root without cd
npm --prefix finance-dashboard start
```

## Scripts
- **start**: Start CRA dev server
- **build**: Production build
- **test**: Run tests

## Tech
- React 19
- React Router DOM 7
- Create React App (react-scripts 5)
- Chart.js 4 + react-chartjs-2
- CSS modules (plain CSS files)

## Notes
- Data is currently mocked/stubbed in components. Replace with real APIs as needed.
- If you plan to adopt a design system, either remove unused MUI/font deps or begin using them consistently.
