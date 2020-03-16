import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  vertical-align: top;

  ${({
    disabled,
    error,
    full,
    label,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    height: ${input.field.height}px;

    ${
      !label
        ? `
          border-radius: ${input.border.radius}px;
          border-width: ${input.border.width}px;
          border-style: solid;
          border-color: ${input.border.color.default};
        `
        : ''
    }


    & {
      width: ${full ? '100%' : `${input.field.width}px`};
    }

    ${
      error
        ? `
      border-color: ${colors.negative[1]};

      fieldset {
        border-color: ${colors.negative[1]};
      }
    `
        : ''
    }


    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.medium}px;
      padding-left: ${spacing.xsmall}px;

      height: ${input.field.height}px;
      width: 20px;

      fill: ${input.font.color.default};
      outline: none;

      &:hover, &:focus {
        fill: ${input.font.color.focus};
      }
      
      box-sizing: content-box;
      cursor: pointer;
    }

    &:focus-within {
      legend {
        max-width: 1000px;
        font-weight: ${input.label.font.weight.typed};
      }
    }

    &:hover, &:focus-within {
      ${
        label
          ? `
          fieldset {
            border-color: ${
              error ? colors.negative[1] : input.border.color.typed
            };

            ${disabled ? `border-color: ${colors.gray.i30};` : ''}
          }`
          : `
          border-color: ${
            error ? colors.negative[1] : input.border.color.typed
          };

          ${disabled ? `border-color: ${colors.gray.i30};` : ''}
      `
      }
    }

    ${
      disabled
        ? `
            border-color: ${colors.gray.i30};
            color: ${colors.gray.i30};

            svg {
              fill: ${colors.gray.i30};
              pointer-events: none;
            }

            ${label ? `fieldset { border-color: ${colors.gray.i30}; }` : ''}
          `
        : ''
    }
  `}
`;

export default Wrapper;
