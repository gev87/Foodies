This project leverages Next.js's app router, making use of structural files like "layout", "page", "not-found", and "error". CSS is handled using modules for better organization and maintainability.
 Key features include:

Server Actions and Components: Utilizing server actions and server components for efficient data handling and rendering.

Database Interaction: Using the "better-sqlite3" package to interact with the SQLite database.

Slug Generation: Implementing the "slugify" package to create slugs for URLs.

XSS Protection: Using the "xss" package to sanitize input and prevent Cross-Site Scripting (XSS) attacks.

Form Handling: Working with hooks like useActionState() and useFormStatus() for managing form state.

File Uploads: Advanced usage of the 'file' HTML input element, including custom styling and using the FileReader object to upload specific types of images.

Cache Revalidation: Implementing strategies to trigger cache revalidation.

Metadata Management: Adding both static and dynamic metadata to enhance the application's SEO and user experience.

This application demonstrates a comprehensive usage of Next.js features and best practices, providing a robust example of a full-stack web application.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
