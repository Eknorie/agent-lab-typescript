#!/bin/bash

# Run tests and validate they pass
echo "Running test suite..."
npm test

# Capture exit code
TEST_EXIT_CODE=$?

if [ $TEST_EXIT_CODE -eq 0 ]; then
  # Tests passed - allow agent to finish
  echo "✓ All tests passed!"
  echo '{"continue": true}'
  exit 0
else
  # Tests failed - block agent from finishing
  echo "✗ Tests failed! Agent session blocked."
  echo '{"stopReason": "test_failure", "systemMessage": "⚠️ Tests failed. Fix the failing tests before ending the session."}'
  exit 2
fi
