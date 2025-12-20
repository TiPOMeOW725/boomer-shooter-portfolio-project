
## Phase 1 The DevOps Architechture

### Diagram

```mermaid
graph TD
    A[VS Code] -->|Develops in| B[Dev Container]
    B -->|Git Commit & Push| C[GitHub Repo Feature Branch]

    C -->|Open Pull Request| D{CI Workflow}
    D -->|Lint| E[Lint Check]
    D -->|Build| F[Build Check]

    E -->|Pass| G{All Checks Passed}
    F -->|Pass| G

    G -->|Merge| H[Main Branch]

    H -->|Trigger| I{CD Workflow}
    I -->|Deploy| J[GitHub Pages]

```

### Components

| Component | Choice |
|----|-----|
| Local Env | Dev Container |
| Bundler | Vite |
| Hosting | GitHub Pages (For now) |
| CI System | GitHub Actions (For now) |