Feature: API Health Verification
  Scenario: Check health check endpoint
    When I request the API endpoint "/api/health/"
    Then the response status code should be 200