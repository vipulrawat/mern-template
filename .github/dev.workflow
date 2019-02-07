workflow "Linting" {
  on = "pull_request"
  resolves = ["GitHub Action for npm"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "(npm run lint:dev) && (npm run test:dev)"
}
