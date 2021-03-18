import React, {useCallback, useState} from "react";

const useEventValue = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = useCallback(
        e => {
            setValue(e.target.value);
        },
        [setValue]
    )

    return {
        value,
        onChange: handleChange
    }
}
export default useEventValue;