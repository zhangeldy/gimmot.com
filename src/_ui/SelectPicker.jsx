import React from "react";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Select from "@material-ui/core/Select/Select";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  > div {
    width: 100% !important;

    ::before,
    ::after {
      border: none !important;
    }
    > div > div {
      :hover {
        border: 1px solid #5aa3b0 !important;
        border-radius: 4px !important;
      }
      :focus {
        background: none !important;
      }
      padding-left: 12px !important;
      padding-top: 7px !important;
      border: 1px solid rgb(199, 199, 199) !important;
      border-radius: 4px !important;
    }
  }
`;

export default class SelectPicker extends React.Component {
  getChecked = optionValue => {
    const { value } = this.props;
    if (value instanceof Array) {
      return value.includes(optionValue);
    } else {
      return value === optionValue;
    }
  };

  render() {
    const { name, value, options, onChange, multiple, onBlur, disabled } = this.props;
    return (
      <Div onBlur={() => onBlur()}>
        <Select
          name={name}
          multiple={multiple}
          displayEmpty
          value={value}
          onChange={event => onChange(event)}
          className={disabled ? 'disabled-input' : ''}
          renderValue={value => {
            if (value === '' || value.length === 0) {
              return <span style={{color: '#BFBFBF'}}>Выберите значение</span>
            }
            let result = [];
            for (let option of options) {
              if (this.getChecked(option.value)) {
                result.push(option.label);
              }
            }
            return result.join(", ");
          }}
        >
          <MenuItem value="" selected={true} disabled>
            <ListItemText primary="Выберите значение" />
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              style={{
                backgroundColor: this.getChecked(option.value)
                  ? "#eeeeee"
                  : "inherit"
              }}
            >
              {multiple && (
                <Checkbox
                  checked={this.getChecked(option.value)}
                  style={{ marginRight: 5, width: 30 }}
                />
              )}
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </Div>
    );
  }
}

SelectPicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
};
