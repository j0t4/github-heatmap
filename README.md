## GitHub Heatmap

This project implements a GitHub contribution heatmap using Next.js, Radix UI, and Tailwind CSS. 

**Currently, the project lacks the core logic for fetching and displaying GitHub contributions. This README provides an overview of the existing setup and outlines the necessary steps to implement the heatmap functionality.**

### Structure

- **`app/page.tsx`**: This file defines the main page of the application, rendering the `ContributionHeatmap` component.
- **`app/layout.tsx`**: Sets up the basic layout of the app, including font imports and applying global styles.
- **`lib/utils.ts`**: Contains a utility function `cn` for conveniently composing class names using `clsx` and `tailwind-merge`.
- **`components/ui/tooltip.tsx`**: Provides a reusable `Tooltip` component built with Radix UI primitives, allowing for customizable tooltips throughout the application.

### Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   This will start the development server at `http://localhost:3000`.

### Implementing the Heatmap

The current codebase provides a basic structure but lacks the core logic for the GitHub heatmap. Here's what needs to be done:

1. **Fetch Contribution Data:**
   - You'll need to fetch contribution data from the GitHub API. This can be achieved using the `fetch` API or a library like Axios.
   - Refer to the GitHub API documentation for details on retrieving contribution data: [https://docs.github.com/en/rest/activity/contributions](https://docs.github.com/en/rest/activity/contributions)

2. **Process Data:**
   - Once fetched, process the contribution data into a format suitable for rendering the heatmap. 
   - This might involve grouping contributions by date and calculating the intensity of contributions for each day.

3. **Render the Heatmap:**
   - Create a component to represent an individual day on the heatmap.
   - Use the processed contribution data to style each day's component, reflecting the intensity of contributions.
   - Consider using a grid system or flexbox for arranging the days in the heatmap layout.

4. **Add Interactivity:**
   - Implement hover effects and tooltips to display additional information about contributions on a specific day. 
   - Utilize the provided `Tooltip` component from `components/ui/tooltip.tsx` for this purpose.

### Additional Considerations

- **User Authentication:** If you want to display contributions for a specific user, you'll need to implement user authentication to obtain an API access token.
- **Caching:** Cache the fetched contribution data to improve performance and reduce API requests.
- **Styling:** Customize the appearance of the heatmap using Tailwind CSS classes to match your desired design.
- **Responsiveness:** Ensure the heatmap is responsive and adapts to different screen sizes.

By following these steps, you can build a fully functional GitHub contribution heatmap. 
