import { TextField, Tooltip } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Error as ErrorIcon, Search as SearchIcon } from '@material-ui/icons';
import React from 'react';
import { Box, ErrorBadge, IconButtonStyled } from './styles';

function Input({
  className,
  type,
  name,
  onChange,
  onBlur,
  errors,
  value,
  touched,
  placeholder,
  label,
}) {
  function isErrorIcon() {
    if (!errors) {
      return false;
    }
    return (
      <Tooltip title={errors || ''}>
        <IconButtonStyled>
          <ErrorBadge position="end">
            <ErrorIcon color="error" />
          </ErrorBadge>
        </IconButtonStyled>
      </Tooltip>
    );
  }

  return (
    <Box>
      <TextField
        className={className}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        error={!!touched && !!errors}
        value={value}
        fullWidth
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: isErrorIcon(),
        }}
      />
    </Box>
  );
}

export default Input;
