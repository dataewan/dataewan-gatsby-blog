import React from "react"
import { graphql } from "gatsby"

const GithubLogo = () => (
  <a href="https://github.com/dataewan">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7OyBmaWxsOiMwMDAwMDA7Ij48ZyBpZD0ic3VyZmFjZTFfMTE3XyI+CTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNDEsMjRjMCw5LjQtNy42LDE3LTE3LDE3UzcsMzMuNCw3LDI0UzE0LjYsNywyNCw3UzQxLDE0LjYsNDEsMjR6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMjEsNDF2LTUuNWMwLTAuMywwLjItMC41LDAuNS0wLjVzMC41LDAuMiwwLjUsMC41VjQxaDJ2LTYuNWMwLTAuMywwLjItMC41LDAuNS0wLjUgICBzMC41LDAuMiwwLjUsMC41VjQxaDJ2LTUuNWMwLTAuMywwLjItMC41LDAuNS0wLjVzMC41LDAuMiwwLjUsMC41VjQxaDEuOGMwLjItMC4zLDAuMi0wLjYsMC4yLTEuMVYzNmMwLTIuMi0xLjktNS4yLTQuMy01LjJoLTIuNSAgIGMtMi4zLDAtNC4zLDMuMS00LjMsNS4ydjMuOWMwLDAuNCwwLjEsMC44LDAuMiwxLjFMMjEsNDFMMjEsNDF6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNNDAuMSwyNi40QzQwLjEsMjYuNCw0MC4xLDI2LjQsNDAuMSwyNi40YzAsMC0xLjMtMC40LTIuNC0wLjRjMCwwLTAuMSwwLTAuMSwwICAgYy0xLjEsMC0yLjksMC4zLTIuOSwwLjNjLTAuMSwwLTAuMSwwLTAuMS0wLjFjMC0wLjEsMC0wLjEsMC4xLTAuMWMwLjEsMCwyLTAuMywzLjEtMC4zYzEuMSwwLDIuNCwwLjQsMi41LDAuNCAgIGMwLjEsMCwwLjEsMC4xLDAuMSwwLjJDNDAuMiwyNi4zLDQwLjIsMjYuNCw0MC4xLDI2LjR6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMzkuOCwyNy4yQzM5LjgsMjcuMiwzOS44LDI3LjIsMzkuOCwyNy4yYzAsMC0xLjQtMC40LTIuNi0wLjRjLTAuOSwwLTMsMC4yLTMuMSwwLjIgICBjLTAuMSwwLTAuMSwwLTAuMS0wLjFjMC0wLjEsMC0wLjEsMC4xLTAuMWMwLjEsMCwyLjItMC4yLDMuMS0wLjJjMS4zLDAsMi42LDAuNCwyLjYsMC40YzAuMSwwLDAuMSwwLjEsMC4xLDAuMiAgIEMzOS45LDI3LjEsMzkuOSwyNy4yLDM5LjgsMjcuMnoiPjwvcGF0aD4JPHBhdGggc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGQ9Ik03LjgsMjYuNGMtMC4xLDAtMC4xLDAtMC4xLTAuMWMwLTAuMSwwLTAuMSwwLjEtMC4yYzAuOC0wLjIsMi40LTAuNSwzLjMtMC41YzAuOCwwLDMuNSwwLjIsMy42LDAuMiAgIGMwLjEsMCwwLjEsMC4xLDAuMSwwLjFjMCwwLjEtMC4xLDAuMS0wLjEsMC4xYzAsMC0yLjctMC4yLTMuNS0wLjJDMTAuMSwyNiw4LjYsMjYuMiw3LjgsMjYuNEM3LjgsMjYuNCw3LjgsMjYuNCw3LjgsMjYuNHoiPjwvcGF0aD4JPHBhdGggc3R5bGU9ImZpbGw6IzQ1NUE2NDsiIGQ9Ik04LjIsMjcuOWMwLDAtMC4xLDAtMC4xLTAuMWMwLTAuMSwwLTAuMSwwLTAuMmMwLjEsMCwxLjQtMC44LDIuOS0xYzEuMy0wLjIsNCwwLjEsNC4yLDAuMSAgIGMwLjEsMCwwLjEsMC4xLDAuMSwwLjFjMCwwLjEtMC4xLDAuMS0wLjEsMC4xYzAsMCwwLDAsMCwwYzAsMC0yLjgtMC4zLTQuMS0wLjFDOS42LDI3LjEsOC4yLDI3LjksOC4yLDI3LjkgICBDOC4yLDI3LjksOC4yLDI3LjksOC4yLDI3Ljl6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMTQuMiwyMy41YzAtNC40LDQuNi04LjUsMTAuMy04LjVjNS43LDAsMTAuMyw0LDEwLjMsOC41UzMxLjUsMzEsMjQuNSwzMVMxNC4yLDI3LjksMTQuMiwyMy41eiI+PC9wYXRoPgk8cGF0aCBzdHlsZT0iZmlsbDojNDU1QTY0OyIgZD0iTTI4LjYsMTYuM2MwLDAsMS43LTIuMyw0LjgtMi4zYzEuMiwxLjIsMC40LDQuOCwwLDUuOEwyOC42LDE2LjN6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMjAuNCwxNi4zYzAsMC0xLjctMi4zLTQuOC0yLjNjLTEuMiwxLjItMC40LDQuOCwwLDUuOEwyMC40LDE2LjN6Ij48L3BhdGg+CTxwYXRoIHN0eWxlPSJmaWxsOiM0NTVBNjQ7IiBkPSJNMjAuMSwzNS45YzAsMC0yLjMsMC0yLjgsMGMtMS4yLDAtMi4zLTAuNS0yLjgtMS41Yy0wLjYtMS4xLTEuMS0yLjMtMi42LTMuMyAgIGMtMC4zLTAuMi0wLjEtMC40LDAuNC0wLjRjMC41LDAuMSwxLjQsMC4yLDIuMSwxLjFjMC43LDAuOSwxLjUsMiwyLjgsMmMxLjMsMCwyLjcsMCwzLjUtMC45TDIwLjEsMzUuOXoiPjwvcGF0aD4JPHBhdGggc3R5bGU9ImZpbGw6IzAwQkNENDsiIGQ9Ik0yNCw0QzEzLDQsNCwxMyw0LDI0czksMjAsMjAsMjBzMjAtOSwyMC0yMFMzNSw0LDI0LDR6IE0yNCw0MGMtOC44LDAtMTYtNy4yLTE2LTE2UzE1LjIsOCwyNCw4ICAgczE2LDcuMiwxNiwxNlMzMi44LDQwLDI0LDQweiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
  </a>
)

export default GithubLogo;
