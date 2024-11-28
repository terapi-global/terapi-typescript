Absolutely! Below is the full version of the README for the **Terapi TypeScript SDK**, incorporating both the **API key** and **access token** for authentication.

---

# Terapi TypeScript SDK

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The **Terapi TypeScript SDK** provides a simple interface to interact with the Terapi platform. Terapi centralizes contact data from multiple sources (e.g., CRM systems, email providers), making it easy to manage a unified contact list. With this SDK, you can easily retrieve and manipulate contact data in your TypeScript/JavaScript applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Getting Started](#getting-started)
  - [Example: Retrieve Unified Contacts List](#example-retrieve-unified-contacts-list)
  - [Filtering and Sorting Contacts](#filtering-and-sorting-contacts)
  - [Pagination](#pagination)
  - [Handling Errors](#handling-errors)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

The **Terapi TypeScript SDK** provides an easy-to-use API client to access the Terapi platform. Terapi aggregates contact data from various sources, allowing you to centralize, manage, and interact with your contacts. This SDK makes it simple to authenticate, fetch contact lists, and perform additional operations, all in a TypeScript-friendly environment.

## Features

- Fetch a unified list of contacts from multiple data sources.
- Supports filtering, sorting, and pagination for contact lists.
- Provides easy integration with both Node.js and browser environments.
- Includes TypeScript definitions for type safety.
- Simple authentication using API key and access token.

## Prerequisites

Before you start using the SDK, make sure you have the following:

- **Node.js** (version 12 or higher) installed.
- **npm** or **yarn** for managing dependencies.
- A valid **API key** and **access token** from the Terapi platform.

You can obtain an API key and access token from the [Terapi Dashboard](https://app.terapi.global).

## Installation

To install the **Terapi TypeScript SDK**, you can use **npm** or **yarn**:

### Install via npm

```bash
npm install terapi-global/terapi-typescript
```

### Install via yarn

```bash
yarn add terapi-global/terapi-typescript
```

### Import the SDK

Once installed, you can import the SDK in your TypeScript project:

```typescript
import { TerapiClient } from 'terapi-typescript';
```

---

## Usage

### Getting Started

To interact with the Terapi API, you'll need both an **API key** and an **access token**. These are used to authenticate your application and authorize access to specific user data.

1. **Obtain your Terapi API key** from the Terapi dashboard.
2. **Obtain your access token** (usually via an OAuth flow or provided by Terapi if you're using server-to-server authentication).

Once you have these credentials, you can initialize the SDK and start making requests.

### Example: Retrieve Unified Contacts List

This example demonstrates how to authenticate using both the **API key** and **access token**, and then fetch a unified contacts list.

```typescript
import { TerapiClient } from 'terapi-typescript';

// Initialize Terapi client with both your API key and access token
const apiKey = 'your_terapi_api_key';
const accessToken = 'your_access_token'; // Add your access token here
const client = new TerapiClient(apiKey, accessToken); // Pass both values to the client constructor

// Fetch the unified contacts list
async function fetchContacts() {
  try {
    const contacts = await client.getUnifiedContactsList();
    
    // Log the contacts list
    contacts.forEach((contact) => {
      console.log(`Name: ${contact.name}`);
      console.log(`Email: ${contact.email}`);
      console.log(`Phone: ${contact.phone}`);
      console.log('----------------------');
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
}

fetchContacts();
```

In this example:

- The `TerapiClient` is initialized with both the **API key** and the **access token** for authentication.
- The `getUnifiedContactsList()` method fetches the contacts list, which is then logged to the console.

### Handling Errors

Handling errors is crucial when interacting with external APIs. The SDK throws JavaScript errors, which can be caught using `try-catch` blocks. Here's how to handle errors when fetching contacts:

```typescript
try {
  const contacts = await client.getUnifiedContactsList();
} catch (error) {
  if (error instanceof Error) {
    console.error('Error occurred:', error.message);
  } else {
    console.error('Unknown error occurred');
  }
}
```

This code ensures that errors are caught gracefully and provides information about the issue that occurred.

---

## API Documentation

For full documentation of the Terapi API and all available endpoints, visit the official [Terapi API Documentation](https://docs.terapi.global).

### API Endpoints:

- **getUnifiedContactsList()** – Retrieve a unified list of contacts.
- **getContactDetails(contactId)** – Fetch detailed information about a specific contact.
- **searchContacts(query)** – Search for contacts based on custom queries.

---

## Contributing

We welcome contributions to the **Terapi TypeScript SDK**! If you encounter any issues, have feature requests, or want to contribute to the codebase, feel free to open an issue or submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/my-new-feature`).
5. Open a pull request with a detailed description of the changes.

---
