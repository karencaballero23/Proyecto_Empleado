
Runner.pages.PageSettings.addPageEvent('emp_deduciones',Runner.pages.constants.PAGE_LIST,"afterPageReady",function(pageObj,proxy,pageid,inlineRow,inlineObject,row){;});Runner.pages.PageSettings.addPageEvent('emp_deduciones',Runner.pages.constants.PAGE_ADD,"afterPageReady",function(pageObj,proxy,pageid,inlineRow,inlineObject,row){var cdes=Runner.getControl(pageid,'Descripcion');cdes.addStyle('text-transform:uppercase');;});Runner.pages.PageSettings.addPageEvent('emp_deduciones',Runner.pages.constants.PAGE_EDIT,"afterPageReady",function(pageObj,proxy,pageid,inlineRow,inlineObject,row){var cdes=Runner.getControl(pageid,'Descripcion');cdes.addStyle('text-transform:uppercase');;});