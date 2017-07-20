/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

// FIXME This code has been copied from the yangster repository. It should be extracted to a separate package.

import {
    boundsFeature, fadeFeature, hoverFeedbackFeature, popupFeature, SCompartment, selectFeature, layoutFeature,
    SNode
} from "sprotty/lib"

export class YangNode extends SNode {
    cssClass: string

    hasFeature(feature: symbol): boolean {
        return feature === selectFeature || feature === boundsFeature
            || feature === layoutFeature || feature === fadeFeature || feature === hoverFeedbackFeature
            || feature === popupFeature
    }

}

export class ModuleNodeModel extends YangNode {
    title: string
}


export class YangHeaderNode extends SCompartment {
    tag: string
    label: string
}