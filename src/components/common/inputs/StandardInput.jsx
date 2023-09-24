import { useEffect, useMemo } from "react";
import { StringInput } from "./StringInput";
import { NumberInput } from "./NumberInput";
import { CheckboxInput } from "./CheckboxInput";

export const StandardInput = (props) => {
    const { type, register, id } = props;

    const extraProps = useMemo(() => {
        let _extraProps = {};
        if (register && id) _extraProps = register(id, type);
        return _extraProps;
    }, [register, id]);

    const inputProps = { ...props, ...extraProps };
    delete inputProps.register;

    const input = useMemo(() => {
        let _input;
        switch (type) {
            case 'email':
            case 'password':
            case 'string': _input = <StringInput {...inputProps} />;
                break;
            case 'number': _input = <NumberInput {...inputProps} />;
                break;
            case 'checkbox': _input = <CheckboxInput {...inputProps} />;
                break;
            default: _input = <StringInput {...inputProps} />;
        }
        return _input;
    });

    return (
        <>{input}</>
    );
};