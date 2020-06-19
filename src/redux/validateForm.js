export default function validateForm(values) {
    let errors = {};

    if (!values.firstName) {
        errors.firstName = "name required";
    } else if (values.firstName.length < 3) {
        errors.firstName = "must be at least 3 characters";
    }

    if (!values.lastName) {
        errors.lastName = "name required";
    } else if (values.lastName.length < 3) {
        errors.lastName = "must be at least 3 characters";
    }

    return errors;
}