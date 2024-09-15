# Gem of Your Soul

## Prerequisites

This project uses `pnpm` as the Node package manager.

## Project Structure

```
/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── layouts/
    ├── pages/
    ├── stores/
    ├── types/
    └── utils/
```

## Getting Started

1. Clone this repository

```
git clone git@github.com:esc-chula/gem-of-your-soul.git
```

2. Change directory

```
cd gem-of-your-soul
```

3. Install dependencies

```
pnpm install
```

4. Run development server

```
pnpm dev
```

5. The development server will be running on [localhost:4321](http://localhost:4321)

## Contributing

1. Create new branch

```
git checkout -b <BRANCH_NAME> origin/dev
```

2. Make your changes

3. Stage and commit your changes

```
git add .
git commit -m "<COMMIT MESSAGE>"
```

4. Push your changes

```
git push origin <BRANCH_NAME>
```

5. Create a pull request to the dev branch in GitHub

Before pushing to the remote repository, make sure one has formatted their code correctly. By running this command below, the code will be formatted.

```
pnpm format
```

For **Windows** users, please run the following command to prevent line ending issues.

```
git config --global core.autocrlf false
```

### Conventional Commit Format

In short, the commit message should look like this:

```
git commit -m "feat: <what-you-did>"

# or

git commit -m "fix: <what-you-fixed>"

# or

git commit -m "refactor: <what-you-refactored>"
```

The commit message should start with one of the following types:

- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  For more information, please read the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/) documentation.
