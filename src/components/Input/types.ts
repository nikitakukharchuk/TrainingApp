import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  iconBefore?: React.ReactNode;
  error?: string;
}
