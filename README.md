# Portfolio
This is a personal portfolio project showcasing my skills, projects, and experience as a software developer.

## Live Demo
The portfolio is deployed on GitHub Pages and can be accessed at: [https://CoghillB.github.io/portfolio/](https://CoghillB.github.io/portfolio/)

## Features
- Overview of my technical skills and expertise.
- Detailed descriptions of my projects with links to repositories.
- Contact information for professional inquiries.

## Technologies Used
- React for the front-end UI components
- Tailwind CSS for styling
- Vite as the build tool
- EmailJS for contact form functionality

## Development Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/CoghillB/portfolio.git
    ```
2. Navigate to the project directory:
    ```bash
    cd portfolio
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

### Manual Deployment
You can manually deploy the project to GitHub Pages:

1. Build the project:
    ```bash
    npm run build
    ```
2. Deploy to GitHub Pages:
    ```bash
    npm run deploy
    ```

This will build the project and publish it to the gh-pages branch on GitHub.

### Automated Deployment
This project is also configured with GitHub Actions for automated deployment:

- When you push changes to the `main` branch, GitHub Actions will automatically build and deploy the site to GitHub Pages
- The workflow configuration can be found in `.github/workflows/deploy.yml`
- No manual steps are required for this method

### GitHub Pages Configuration
To ensure GitHub Pages is properly configured:

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Build and deployment":
   - Set Source to "Deploy from a branch"
   - Set Branch to "gh-pages" and folder to "/ (root)"
4. Click Save
5. Your site will be published at `https://[username].github.io/portfolio/`

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
