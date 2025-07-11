# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Setup and Installation

```bash
npm run setup  # Install dependencies, generate Prisma client, and run migrations
```

### Development Server

```bash
npm run dev          # Start dev server with Turbopack
npm run dev:daemon   # Start dev server in background, logs to logs.txt
```

### Build and Production

```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Testing and Code Quality

```bash
npm run test         # Run tests with Vitest
npm run lint         # Run ESLint
```

### Database Operations

```bash
npx prisma generate        # Generate Prisma client
npx prisma migrate dev     # Run database migrations
npm run db:reset           # Reset database (force)
```

## Architecture Overview

UIGen is an AI-powered React component generator built with Next.js 15 and React 19. The application allows users to chat with Claude AI to generate React components with live preview capabilities.

### Core Architecture

**Virtual File System**: The application uses a custom `VirtualFileSystem` class (`src/lib/file-system.ts`) that maintains an in-memory file structure. This allows for dynamic file creation and manipulation without writing to disk.

**AI Integration**: Uses Anthropic's Claude AI via the Vercel AI SDK. The AI has access to custom tools:

- `str_replace_editor`: For editing files (view, create, str_replace, insert operations)
- `file_manager`: For file operations (rename, delete)

**Database**: Uses Prisma with SQLite for persistence. The Prisma client is generated to `src/generated/prisma/` rather than the default location.

### Key Components

**Context Providers**:

- `FileSystemProvider`: Manages the virtual file system state
- `ChatProvider`: Handles AI chat interactions and tool calls

**Main UI Structure**:

- Resizable layout with chat panel (left) and preview/code panel (right)
- Toggle between Preview and Code views
- Code view shows file tree + Monaco editor
- Preview view renders components in an iframe

### Authentication & Projects

- Optional authentication system with bcrypt password hashing
- Anonymous users can use the app without an API key (returns static code)
- Authenticated users get project persistence
- Projects store chat messages and virtual file system state as JSON

### File Organization

- `src/actions/`: Server actions for project management
- `src/components/`: React components organized by feature (auth, chat, editor, preview, ui)
- `src/lib/`: Core utilities, contexts, tools, and transformations
- `src/lib/tools/`: AI tool implementations for file operations
- `src/lib/transform/`: JSX transformation utilities
- `prisma/`: Database schema and migrations

### Environment Variables

- `ANTHROPIC_API_KEY`: Optional - app works without it using mock responses
- Database connection is configured in `prisma/schema.prisma`

### Testing

Tests are located in `__tests__/` directories within each feature folder and use Vitest with React Testing Library.

## Code Guidelines

- Use comments sparingly. Only comment complex code.

## Database

- The database schema is defined in the @prisma/schema.prisma file. Reference it anytime you need to understand the structure of data stored in the database.

# Claude Code Configuration

## Git Workflow Instructions

### Commit Behavior

- **Always remind me to commit changes** after successful code modifications
- When suggesting commits, provide descriptive commit messages following conventional commit format
- Check git status before and after making changes to track what was modified

### Commit Message Format

Use conventional commit format:

- `feat: description` for new features
- `fix: description` for bug fixes
- `refactor: description` for code refactoring
- `docs: description` for documentation changes
- `style: description` for formatting changes
- `test: description` for test additions/modifications

### Automatic Commit Option (Choose One)

#### Option 1: Reminder Only (Recommended)

```
After each successful code change:
1. Show git status
2. Suggest an appropriate commit message
3. Remind me to run: git add . && git commit -m "suggested message"
```

#### Option 2: Semi-Automatic

```
After each successful code change:
1. Stage the changes: git add .
2. Ask for confirmation before committing
3. Use the suggested commit message or ask for a custom one
```

#### Option 3: Fully Automatic (Use with caution)

```
After each successful code change:
1. Automatically stage: git add .
2. Automatically commit with generated message
3. Show what was committed
```

### Git Commands to Use

- `git status` - Check current state
- `git add .` - Stage all changes
- `git add [specific-file]` - Stage specific files
- `git commit -m "message"` - Commit with message
- `git log --oneline -5` - Show recent commits

### Example Workflow

1. Make code changes
2. Run tests if applicable
3. Check git status
4. Stage appropriate files
5. Commit with descriptive message
6. Optionally push to remote

## Additional Preferences

- Always check if changes break existing functionality
- Prefer atomic commits (one logical change per commit)
- Include relevant file paths in commit messages when helpful
- Ask before committing if changes affect multiple unrelated areas
