# Overview

This is a full-stack web application built as a personal portfolio website for Muhammad Saqib, a computer science student and MERN stack developer. The application showcases his education, skills, projects, and professional background through an interactive, modern web interface. The project follows a monorepo structure with separate client and server applications, designed to demonstrate both frontend and backend development capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** for type safety and modern development practices. The frontend uses **Vite** as the build tool for fast development and optimized production builds. Routing is handled by **Wouter**, a lightweight client-side router that provides navigation between different sections of the portfolio.

The UI framework is based on **shadcn/ui** components, which are built on top of **Radix UI** primitives and styled with **Tailwind CSS**. This combination provides a consistent design system with accessible, customizable components while maintaining a modern dark theme aesthetic with purple and cyan accent colors.

State management is handled through **TanStack Query** (React Query) for server state management and caching, though the current implementation primarily uses it for future API integrations. The application is structured as a single-page application with smooth scrolling navigation between sections.

## Backend Architecture
The server-side is built with **Express.js** and **TypeScript**, following a modular architecture pattern. The server includes middleware for request logging, JSON parsing, and error handling. The application is designed to support both development and production environments with different configurations.

The backend uses a storage abstraction layer through an `IStorage` interface, currently implemented with an in-memory storage class (`MemStorage`). This abstraction allows for easy migration to persistent storage solutions without changing the application logic. The server includes basic user management functionality with CRUD operations.

Development tooling includes **Vite integration** for hot module replacement and development server proxying, enabling seamless full-stack development experience.

## Data Storage Solutions
The application is configured to use **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. Database schema is defined in TypeScript using Drizzle's schema definition syntax, providing compile-time type checking for database queries.

**Neon Database** is configured as the PostgreSQL provider, offering serverless database hosting. Database migrations are managed through Drizzle Kit, with configuration supporting both development and production environments.

The current schema includes user management with username/password authentication, though the portfolio application currently operates primarily as a static showcase with potential for future dynamic features.

## Authentication and Authorization
The application includes basic user authentication infrastructure using session-based authentication. User credentials are stored with hashed passwords, and the system includes user creation and retrieval functionality. Session management is configured using **connect-pg-simple** for PostgreSQL-based session storage.

Currently, the portfolio operates as a public showcase without protected routes, but the authentication infrastructure supports future features like admin panels or user-generated content.

# External Dependencies

## UI and Styling
- **Radix UI** - Provides accessible, unstyled UI primitives for complex components like dialogs, dropdowns, and form controls
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development with custom design system integration
- **Lucide React** - Icon library providing consistent iconography throughout the application
- **Class Variance Authority** - Utility for creating variant-based component APIs with TypeScript support

## Database and ORM
- **Neon Database** - Serverless PostgreSQL database hosting with automatic scaling and branching
- **Drizzle ORM** - Lightweight, type-safe ORM for PostgreSQL with excellent TypeScript integration
- **Drizzle Kit** - Migration and introspection toolkit for Drizzle ORM

## Development and Build Tools
- **Vite** - Fast build tool with hot module replacement for development and optimized production builds
- **TypeScript** - Static type checking and enhanced developer experience
- **ESBuild** - Fast JavaScript bundler used for server-side build processes

## Form and Data Management
- **React Hook Form** - Performant form library with minimal re-renders and built-in validation
- **Hookform Resolvers** - Integration layer for form validation with various schema validation libraries
- **Zod** - TypeScript-first schema validation for runtime type checking and form validation
- **TanStack Query** - Server state management with caching, synchronization, and background updates

## Date and Utility Libraries
- **date-fns** - Modern JavaScript date utility library for date formatting and manipulation
- **clsx** and **tailwind-merge** - Utility functions for conditional CSS class composition

## Deployment and Production
The application is configured for deployment with separate client and server build processes, supporting both development and production environments with appropriate optimizations and configurations.