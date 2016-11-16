/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_d6aa93b34a184627a8a4e9532379e65d(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_d6aa93b34a184627a8a4e9532379e65d.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
);
    if (!$isNull(ctx.ClientControl) &&
        !$isNull(ctx.ClientControl.shouldRenderControl) &&
        !ctx.ClientControl.shouldRenderControl())
    {
        return "";
    }
    ctx.ListDataJSONGroupsKey = "ResultTables";
    var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

    var noResultsClassName = "ms-srch-result-noResults";

    var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
    {
        var iStr = [];
        iStr.push(itemRenderResult);
        return iStr.join('');
    };
    ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;
    ms_outHtml.push(''
,'    <section class="container">'
,'      <div class="row active-with-click">'
,'        ', ctx.RenderGroups(ctx) ,''
,'      </div>'
,'    </section>'
,''
);
      $addRenderContextCallback(ctx, "OnPostRender", function () { Cards(); });
      ms_outHtml.push(''
);
    if (ctx.ClientControl.get_shouldShowNoResultMessage())
    {
    ms_outHtml.push(''
,'    <div class="', noResultsClassName ,'">', $noResults ,'</div>'
);
    }
    ms_outHtml.push(''
,'  '
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_d6aa93b34a184627a8a4e9532379e65d() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", DisplayTemplate_d6aa93b34a184627a8a4e9532379e65d);
}
//
$includeCSS("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", "~site/_catalogs/masterpage/Display Templates/ESPC/Content Web Parts/style/bootstrap.min.css");
$includeCSS("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", "~site/_catalogs/masterpage/Display Templates/ESPC/Content Web Parts/style/font-awesome.min.css");
$includeCSS("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", "~site/_catalogs/masterpage/Display Templates/ESPC/Content Web Parts/style/martial-cards.css");

$includeScript("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", "~site/_catalogs/masterpage/Display Templates/ESPC/Content Web Parts/js/jquery-2.1.3.min.js");
$includeScript("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js", "~site/_catalogs/masterpage/Display Templates/ESPC/Content Web Parts/js/cards.js");
  //
}
RegisterTemplate_d6aa93b34a184627a8a4e9532379e65d();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~site\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fESPC\u002fContent Web Parts\u002fControl_Cards.js"), RegisterTemplate_d6aa93b34a184627a8a4e9532379e65d);
}