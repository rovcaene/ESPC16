/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_cb1315b6bae34745a7b094d1d8837761(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_cb1315b6bae34745a7b094d1d8837761.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fItem_Card.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Byline':[], 'Description':[], 'Picture URL':[], 'Email':['Email'], 'Web Page URL':[]};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var fancyColors = ['Red','Blue-Grey','Pink','Purple','Deep-Purple','Indigo','Blue','Light-Blue','Cyan','Teal','Green','Light-Green','Lime','Yellow','Amber','Orange','Deep-Orange','Brown','Grey'];
        var fancyItem = {};
        fancyItem.title = $getItemValue(ctx, "Title");
        fancyItem.byline = $getItemValue(ctx, "Byline");
        fancyItem.description = $getItemValue(ctx, "Description");
        fancyItem.email = $getItemValue(ctx, "Email");
        fancyItem.webpageUrl = $getItemValue(ctx, "Web Page URL");
        if(fancyItem.webpageUrl.value != null){
          fancyItem.webpageUrl = fancyItem.webpageUrl.value.substring(0, fancyItem.webpageUrl.value.indexOf(','));
        }
        fancyItem.pictureUrl = $getItemValue(ctx, "Picture URL");
        if(fancyItem.pictureUrl.value != null){
          fancyItem.pictureUrl = fancyItem.pictureUrl.value.substring(0, fancyItem.pictureUrl.value.indexOf(','));
        }
        fancyItem.color = fancyColors[Math.floor(Math.random()*fancyColors.length)];
      ms_outHtml.push(''
,''
,'    <div class="col-md-4 col-sm-6 col-xs-12">'
,'      <article class="material-card ', fancyItem.color ,'">'
,'        <h2>'
,'          <span>', fancyItem.title ,'</span>'
,'          <strong>'
,'            <i class="fa fa-fw fa-star"></i>'
,'            ', fancyItem.byline ,''
,'          </strong>'
,'        </h2>'
,'        <div class="mc-content">'
,'          <div class="img-container">'
,'            <img class="img-responsive" src="', fancyItem.pictureUrl ,'" />'
,'          </div>'
,'          <div class="mc-description">'
,'            ', fancyItem.description ,''
,'          </div>'
,'        </div>'
,'        <a class="mc-btn-action">'
,'          <i class="fa fa-bars"></i>'
,'        </a>'
,'        <div class="mc-footer">'
,'          <h4>'
,'            Links'
,'          </h4>'
,'          <a class="fa fa-fw fa-envelope" href="mailto:', fancyItem.email ,'"></a>'
,'          <a class="fa fa-fw fa-globe" href="', fancyItem.webpageUrl ,'"></a>'
,'        </div>'
,'      </article>'
,'    </div>'
,'  '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_cb1315b6bae34745a7b094d1d8837761() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fItem_Card.js", DisplayTemplate_cb1315b6bae34745a7b094d1d8837761);
}

}
RegisterTemplate_cb1315b6bae34745a7b094d1d8837761();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fItem_Card.js"), RegisterTemplate_cb1315b6bae34745a7b094d1d8837761);
}