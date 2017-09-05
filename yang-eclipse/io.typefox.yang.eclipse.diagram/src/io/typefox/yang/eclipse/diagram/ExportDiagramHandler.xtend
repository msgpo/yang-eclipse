/*
 * Copyright (C) 2017 TypeFox and others.
 * 
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
package io.typefox.yang.eclipse.diagram

import com.google.gson.JsonObject
import org.eclipse.core.commands.AbstractHandler
import org.eclipse.core.commands.ExecutionEvent
import org.eclipse.core.commands.ExecutionException
import org.eclipse.ui.handlers.HandlerUtil

class ExportDiagramHandler extends AbstractHandler {
	
	override execute(ExecutionEvent event) throws ExecutionException {
		val view = HandlerUtil.getActivePartChecked(event)
		if (view instanceof YangDiagramView) {
			val message = new JsonObject() => [
				addProperty('kind', 'requestExportSvg')
			]
			view.sendAction(message)
		}
		return null
	}
}