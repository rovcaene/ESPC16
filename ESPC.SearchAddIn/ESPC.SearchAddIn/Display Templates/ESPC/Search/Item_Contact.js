/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_4e2d8dc1005d4ef59266c6d25153f971(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_4e2d8dc1005d4ef59266c6d25153f971.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fSearch\u002fItem_Contact.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'FirstName':['FirstName'], 'FullName':['FullName'], 'Email':['Email'], 'WorkCompany':['WorkCompany'], 'JobTitle':['JobTitle'], 'WorkPhone':['WorkPhone'], 'WorkAddress':['WorkAddress'], 'WorkCity':['WorkCity'], 'WorkCountry':['WorkCountry'], 'WorkZip':['WorkZip'], 'Photo':['Photo']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
            if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
                var id = ctx.ClientControl.get_nextUniqueId();
                var itemId = id + Srch.U.Ids.item;
          var hoverId = id + Srch.U.Ids.hover;
          var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Default_HoverPanel.js";
                $setResultItem(itemId, ctx.CurrentItem);
          if(ctx.CurrentItem.IsContainer){
            ctx.CurrentItem.csr_Icon = Srch.U.getFolderIconUrl();
          }
          ctx.currentItem_ShowHoverPanelCallback = Srch.U.getShowHoverPanelCallback(itemId, hoverId, hoverUrl);
                ctx.currentItem_HideHoverPanelCallback = Srch.U.getHideHoverPanelCallback();
    ms_outHtml.push(''
,'    <div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="DefaultItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback ,'" onmouseout="', ctx.currentItem_HideHoverPanelCallback ,'">'
,'      <h2><a href="', ctx.CurrentItem.Path ,'">', ctx.CurrentItem.FullName ,'</a></h2>'
,'      <div style="margin-left:15px;">'
,'        <div style="margin:10px; width:150px; float:left;">'
,'          <img src="', ctx.CurrentItem.Photo.substring(0, ctx.CurrentItem.Photo.indexOf(',')) ,'" title="', ctx.CurrentItem.Photo.substring(ctx.CurrentItem.Photo.indexOf(',') + 1) ,'" style="width:150px; height:150px;" />'
,'        </div>'
,'        <div style="float:left;">'
,'          <h3><i>', ctx.CurrentItem.JobTitle ,'</i> @ ', ctx.CurrentItem.WorkCompany ,'</h3>'
,'          <br />'
,'          <b>Phone:</b> <i>', ctx.CurrentItem.WorkPhone ,'</i><br />'
,'          <b>Email:</b> <i>', ctx.CurrentItem.Email ,'</i><br />'
,'          <div>'
,'            <b>Address:</b> <br />'
,'            <div style="padding-left: 20px;">'
,'              <i>', ctx.CurrentItem.WorkAddress ,',</i><br />'
,'              <i>', ctx.CurrentItem.WorkZip ,' ', ctx.CurrentItem.WorkCity ,'</i><br />'
,'              <i>', ctx.CurrentItem.WorkCountry ,'</i>'
,'            </div>'
,'          </div>'
,'        </div>'
,'        <div style="clear:both;"></div>'
,'      </div>'
,'      <div id="', $htmlEncode(hoverId) ,'" class="ms-srch-hover-outerContainer"></div>'
,'    </div>'
);
            }
    ms_outHtml.push(''
,'  '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_4e2d8dc1005d4ef59266c6d25153f971() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Contact", DisplayTemplate_4e2d8dc1005d4ef59266c6d25153f971);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fSearch\u002fItem_Contact.js", DisplayTemplate_4e2d8dc1005d4ef59266c6d25153f971);
}

}
RegisterTemplate_4e2d8dc1005d4ef59266c6d25153f971();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fSearch\u002fItem_Contact.js"), RegisterTemplate_4e2d8dc1005d4ef59266c6d25153f971);
}