# Bitscale Intelligent Data Grid

This project is an implementation of the Bitscale sales platform dashboard. It focuses on building a **performant, virtualized data grid** capable of handling thousands of rows while maintaining a responsive, pixel-perfect UI.

## 🏗️ Architecture & Technical Decisions

### 1. Performance-First Virtualization (TanStack Virtual)
The core requirement was to render 2000+ rows without UI lag.
- **Solution:** I implemented **Windowing (Virtualization)** using `@tanstack/react-virtual`.
- **Why:** Rendering 2000 DOM nodes simultaneously crashes browser performance. Virtualization only renders the ~15 rows currently visible in the viewport, keeping the DOM lightweight and scrolling buttery smooth.
- **Trade-off:** Virtualization requires fixed row heights or complex dynamic measurement. I opted for a standard row height (44px) to ensure consistent performance and simpler CSS logic.

### 2. Scalable Data Schema (Polymorphism)
Instead of using simple flat strings for the table data, I created a **polymorphic data model** in `mockData.js`.
- **Complex States:** The "Email Waterfall" column isn't just text; it tracks distinct states (`loading`, `found`, `missing`, `error`). This allows the UI to render completely different components (Spinner vs. Badge vs. Error Text) based on state, not string parsing.
- **Polymorphism:** The "Imported Data" column dynamically renders either a **User Icon** or **Company Icon** based on the `row.type` field.
- **Simulated Latency:** I created a custom hook `useGridData` that mimics a 1.5s network delay to demonstrate **Skeleton Loading states**, proving the UI handles asynchronous data gracefully.

### 3. Atomic Component Design
I avoided the "Monolithic Table" anti-pattern by breaking the grid into **Atomic Cells**.
- **Directory:** `src/components/grid/cells/`
- **Benefit:** Each cell type (`EntityCell`, `WaterfallCell`, `LinkCell`) is isolated. If the "Link" logic changes to require an icon, I only update one file, and it propagates everywhere.
- **Scalability:** This structure allows multiple developers to work on different column types simultaneously without merge conflicts.

### 4. Configuration-Driven Layout
The grid is not hardcoded in JSX. It is generated from a centralized config file: `src/lib/gridConfig.js`.
- **Why:** In a real-world SaaS, columns are often dynamic (user-customizable).
- **How:** The config defines `width`, `label`, `pinned` status, and `type`. The `VirtualGrid` engine reads this config to render the table. Adding a new column takes 3 lines of config code, not 50 lines of JSX.

---

## 🛠️ Trade-offs & Future Improvements

While this submission focuses on UI/UX and performance, some architectural trade-offs were made due to time constraints.
Here is how I would scale this for production:

### 1. State Management (Zustand vs. Local State)
- **Current:** I used local state (`useState`) and prop drilling for simplicity in this single-view demo.
- **Future:** For a real app with complex filtering, sorting, and auth, I would integrate **Zustand**. It offers a centralized store to manage filter states, row selection, and API data without the boilerplate of Redux, making it easier to share state between the Toolbar and the Grid.

### 2. Optimization (Memoization)
- **Current:** The grid is fast, but static headers re-render with the parent.
- **Future:** I would wrap stable components (like `GridHeader` or static cells) in `React.memo` and `useMemo`. For example, the `GRID_COLUMNS` config is static and should not trigger re-calculations on every render.

### 3. Component Reusability (Props & Composition)
- **Current:** Some components like `GridToolbar` have slightly coupled logic for the specific Bitscale layout.
- **Future:** I would refactor these into truly generic UI components (e.g., a generic `<Toolbar>` that accepts children) to make them reusable across different pages of the application.

### 4. Theming System
- **Current:** Colors are centralized in `index.css` using Tailwind CSS variables (e.g., `--color-brand-red`).
- **Future:** To support a robust Dark Mode, I would expand these tokens into a semantic theme provider (e.g., `bg-surface-primary` instead of `bg-white`) to allow instant theme switching.

---

## 🎨 UI/UX Details "Pixel-Perfect"

I paid special attention to the subtle details that elevate the user experience:
- **Sticky Columns:** The "Index" and "Imported Data" columns stick to the left, ensuring context is never lost while horizontal scrolling. Note - any column can be selected and pinned as a functionality this way.
- **Responsive Design:** The Toolbar and Footer adapt to mobile screens—hiding text labels and using icon-only buttons to prevent layout breakage.
- **Interactive States:** Hover effects on rows, "Play" buttons appearing on hover in headers, and specific styling for selected cells.
- **Custom Scrollbars:** Implemented a `scrollbar-thin` utility to replace the clumsy default browser scrollbar with a sleek floating scrollbar.

## 📦 Tech Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Virtualization:** @tanstack/react-virtual