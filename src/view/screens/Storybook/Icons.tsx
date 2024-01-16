import React from 'react'
import {View} from 'react-native'

import {atoms as a, useTheme} from '#/alf'
import {H1} from '#/components/Typography'
import {Globe_Stroke2_Corner0_Rounded as Globe} from '#/components/icons/Globe'
import {ArrowTopRight_Stroke2_Corner0_Rounded as ArrowTopRight} from '#/components/icons/ArrowTopRight'

export function Icons() {
  const t = useTheme()
  return (
    <View style={[a.gap_md]}>
      <H1>Icons</H1>

      <View style={[a.flex_row, a.gap_xl]}>
        <Globe size="xs" fill={t.atoms.text.color} />
        <Globe size="sm" fill={t.atoms.text.color} />
        <Globe size="md" fill={t.atoms.text.color} />
        <Globe size="lg" fill={t.atoms.text.color} />
        <Globe size="xl" fill={t.atoms.text.color} />
      </View>

      <View style={[a.flex_row, a.gap_xl]}>
        <ArrowTopRight size="xs" fill={t.atoms.text.color} />
        <ArrowTopRight size="sm" fill={t.atoms.text.color} />
        <ArrowTopRight size="md" fill={t.atoms.text.color} />
        <ArrowTopRight size="lg" fill={t.atoms.text.color} />
        <ArrowTopRight size="xl" fill={t.atoms.text.color} />
      </View>
    </View>
  )
}