# Schema Guard - JSON Payload Validator

This tool validates JSON payloads against defined schemas using the powerful [AJV](https://ajv.js.org/) validation library. It supports handling complex, nested schema structures and provides detailed error reporting. The tool allows users to input their payload and schema in either object or JSON string format, and it ensures accurate validation in a single step. Validation errors are displayed in a clear and readable format, highlighting all issues at once.

## Features

- **AJV-based Validation**: Leverages the robust AJV library for schema validation.
- **Support for Nested Structures**: Handles complex and nested schema fields, including array and object types.
- **Clear Error Reporting**: Displays all validation issues in a user-friendly format, highlighting errors across multiple fields.
- **Flexible Input**: Accepts payload and schema as both JavaScript objects or JSON strings.
- **Real-Time Validation**: Perform validation with a single click to check for all issues in one go.

## Installation

Clone the repository and install the necessary dependencies:

1. Clone this repository:

   `git clone https://github.com/your-username/json-payload-validator.git`

2. Navigate to the project directory:

   `cd json-payload-validator`

3. Run project:

   `open index.html file in browser`

## Usage

### Validate Payload Against the Schema

1. Provide the **JSON schema** and **JSON payload**.
2. Click the **Validate** button.
3. View the validation results. If there are errors, they will be displayed in a list, showing the field and specific issues like type mismatches or missing required fields.

### Example:

#### Payload:
```json
{
  "person": {
    "name": "John Doe",
    "age": 30
  }
}
```

### Schema 

``` json
{
  "type": "object",
  "properties": {
    "person": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "age": { "type": "integer" }
      },
      "required": ["name", "age"]
    }
  }
}

```

## Contribution

We welcome contributions to improve this project! You can:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Submit a pull request with a clear description of your changes.

Please ensure your code follows the project's style and includes tests if applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

