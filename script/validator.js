document.getElementById('validate').addEventListener('click', () => {
    const schemaInput = document.getElementById('schema').value;
    const payloadInput = document.getElementById('payload').value;
    const resultDiv = document.getElementById('result');

    try {
        const schema = formatInput(schemaInput);
        const payload = formatInput(payloadInput);
        const ajv = new Ajv({ allErrors: true });
        const validate = ajv.compile(schema);
        const isValid = validate(payload);

        if (isValid) {
            resultDiv.innerHTML = `<p class="success">Validation successful!</p>`;
        } else {
            const validationMessages = [];

            validate.errors.forEach(err => {
                let fieldPath = `${err.dataPath ? `${err.dataPath}` : ""}${err.params.missingProperty ? err.params.missingProperty : ""}`;

                let message = "";

                if (err.keyword === "required") {
                    message = `${fieldPath} is required and must be in valid format`;
                } else if (err.keyword === "type") {
                    message = `${fieldPath} must be of type ${err.params.type}`;
                } else if (err.keyword === "minLength") {
                    message = `${fieldPath} cannot be empty`;
                } else {
                    message = err.message;
                }

                validationMessages.push({ field: fieldPath, issue: message });
            });

            resultDiv.innerHTML = `<p class="error">Validation failed:</p><pre>${JSON.stringify(validationMessages, null, 2)}</pre>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p class="error">Invalid JSON input: ${error.message}</p>`;
    }

    function formatInput(input) {
        try {
            return JSON.parse(input);
        } catch (error) {
            const evaluatedObject = Function(`"use strict"; return (${input});`)();
            return JSON.parse(JSON.stringify(evaluatedObject, null, 2));
        }
    }
});
