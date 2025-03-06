#!/bin/bash

echo "PM2 Fix Script"
echo "----------------------"

# Uninstall PM2 globally
echo "Removing existing PM2 installation..."
npm uninstall -g pm2

# Install PM2 globally for current Node version
echo "Installing PM2 for current Node.js version..."
npm install -g pm2

# Check versions
echo "----------------------"
echo "Node.js version: $(node -v)"
echo "PM2 version: $(pm2 -v)"
echo "----------------------"
echo "PM2 reinstallation complete. Try running your application again."
