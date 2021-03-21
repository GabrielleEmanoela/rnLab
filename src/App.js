import React from 'react'
import { View } from 'react-native'

import X, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro_comp'

export default () =>

    <View>
        <Primeiro></Primeiro>
        <X> </X>
        <Comp1></Comp1>
        <Comp2></Comp2>
    </View>

