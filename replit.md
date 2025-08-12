# Overview

This project is an "Integral Community" (AllUnity) website built as a full-stack web application. It serves as a philosophical platform for the "neo-all-unity" movement, providing content management for articles, news, forum discussions, and community projects. The site focuses on integral philosophy, synthesis of knowledge, and community building around philosophical principles.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive component library based on Radix UI primitives

## Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful API with route handlers for CRUD operations
- **Development Setup**: Custom Vite integration for development with HMR support
- **Error Handling**: Centralized error middleware with structured error responses

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured for production use
- **Schema Management**: Centralized schema definitions with Zod validation
- **Storage Interface**: Abstract storage interface with in-memory implementation for development

## Content Management
The application manages four main content types:
- **Articles**: Categorized content (manifest, codex, etc.)
- **News**: Community announcements and updates
- **Forum Posts**: Discussion threads with categories and engagement metrics
- **Projects**: Community initiatives with descriptions and metadata

## Development Environment
- **Build System**: Vite with React plugin and custom error overlay
- **Development Server**: Express server with integrated Vite middleware
- **Hot Reload**: Full HMR support for rapid development
- **Type Safety**: Comprehensive TypeScript configuration across frontend/backend/shared modules

## Project Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Client Directory**: React application with component library
- **Server Directory**: Express API with route handlers and storage layer
- **Shared Directory**: Common schemas and type definitions

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18+ with modern hooks and patterns
- **Vite**: Fast build tool with plugin ecosystem
- **Express**: Node.js web framework for API server

## Database and ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with migration support
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **PostgreSQL**: Primary database system

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component system

## Development Tools
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **TanStack Query**: Server state management and caching

## Authentication and Sessions
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used in current implementation)

## Validation and Forms
- **Zod**: Schema validation library
- **React Hook Form**: Form management with validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

The application follows a modern full-stack architecture with strong type safety, component reusability, and a clean separation between presentation and business logic layers.