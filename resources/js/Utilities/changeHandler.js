export default function changeHandler(event) {
    switch (event.target.tagName) {
        case "SELECT":
            let value = Array.from(event.target.selectedOptions, (option) =>
                Number(option.value)
            );
            return { key: event.target.name, value };
        case "INPUT":
            let newValue;
            switch (event.target.type) {
                case "checkbox":
                    newValue = event.target.checked;
                    break;
                case "file":
                    newValue = event.target.files[0];
                    break;
                default:
                    newValue = event.target.value;
                    break;
            }
            return { key: event.target.name, value: newValue };
        default:
            throw new Error(
                "the tag is not supported in changeHandler.js file"
            );
    }
}
