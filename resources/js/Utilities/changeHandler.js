export default function changeHandler(event) {
    switch (event.target.tagName) {
        case "SELECT":
            if (event.target.multiple) {
                let value = Array.from(event.target.selectedOptions, (option) =>
                    Number(option.value)
                );
                return { key: event.target.name, value };
            } else {
                return {
                    key: event.target.name,
                    value: Number(event.target.value),
                };
            }
        case "INPUT":
        case "TEXTAREA":
            let newValue;
            switch (event.target.type) {
                case "checkbox":
                    newValue = event.target.checked;
                    break;
                case "file":
                    if (event.target.multiple) {
                        newValue = [];
                        for (let i = 0; i < event.target.files.length; i++) {
                            newValue.push(event.target.files[i]);
                        }
                    } else {
                        newValue = event.target.files[0];
                    }
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
