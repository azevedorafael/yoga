import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { string, bool, number, func, shape } from 'prop-types';

import Wrapper from '../../Input/web/Wrapper';
import Field from '../../Input/web/Field';
import Label from '../../Input/web/Label';
import Helper from '../../Input/web/Helper';

const Root = styled.div`
  display: inline-block;

  cursor: text;

  ${({ full }) => `
    width: ${full ? '100%' : 'auto'};
  `}
`;

const StyledWrapper = styled(Wrapper)`
  ${({
    theme: {
      yoga: {
        components: { textarea },
      },
    },
  }) => `
    height: 88px;

    padding-top: ${textarea.padding.top}px;
    padding-right: ${textarea.padding.right}px;
    padding-bottom: ${textarea.padding.bottom}px;
    padding-left: ${textarea.padding.left}px;
   `}
`;

const StyledField = styled(Field)`
  resize: none;
  height: 100%;

  padding: 0;
`;

/**
 * TextArea is a type of text field which has a larger initiation size to
 * encourage a bigger user input. This component has a fixed height and the text
 * lines are increased when the input reaches the limit of lines established for
 * the field. This action creates a vertical scroll inside the component.
 */
const TextArea = React.forwardRef(
  (
    {
      disabled,
      error,
      full,
      helper,
      label,
      maxLength,
      className,
      style,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    const [typed, setTyped] = useState(Boolean(value));

    const textAreaRef = ref || useRef(null);

    return (
      <Root
        className={className}
        full={full}
        style={style}
        onClick={() => textAreaRef.current.focus()}
      >
        <StyledWrapper error={error} disabled={disabled} full={full}>
          <StyledField
            {...props}
            disabled={disabled}
            full={full}
            label={label}
            as="textarea"
            ref={textAreaRef}
            cleanable={false}
            maxLength={maxLength}
            typed={typed}
            error={error}
            value={textAreaValue}
            onChange={e => {
              setTextAreaValue(e.target.value);
              setTyped(Boolean(e.target.value));
              onChange(e);
            }}
          />
          {label && (
            <Label error={error} disabled={disabled}>
              {label}
            </Label>
          )}
        </StyledWrapper>
        <Helper
          disabled={disabled}
          error={error}
          helper={helper}
          maxLength={maxLength}
          length={textAreaValue.length}
        />
      </Root>
    );
  },
);

TextArea.propTypes = {
  className: string,
  disabled: bool,
  /** A error text to be displayed below field */
  error: string,
  full: bool,
  /** A helper text to be displayed below field */
  helper: string,
  label: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  placeholder: string,
  readOnly: bool,
  style: shape({}),
  value: string,
  onChange: func,
};

TextArea.defaultProps = {
  className: undefined,
  disabled: false,
  error: undefined,
  full: false,
  helper: undefined,
  label: '',
  maxLength: undefined,
  placeholder: undefined,
  readOnly: false,
  style: undefined,
  value: '',
  onChange: () => {},
};

export default TextArea;
