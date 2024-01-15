import {AccessibilityProps} from 'react-native'

export type RequiredAccessibilityProps = Required<AccessibilityProps>

export type BaseProps<T = string> = Omit<
  AccessibilityProps,
  'accessibilityLabel' | 'accessibilityHint'
> &
  Pick<
    RequiredAccessibilityProps,
    'accessibilityLabel' | 'accessibilityHint'
  > & {
    value: T
    onChange: (value: T) => void
    testID: string
    label?: string
    hasError?: boolean
  }